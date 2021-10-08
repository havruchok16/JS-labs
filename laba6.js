console.log("Task 1");

//функция с переменным количеством агрументов
function FuncArg(...args) {
    if(args.length <= 3){
        //args.forEach(console.log); 
        for(let i = 0; i < args.length; i++){
            console.log(args[i]);
        }    
    } else if(args.length > 3 || args.length <= 5){
        for(let i = 0; i < args.length; i++){
            console.log(typeof args[i]);
        }  
    } else if(args.length > 5 || args.length <= 7){
        console.log(args.length);
    } else{
        console.log("Количество очень большое");
    }
}

FuncArg("sdfbgf", 4, "wrig5", 3,5,2,4);

console.log("Task 2");

// window.a;
// console.log(a); //переменная не определена

// console.log(a); //переменная не определена
// window.a = 2;

// console.log(a); //не удается получить доступ к переменной до инициализации
// window.a = 2;
// let a;

// console.log(a); //undefined
// window.a = 2;
// var a;

// console.log(a); //не удается получить доступ к переменной до инициализации
// let a = 2;

// let a = 2;
// window.a = 3;
// console.log(a); //2, если window.a = 3

// var a = 2;
// window.a = 3;
// console.log(a); //3, если убрать window.a, то 2

console.log("Task 3");

function FindSum(param){ //FindSum: function
    let a = param; //a: 4
    let b = a + 1; //b: 5
    console.log(a + b);
}

FindSum(4); //param: 4 

console.log("Task 4");

let s = 5;
//let s;

function InputValue(){
    console.log(s);
}

InputValue();

console.log("Task 5");

//вариант 1
function makeCounter(){
    let count = 0;
    return function(){ //(*)
      return count++;
    };
}
  
let counter1 = makeCounter();
let counter2 = makeCounter();
  
//для каждого вызова функции создается свое лексическое окружение,
//со своим count, поэтому выполнение двух функций независимы
console.log(counter1()); // 0
console.log(counter1()); // 1
  
console.log(counter2()); // 0 

//присоздании нового объекта увеличение счетчика выполняется независимо
//сначала (*) ищет локальную переменную count во вложенной функции
//находит переменную во внешней функции и меняет значение для makeCounter
//нельзя получить доступ к локальной переменной count

//вариант 2
let count = 0;

function makeCounter2(){
    return function(){ //(*)
      return count++;
    };
}
  
let counter3 = makeCounter2();
let counter4 = makeCounter2();
  
console.log(counter3()); // 0
console.log(counter3()); // 1
  
console.log(counter4()); // 2
console.log(counter4()); // 3 

//(*) не находит count во вложенной функции и во внешней
//начинает искать глобальные переменные - находит
//соответственно любые вызовы функции makeCounter2
//будут изменять глобальную переменну, т к она для всех одна

console.log("Task 6");

function Sum(a, b){
    this.s = a + b;
    console.log(`a = ${a}, b = ${b}`);
}

Sum(2, 3);
Sum.s = 3 + 4;
console.log("Sum.s = " + Sum.s);

console.log("Task 7");

let value = 0;

function f(){
    if(1){
        value = true;
    } else{
        let value = false; //созданная переменная не используется
    }
    console.log(value);
}

f();

function f2(){
    if(1){
        value = true;
    } else{
        value = false; 
    }
    console.log(value);
}

f2();

console.log("Task 8");

Object.keys(window).forEach(key => {
    try {
        if(typeof window[key] == 'function' && window[key].caller == null)
        console.log("My function name is:", window[key].name);
    } catch(e) {
    return;
    }
})