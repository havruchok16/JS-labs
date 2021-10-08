//Task 1

let key = 0;
let users = new Map();

function AddUsers(){
    let username = prompt("Доброе пожаловать в игру, введи свое имя.", '');

    let uniqUsername = CheckUsername(username);
    
    //если имя уникально, то заполняется коллекция
    if(!uniqUsername){
        users.set(key,username);
        key++;
    }
    ShowUsers(users);
}

//вывод игроков
function ShowUsers(users){
    let usersArray = new Array();

    for(let username of users.values()){
        usersArray.push(username);
    }

    console.log(usersArray);
    document.getElementById('allUsers').innerHTML = 
    "Игроки <br>" + usersArray;
}

//проверяет является ли имя уникальным
function CheckUsername(userName){
    let check = false;
    for (let username of users.values()){
        if(userName === username){
            check = true;
            break;
        }
    }
    return check;
}

//Task 2

function SortAsc(){
    let usersArray = new Array();

    for(let username of users.values()){
        usersArray.push(username);
    }

    usersArray.sort();

    console.log(usersArray);
    document.getElementById('users').innerHTML = 
    "Вы выполнили сортировку по алфавиту <br>" + usersArray;

    // function compareNumeric(a, b) {
    //     if (a > b) return 1;
    //     if (a == b) return 0;
    //     if (a < b) return -1;
    //   }

    // arr.sort( (a, b) => a - b );

    // let result = arr.reduce((sum, current) => sum + current, 0);
}

function SortDesc(){
    let usersArray = new Array();

    for(let username of users.values()){
        usersArray.push(username);
    }

    usersArray.sort().reverse();
    
    console.log(usersArray);
    document.getElementById('users').innerHTML = 
    "Вы выполнили сортировку по алфавиту в обратном порядке <br>" + usersArray;
}

function FindLength(){
    let length = prompt("Введите длину имени, чтобы найти пользователя", '');

    let usersArray = new Array();

    for(let username of users.values()){
        usersArray.push(username);
    }

    usersArray.forEach(function(name){
        if(name.length == length){
            console.log(name);
            document.getElementById('users').innerHTML = 
            "Поиск игрока по длине имени <br>" + name;
        }
    })
}

function FindLetter(){
    let letter = prompt("Введите первую букву имени, чтобы найти пользователя", '');

    let usersArray = new Array();

    for(let username of users.values()){
        usersArray.push(username);
    }

    usersArray.forEach(function(name){
        if(name[0] == letter){
            console.log(name);
            document.getElementById('users').innerHTML = 
            "Поиск игрока по первой букве имени <br>" + name;
        } 
    })
}

//Task 3

let usersSet = new Set();

function CollSet(){
    let username = prompt("Доброе пожаловать в игру, введи свое имя.", '');
    
    usersSet.add(username);

    ShowUsers(usersSet);
}

//Task 4

//конструктор создания игроков
function User(username, mark){
    this.username = username;
    this.mark = mark;
}

//генерация рандомных чисел
function GetRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function NewUsers(){
    let newKey = 0;
    let newUsers = new Map();

    for(let username of users.values()){
        newUsers.set(newKey, new User(username, GetRandomInt(0,100)));
        newKey++;
    }

    console.log(newUsers);

    let usersArray = Array.from(newUsers.values())
    
    usersArray.sort(function(a, b) {
        if(a.mark < b.mark) {
            return 1;
        }
        if(a.mark > b.mark) {
            return -1;
        }
        return 0;
    })

    console.log(usersArray);
    document.getElementById('users').innerHTML = 
    "Игроки с баллами созданы <br>";

    return usersArray;
}

//Task 5

function ShowResult(users){
    document.getElementById('users').innerHTML = "";

    for (let index = 0; index < 3; index++) {
        console.log(`${users[index].username} занял ${index + 1} место с баллами ${users[index].mark}`);
        document.getElementById('users').innerHTML += 
        `${users[index].username} занял ${index + 1} место с баллами ${users[index].mark} <br>`;
    }
}

//Task 6

let indexArray = 0;
let lastGame = new Array(10);

function Saved(currentUsers) {
    if(!(indexArray == 10)) {
        lastGame[indexArray] = currentUsers;
        indexArray++;
    } else {
        indexArray = 0;
        lastGame[indexArray] = currentUsers;
    }
    users.clear();
    key = 0;
    console.log(lastGame);
}