/*
* 以下の `Detail` 型を、 `Mapped Type` を用いて全て optional なパラメータを持つ型にしてください。
* */

// 以下のコードのコメントアウトを外して修正を行う
type Detail = {
  address: string
  gender: boolean
  age: number
}

type OptionalDetail = { [P in keyof Detail]?: Detail[P]; };

const optionalDetail: OptionalDetail = {
  age: 22
}

console.log(optionalDetail.age)
