//Task 1,2

class IterableObject extends Object {

    constructor(object) {
        super();
        Object.assign(this, object);
    }
    
    [Symbol.iterator]() {
        let startVal = Object.values(this);
        let newVal = Object.values(startVal[0]);
        const array = new Array();
        newVal.forEach(element => {
            for (let index = 0; index < element.length; index++) {
                array.push(element[index]);
            }
        })
        let index = -1;
        return {
            next() {
                index++;
                return {
                    value: array[index],
                    done: index >= array.length
                }
            }
        }
    }
}

const iterableObject = new IterableObject ({
    shoes: {
        bot: [
            {
                id: 0, size: 41, color: "red", price: 100,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
            {
                id: 1, size: 36, color: "green", price: 200,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
            {
                id: 2, size: 45, color: "yellow", price: 300,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
        ],
        cross: [
            {
                id: 3, size: 41, color: "red", price: 1250,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
            {
                id: 4, size: 42, color: "green", price: 500,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
            {
                id: 5, size: 43, color: "yellow", price: 400,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
        ],
        sandal: [
            {
                id: 6, size: 34, color: "red", price: 1000,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
            {
                id: 7, size: 44, color: "green", price: 240,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
            {
                id: 8, size: 39, color: "yellow", price: 380,
                discount: 10,
                endPrice: 0,
                get getPrice() {
                    return `${this.endPrice}: price with discount`;
                },

                set setPrice(value) {
                    this.endPrice = this.price - (this.price * (this.discount/100));
                },
            },
        ]
    }
})

for(let element of iterableObject) {
    console.log(element);
}

//Task 3

//filter by price
let filterNumber = 2;
let startPrice = 500;
let endPrice = 9000;
let size = 43;
let color = "red";
for(let element of iterableObject) {
    if(filterNumber == 1 && element.price <= endPrice && element.price >= startPrice) {
        console.log(element.id);
    }
    if(filterNumber == 2 && element.size == size) {
        console.log(element.id);
    }
    if(filterNumber == 3 && element.color == color) {
        console.log(element.id);
    }
}

//Task 4
let modifyParams = ["id", "color", "size"];

for(let item of iterableObject) {
    for (let index = 0; index < modifyParams.length; index++) {
        let config;
        if(modifyParams[index] !== "id") {
            config = {
                writable: false,
                configurable: true
            }
        } else {
            config = {
                writable: false,
                configurable: false
            }
        }
        Object.defineProperty(item, modifyParams[index], config);
        config = {};
    }
    console.log(Object.getOwnPropertyDescriptor(item, "id"))
}

for(let item of iterableObject) {
    item.setPrice = 0;
    console.log(item.getPrice)
}