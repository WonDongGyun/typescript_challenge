// 배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// type TupleToObject<T> = {
//   [key in keyof T]: T[key];
// };

/** 정답
 * T extends readonly any[]         => T가 해당 타입에서 모든 타입의 배열처럼 작동할 수 있게 하기 위함. readonly를 붙임으로서 수정되지 않는 배열임을 선언
 * [key in T[number]]: key         => key는 T[number] 값을 갖게 됨. 따라서 key는 T[0] ... T[3]의 값을 갖음. 타입부에도 key를 넣어줌으로서 원하는 형식 출력 가능
 */

// 질문 1 내가 쓴거는 왜 배열로 나오고 밑에는 왜 객체로 나오는거지?
// 질문 2 number는 여기다가 원래 쓸 수 있는건가?
type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const a: result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};

console.log(a);
