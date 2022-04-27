import q2 from './q2.json';
import q3 from './q3.json';
import q4 from './q4.json';
import q5 from './q5.json';
import tishu from './tishu.json';
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
  '5分句': q5
};

export interface IQuestion {
  fenjus: string[];
  answers: string[];
  yuanwen: string;
}
export async function api(checkedItems: string[]) {
  console.log('checkedItems:' + checkedItems);

  var qs = checkedItems.map((i) => qm[i]).reduce((acc, v) => acc.concat(v), []);
  console.log('qs:' + qs.length);
  const answer = qs[Math.floor(Math.random() * qs.length)];
  const yuanwen = await getTishu(answer);
  return {
    answer: answer,
    yuanwen: yuanwen
  };
}
export async function getTishu(answer: string) {
  console.log('search for ' + answer);
  for (let t of tishu) {
    if (t.search(answer) != -1) {
      return t;
    }
  }
  return 'NOT FOUND';
}
