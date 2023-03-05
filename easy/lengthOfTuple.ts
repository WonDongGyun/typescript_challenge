// 배열(튜플)을 받아 길이를 반환하는 제네릭 Length<T>를 구현하세요.

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type Length<T extends any[]> = T["length"];

// const arry = [1, 2];
// console.log(arry["length"]);

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5
