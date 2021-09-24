// Callback Hell example => promise 로 변경

class UserStorage {
  // 로그인 하는 코드
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id); // 성공했을 때
        } else {
          reject(new Error('not found')); // 실패했을 때
        }
      }, 2000);
    });
  }

  // 사용자의 역할을 받아오는 코드
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' }); // 성공했을 때
        } else {
          reject(new Error('no access')); // 실패했을 때
        }
      }, 1000);
    });
  }
}

// 1. id, password 받아와서 loginUser 실행하기
// 2. id 받아와서 getRoles 실행하기
// 3. name(이름)과 role(역할) 출력하기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password) // 1. id, password 받아와서 loginUser 실행하기
  .then(userStorage.getRoles) // 2. id 받아와서 getRoles 실행하기
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`)) // 3. name(이름)과 role(역할) 출력하기
  .catch(console.log); // 로그인 실패 했을 때 받아오는 코드 블럭
