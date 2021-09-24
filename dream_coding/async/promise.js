// Promise is a JavaScript object for asynchronous operation.
// 프로미스는 자바 스크립트 안에 내장되어있는 오브젝트입니다. 비동기 적인 것을 수행할 때 콜백 함수 대신 유용하게 사용합니다.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 프로미스가 만들어질 때는, executor가 자동적으로 실행됩니다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // 프로미스는 만드는 순간 바로 실행되는 것을 알 수 있다.
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공했을 때
    // reject(new Error('no network')); // 실패했을 때
  }, 2000);
});

// 2. Consumer : then, catch, finally
// 프로미스가 잘 수행되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 이 값이 value 파라미터로 전달되어져서 들어옵니다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 성공하든 실패하든 상관없이 실행되는 코드
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 2초 뒤 콘솔에 5 출력

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // 에러 발생 코드
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

getHen() // 받아오는 값이 하나일 땐 생략 가능
  .then(getEgg)
  .catch((error) => {
    return '🍠';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
