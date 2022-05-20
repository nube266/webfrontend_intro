/*
* 以下のコードに長方形(rectangle) を追加し、 `getArea` 関数に面積を求める処理を加えてください。
* */

// 以下のコードのコメントアウトを外して修正を行う
type Square = {
  type: 'square'
  length: number
}

type Rectangle = {
  type: 'rectangle'
  width: number,
  height: number
}


type Shape = Square | Rectangle

function getArea(s: Shape) {
  switch (s.type) {
    case 'square':
      return s.length * s.length
    case 'rectangle':
      return s.height * s.width
  }
}

const square: Square = {
  type: 'square',
  length: 2
}

const rectangle: Rectangle = {
  type: 'rectangle',
  height: 4,
  width: 3
}

console.log(getArea(square))
console.log(getArea(rectangle))