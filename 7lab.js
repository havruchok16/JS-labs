//Task 1

currentUser = {
    name: "Yaniks",
    positive: 0,
    negative: 0,
    result: 0
};

let answer = function yesOrNo() {
    let {name, positive, negative, result} = currentUser; 

    if(positive != 11) {
        let res = confirm(`${name}, ${positive}, ${negative}, ${result}.\nYour answer?`);
        if(res) {
            positive++;
            result = positive - negative;
        } else {
            negative++;
            result = positive - negative;
        }
        currentUser.positive = positive;
        currentUser.negative = negative;
        currentUser.result = result;
        yesOrNo();
    } else {
        console.log("good bye")
    }
    console.log(currentUser);
}

//answer();

//Task 2

function volume(l) {
    return (w, h) => {
        return l * w * h;
    }
}

const hV = volume(70);
console.log(hV(203,142));
console.log(hV(220,122));
console.log(hV(120,123));

//Task 3

function discount(d) {
    return (s) => {
        if(s < 400 && d == 0.1) {
            return s - s * d;
        } else if(s > 400 && d == 0.2) {
            return s - s * d;
        } else {
            return 0;
        }
    }
}

const sale = discount(0.2);
console.log(sale(550));

//Task 4

function GetCoord(){
    const point = {
        x: 0,
        y: 0
    }

    function* getLocation(){
        let direction = "";
        for (let i = 0; i < 10; i++) {
            direction = prompt('Direction? (left - l, right - r, up - u, down - d)', '');

            switch (direction) {
                case 'l':
                    point.x -= 10;
                    console.log(point);
                    break;
                case 'r':
                    point.x += 10;
                    console.log(point);
                    break;
                case 'u':
                    point.y += 10;
                    console.log(point);
                    break;
                case 'd':
                    point.y -= 10;
                    console.log(point);
                    break;
                default:
                    console.error('incorrect value');
                    i--;
            }
        }
    }

    while(!getLocation().next().done){
        console.log(getLocation().next().value)
    }
}
GetCoord();

