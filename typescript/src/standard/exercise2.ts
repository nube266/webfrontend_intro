/*
* 以下のコードは関数の返り値として number 型を返すとして定義しています。
* しかし、関数の実装者は間違った型を返り値として返しているため、コンパイルエラーが発生しています。
* 正しく number 型を返す sum() 関数として修正してください。
* */

// 以下のコードのコメントアウトを外して修正を行う
function sum(num1: number, num2: number): number {
  return num1 + num2
}

console.log(sum(1, 2))