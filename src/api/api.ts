import q2 from './q2.json';
import q3 from './q3.json';
import q4 from './q4.json';
import q5 from './q5.json';
import wang5lv from './wang5lv.json';
import du5lv from './du5lv.json';
import tishu from './tishu.json';
import duilianhua from './duilianhua.json';
import { StringNullableChain } from 'lodash';
import { parse } from 'path';
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
  '王维五律':wang5lv,
  '杜甫五律':du5lv
};
export class IQuestion {
  pre: string;
  post:string;
  fenjus: string[];
  answers: string[];
  yuanwen: string;
  index: Number;

  constructor(
    pre: string,
    yuanwen: string,
    post: string,
    index: Number) {
    this.pre = pre;
    this.yuanwen = yuanwen;
    this.post = post;
    this.index = index;
    this.answers = yuanwen.slice(0, -1).split(/[，；？。]/);
    this.fenjus = [...this.answers].sort(() => Math.random() - 0.5);
  }
}
const regex=/^(.*?)“(.*；.*)”(.*)$/
function parseLine(line: string): IQuestion {
  var m = regex.exec(line);
  if(m != null) {
    // console.log("parseLine pre",m[1],"lian", m[2],"post",m[3])
    return new IQuestion(m[1], m[2],m[3], 0)
  } else {
    console.log("NOT ",line)
    return new IQuestion(line,"","", 0)
  }
}

const lians: IQuestion[] = 
  duilianhua
    .map(line=>parseLine(line));
export async function api(checkedItems: string[]): Promise<IQuestion> {
  // console.log('checkedItems:' + checkedItems);

  // var qs = checkedItems.map((i) => qm[i]).reduce((acc, v) => acc.concat(v), []);
  // console.log('qs:' + qs.length);
  var index = Math.floor(Math.random() * lians.length)
  // console.log("api", index)
  return lians[index];
}
export async function getTishu(answer: string): Promise<[string, Number]> {
  console.log('search for ' + answer);
  for (var i = 0; i < tishu.length; i ++) {
    if (tishu[i].search(answer) != -1) {
      console.log('yuanwen ' + tishu[i]);
      return [tishu[i], i];
    }
  }
  return ['NOT FOUND', -1];
}
export async function getTishuByIndex(index: number): Promise<[string, number]> {
  console.log("getTishuByIndex", index, tishu.length)
  if (index < 0 || index > tishu.length) {
    return ['NOT FOUND', -1];
  }
  return [tishu[index], index]
}
