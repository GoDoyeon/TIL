// 동기와 비동기의 차이점 & callback 함수는 무엇이고, 어떻게 활용할 수 있는지

// JavaScript is synchronous.
// 자바스크립트는 동기적인 아이입니다.
// Execute the code block in order after hoisting.
// 호이스팅 된 이후부터 코드가 작성한 순서부터 차례대로 동기적으로 실행됩니다.
// hoisting : var, function declaration
// 호이스팅 : var 변수, 함수 선언들이 자동적으로 제일 위로 올라가는 것.

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
// 동기적으로 살행
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
// 나중에 실행 (비동기 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 위 코드대로 입력해도 실행은 함수 선언이 제일 위로 올라감
// 실제 순서
function printImmediately(print) {
  print();
}
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기
printImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기
