// T에서 K 프로퍼티만 선택해 새로운 오브젝트 타입을 만드는 내장 제네릭 Pick<T, K>을 이를 사용하지 않고 구현하세요.
// pick 기능 타입스크립트로 구현하기

/** 문제 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const example: TodoPreview = {
  title: "Clean room",
  completed: false,
};

/** 정답
 * keyof t => 객체 t의 키값을 의미                      여기서는 title, completed
 * k extends keyof t => 객체 t의 키값을 상속받은 k      여기서는 title, completed
 * [p in k] => p가 k의 값을 가지고 있으면 true          여기서는 {title, completed} 처럼 2개의 키를 구성하게 됨
 * t[p] => 객체 t에 p의 키를 인덱싱                     여기서는 string, bolean
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
  // [Key in keyof T as Key extends K ? Key : never]: T[Key];
};

console.log(example);
