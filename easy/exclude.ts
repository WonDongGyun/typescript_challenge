// T에서 U에 할당할 수 있는 타입을 제외하는 내장 제네릭 Exclude<T, U>를 이를 사용하지 않고 구현하세요.
type MyExclude<T, U> = T extends U ? never : T;
type example<T, U> = T;

/** 정답
 * 타입 T가 타입 U를 상속하거나 동일 타입이라면 무시(never)하고 아닐 경우 타입 값을 리턴.
 * 조건부 타입을 사용함으로서 해결
 * 타입스크립트의 삼항 연산자 혹은 조건부 타입은 값 대신 타입을 조건에 따라 결정한다.
 * 제네릭의 extends와 조건부 연산자의 extends 는 역할은 비슷하지만 서로 사용처가 다르다.
 * 유니온 타입이 들어오는 경우 분산 조건부 타입이 발동한다.
 * 유니온으로 묶인 타입 하나하나 마다 조건부 타입 검사를 하고 그 결과값들을 묶어 다시 유니온으로 반환해버린다.
 * 즉, "a" | "b" | "c"가 들어온 경우 "a" extends "a" ? never : "a" | "b" extends "a" ? never : "a" | "c" extends "a" ? never : "a"가 된다.
 *
 * 만약, type MyExclude<T, U> = "a" | "b" | "c" extends U ? never : T; 이면 완전 다른 결과가 나온다 ==> "a" | "b" | "c"
 * 조건부 타입(conditional types) 에서 (naked) type parameter 가 사용된 경우에만 분산(distributive) 방식으로 동작하게 된다.
 * (naked) type parameter는 제네릭 T 와 같이 의미가 없는 타입 파라미터를 말하는 것.
 * 만일 직접 리터럴 타입을 명시하거나 혹은 제네릭 T[] 와 같이 변횐된 타입 파라미터이면, naked 가 아니게 된다.
 * 또한 분산 조건부 타입은 never 타입으로 분산이 됬을 경우 이 타입은 제외 시킨다는 특징이 있다. 이를 이용하여 exclude를 구현하는 것이다.
 */

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
