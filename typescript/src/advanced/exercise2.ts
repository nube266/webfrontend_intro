/*
* 以下の User 型 に companyId: string のプロパティを追加で持つ Admin 型を定義してください
* 余裕があれば User 型と Admin 型を interface で定義した場合もやってみてください
* */

// 以下のコードのコメントアウトを外して修正を行う
type User = {
  id: number
  name: string
}

type Admin = User & {
  companyName: string
}

const user1: User = {
  id: 1,
  name: 'taro'
}

const admin1: Admin = {
  id: 1,
  name: 'jiro',
  companyName: 'Access'
}
