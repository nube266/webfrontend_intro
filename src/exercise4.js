const printUserInUpperCase = user => {
  user.name = user.name.toUpperCase();
  console.log(user);
};
const userList = [];
const user = {
  id: '51ff0475d615329700235136',
  name: 'taro yamada',
  age: 14,
};
const newUser = {...user}
userList.push(user);
printUserInUpperCase(newUser);

console.log(userList[0]);
