class User {
  constructor(id, name, age) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  // prototypeメソッド getName()を実装する
  getName(){
    return this.name;
  }
  // prototypeメソッド getAge()を実装する
  getAge(){
    return this.age;
  }
  // staticメソッド equal(user1, user2)を実装する
  static equal(user1, user2){
    if (user1.id === user2.id)
      return "True";
    else
      return "False";
  }
}

export default User;

const user1 = new User('51ff0475d615329700235136', 'Taro', 14);
console.log(user1.getName());
console.log(user1.getAge());

const user2 = new User('74ff0520d615329720235156', 'Hanako', 14);
console.log(`${user1.name} is ${user2.name}: ${User.equal(user1, user2)}`);
