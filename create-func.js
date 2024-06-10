/*1. 함수 선언문 */
function sayHello() {
    console.log('Hello!');
}
/*2. 함수 표현식 */
const sayHello2 = function(){
    console.log('Hello!!');
}
/*3. Function */
const sayHello3 = new Function('console.log(`Hello!!!!`)');

/*1. 화살표 함수 */
const sayHello4 = ()=>{
    console.log("Bye!!!");
}

sayHello();
sayHello2();
sayHello3();
sayHello4();

/* 즉시 실행 */
(function practice(){
    console.log("excute right away!")
})();

/* 재귀 */
function practice2(i){
    if (i === 3) return;
    console.log(i);
    practice2(i+1);
}
/* 중첩 */
function first(arg){
    function second(){
        console.log(arg);
    }
    second();
}
/* 콜백 */
function callBack(arg) {
    arg();
}

practice2(1);
first("중첩");
callBack(()=>{
    console.log("callBack!");
})

