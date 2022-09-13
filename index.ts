// function a (a: number, b: number):number;
function a (a:number, b:number) {
  return a + b + 1;
}

try {
  const arr = [];
  arr.push('1');
} catch(err) {
  console.error(err)
}


const body:HTMLElement = document.body;
body.innerHTML;


type c = 'a'|'b';
type d = `as ${c}`;
const e:d = `as a`;

const f:[string, number] = ['1', 1];
f.push(3);

const dir = {
  a: 0,
  b : 1
} as const;


const dir2 = {
  a: 0, 
  b: 1
} as const;

type dir2type2 = typeof dir2;


const g:dir2type2 = {a:0, b:1}



// | => "union" "또는" "or", & => "and" "intersection" "둘다 포함"

/* # 객체의 타입 지정
  type=>간단한거, 
  interface=>객체지향 문법 사용 상속 등등.., 툴팁에 자세한 설명이 안나옴

  ## 상속 
  type => & 로 가능
  interface => extends

  ## 네이밍
  - interface 는 Iprops 같이 사용, type 은 TType 같이 사용  
  - 그냥 쓴다

  ## 합치기 
  - interface 는 같은 변수이름을 사용해서 서로다른 interface 를 합칠수 있다 
  - type 과 interface 는 서로 혼용해서 extends 할수 있다
*/

type A = {a: number, b: string};
const obj1:A = {a: 1, b: '2'}

interface B {a: number, b: string};
const obj2:B = {a: 1, b: '2'}

type C = {a: string, b: string[]};
type D = C & {c: number, d: number[]};

const obj3:D = {a:'asd', b:['1'], c:1, d:[1]};


interface E {a: string, b: string[]};
interface F extends E {c: number, d: number[]};

const obj4:F = {a:'asd', b:['1'], c:1, d:[1], e:1, asd: 23};

interface E {e:number, a: string, asd:number}