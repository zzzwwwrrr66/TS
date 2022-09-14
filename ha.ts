{
  

type C = { hello: string };
const c: C = { hello: 'world', why: 'error' }; // 잉여 검사( 바로 타입을 대입할때 추가적으로 타입검사를 진행한다 )

type A = { hello: string };
const obj = { hello: 'world', why: 'error' } // 잉여검사 피하는 법 
const a: A = obj;

const b = { hello: 'world', why: 'error' };
const c: A = b;
}