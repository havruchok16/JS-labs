//Task 1
function pow(x, n) {
    let result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }  
}
    x = prompt("x?", '')
    n = prompt("n?", '')
    if (n < 0) {
        alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
    } else {
        alert(pow(x, n));
    }

//Task 2
let username = "Yana";
let city = "Minsk";
let yearOfBirth = 2001;
let color = "rgb(255,0,0)";
let cancelAnswer = "No";
let okAnswer = "Yes";
let infinity = Infinity;
let number = 532;
let perimeter = "120 мм";
let messageForUser = "Введеные данные неверные";

//Task 3
console.log("Types: " + typeof  5, typeof "Name", typeof 0, typeof 0.23, typeof (1/0), typeof true, typeof null);

//Task 4
let width = 45;
let height = 21;
let areaOfRect = width * height;

console.log("Area of rect:" + areaOfRect + "mm");

//Task 5
let count = (Math.floor(45/5)*Math.floor(21/5));

console.log("Count:" + count);

//Task 6
let i = 2;
let x = ++i;
let z = i++;

console.log("x = " + x + " z = " + z);

//Task 7
console.log("Привет" > "привет", "Привет" > "Пока", 45 > "53", false > 3,  true > "3", 3 > "5mm", null > undefined);

//Task 8
alert(messageForUser);

//Task 9
let secretAnswer = "secret";
var userAnswer = prompt("How are you?", '');

if (userAnswer === secretAnswer) {
    alert("Equal");
} else {
    alert("Not Equal");
}

//Task 10
let realLogin = "Yana";
let realPassword = "1609";

let login = prompt("Enter your login", '');
let password = prompt("Enter your password", '');

if (login === realLogin && password === realPassword) {
    alert("Ok");
} else {
    alert("Incorrect password or login");
}

//Task 11
let Russian = true;
let Mathe = true;
let English = true;

if (Russian && Mathe && English) {
    alert("Cool");
} else if (!Russian || !Mathe || !English) {
    alert("Not good");
} else {
    alert("Bad");
}

//Task 12
let a = +prompt("Enter first number", '');
let b = +prompt("Enter second number", '');

alert(`Sum = ${a + b}`);

//Task 13
console.log(true + true, 0 + "5", 5 + "mm", 8/Infinity, 9 * "\n9", null - 1, "5" - 2, "5px" - 3, true - 3, 7 || 0);

//Task 14
let str = "";
for (var j = 1; j < 11; j++) {
    if (j % 2 == 0){
        str += j + 2 + "; "
    } else {
        str += j + "mm; "
    }
}

console.log(str);

//Task 15
let num = 0;
while (num < 100) {
    num = prompt("Enter the number", '');
}

//Task 16
let day = +prompt("Enter a number from 1 to 7", '1');
switch (day) {
    case 1:
    alert("Monday");
    break; 
    case 2:
    alert("Truesday");
    break; 
    case 3:
    alert("Wednesday");
    break; 
    case 4:
    alert("Thursday");
    break; 
    case 5:
    alert("Friday");
    break; 
    case 6:
    alert("Saturday");
    break; 
    case 7:
    alert("Sunday");
    break; 
    default:
    alert("Ooops");
    break;
}
