import q2 from './q2.json';
import q3 from './q3.json';
import q4 from './q4.json';
import q5 from './q5.json';
import wangwei from './wangwei.json';
import tishu from './tishu.json';
import { StringOrNumber } from '@chakra-ui/utils';
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
const qm: any = {
  '2分句': q2,
  '3分句': q3,
  '4分句': q4,
  '5分句': q5,
  '王维':wangwei
};

export class IQuestion {
  fenjus: string[];
  answers: string[];
  yuanwen: string;
  index: Number;

  constructor(
    fenjus: string[],
    answers: string[],
    yuanwen: string,
    index: Number) {
    this.fenjus = fenjus;
    this.answers = answers;
    this.yuanwen = yuanwen;
    this.index = index;
  }
}
export async function api(checkedItems: string[]): Promise<IQuestion> {
  console.log('checkedItems:' + checkedItems);

  var qs = checkedItems.map((i) => qm[i]).reduce((acc, v) => acc.concat(v), []);
  console.log('qs:' + qs.length);
  
  const answer = qs[Math.floor(Math.random() * qs.length)];
  const answers = answer.slice(0, -1).split(/[，；？。]/);
  const fenjus = [...answers].sort(() => Math.random() - 0.5);
  
  const [yuanwen, index] = await getTishu(answer);
  return new IQuestion(fenjus, answers, yuanwen, index);
}
export async function getTishu(answer: string): Promise<[string, Number]> {
  console.log('search for ' + answer);
  for (var i = 0; i < tishu.length; i ++) {
    if (tishu[i].search(answer) != -1) {
      return [tishu[i], i];
    }
  }
  return ['NOT FOUND', 0];
}
export async function getTishuByIndex(index: number): Promise<[string, number]> {
  console.log("getTishuByIndex", index, tishu.length)
  if (index < 0 || index > tishu.length) {
    return ['NOT FOUND', -1];
  }
  return [tishu[index], index]
}
