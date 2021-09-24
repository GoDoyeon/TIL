// Callback Hell example
class UserStorage {
  // 로그인 하는 코드
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  // 사용자의 역할을 받아오는 코드
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// 1. id, password 받아오기
// 2. loginUser 실행하기
// 3. id 받아와서 getRoles 실행하기
// 4. name(이름)과 role(역할) 출력하기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// 2. loginUser 실행하기
userStorage.loginUser(
  id,
  password,
  (user) => {
    // 로그인 성공 했을 때 받아오는 코드 블럭
    // 3. id 받아와서 getRoles 실행하기
    userStorage.getRoles(
      user,
      (userWithRole) => {
        // 4. name(이름)과 role(역할) 출력하기
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`,
        );
      },
      (error) => {
        console.log(error);
      },
    );
  },
  (error) => {
    // 로그인 실패 했을 때 받아오는 코드 블럭
    console.log(error);
  },
);

// 위 코드의 상황 : 콜백 함수 내에서 다른 것을 호출하고 또 콜백하고 이러한 상황이 계속 반복 됨 => 콜백지옥
// 콜백 지옥의 문제점 : 가독성이 떨어짐. => 로직 이해가 어려움. => 유지보수도 어려룸.
