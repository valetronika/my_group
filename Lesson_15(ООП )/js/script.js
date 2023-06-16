const car1 = {
    name: "BMW",
    model: "X6",
    year: 2023,
};

console.log(car1.name);
console.log(car1["name"]);

let castomYear = "year";
console.log(car1.castomYear); //undefined
console.log(car1[castomYear]); //2023
console.log(car1["castomYear"]); //undefined

//
const store = {};

const inputElement = document.querySelectorAll(".inputElement");

for (let i = 0; i < inputElement.length; i++) {
    // inputElement[i].onchange= function(event){   //срабатывает если ввести и клмнкуть в другом месте
    inputElement[i].onkeyup = function (event) {
        // при вводе каждого символа срабатывает
        console.log(event);
        console.log(event.target.name, event.target.value);
        console.log(event.target);

        // store.name=event.target.value
        store[event.target.name] = event.target.value;
    };
}

function save(params) {
    console.log(store);
}

const car2 = {
    name: "Mersedes",
    model: "GLE 450",
    year: 2022,
    getCarInfo: function () {
        // document.write(`<h1>This is Mersedes GLe 450</h1>`);
        document.write(`<h1>This ${this.name}${this.model}</h1>`);
    },
};
car2.getCarInfo();

// with(document){  обращение без документа
// querySelector('');
// }

//-- создание классов, класс- синтаксический сахар-----------------
// классы -с большой буквы
// это класс:
function Car(name, model, year) {
    let temp = {};

    temp.name = name;
    temp.model = model;
    temp.year = year;

    temp.getCarYear = function () {
        document.write(`<h1>Year: ${this.year}</h1>`);
    };
    return temp; //не забываем вернуть обьект
}
let car4 = Car("BMW", "5 series", 2022);
//// console.log(car4);
//// car4.getCarYear();
let car5 = Car("BMW", "3 series", 2023);
//// console.log(car5);
//// car5.getCarYear()
// -----------------------------------------------------------------

// ---создание конструкторного класса--------

function Person(username, surname, age) {
    this.username = username;
    this.surname = surname;
    this.age = age;

    this.getUserInfo = function () {
        document.write(
            `<h1>Username: ${this.username}, <br> Surname: ${this.surname}, <br>  Age: ${this.age} </h1>`
        ); //<br> тут для примера, лучше <ul> <li>
        // для оптимизации эту функцию выносим в прототип ниже:
    };
}

// let person1= Person('Tom', "Hangs", 45) //-undefined -неправильный вызов конструктора
let person1 = new Person("Tom", "Hangs", 45); // правильный вызов конструктора
// console.log(person1);
// person1.getUserInfo()

// ----создаем прототип
console.log("---создаем прототип");
Person.prototype.getUserName = function () {
    document.write(`<h1>Username: ${this.username}</h1>`);
};
//прототип привязан к конструктору Person, а вызывая его мы обращаемся к переменной с данными
console.log(person1);
person1.getUserName();
console.log("getUserName" in person1); //проверяю можно ли вызвать эту функцию в этом обьекте

//проверка-есть ли такая функция  внутри конструктора/класса:
console.log(person1.hasOwnProperty("getUserName")); //false потому что это прототип (создан вне конструктора)
console.log(person1.hasOwnProperty("getUserInfo")); //true

//-----------------------------------------------------------------
// ------------------- классы  6 стандарта
console.log("----- классы  6 стандарта");
class Student {
    constructor(username, surname, rating) {
        this.username = username;
        this.surname = surname;
        this.rating = rating;

        this.getName = function () {
            //эта функция будет видна в объекте ( пишем внутри конструктора)
            console.log(this.username);
        };
    }

    avarage() {
        //       эта функция автоматически считается прототипом и отображается там(пишем после конструктора)
        if (!this.rating) return 0;

        return this.rating
            ? this.rating.reduce((a, b) => a + b) / this.rating.length
            : 0;
    }
}

let stusent1 = new Student("John", "Done", [5, 8, 7, 10, 6, 8]);

console.log(stusent1.avarage());
console.log(stusent1);

console.dir(Student);

//--------------------------СТАТИЧЕСКИЕ классы---------------------
console.log("-----СТАТИЧЕСКИЕ классы----");
class Math2 {
    static add(a, b) {
        return a + b;
    }

    constructor() {
        throw new Error("Math is not Error constructor");
    }
}
console.log(Math2.add(5, 6));

//==========

Math2.minus = function (a, b) {
    return a - b;
};
console.log(Math2.minus(10, 6));

//==========

// let x = new Math2(); //-так нельзя вызывать
// x.add(8,9) //-script.js:149 Uncaught Error: Math is not Error constructor
//===========
console.hello = function (a) {
    console.log(a);
};
console.hello("hello w");

//--------------------------------------------------------------------------

class Employee {
    constructor(username, surname, company) {
        this.username = username;
        this.surname = surname;
        this.company = company;
    }

    getName() {
        return this.username;
    }
}

// let user1= new Employee('John','Done','Apple');
// console.log(user1);

class Developer extends Employee {
    //тут мы наследуем все из класса Employee
    //если я хочу к наследию добавить еще что то:
    constructor(username, surname, company, skills) {  //перечисляем что мы тут будем добавлять

        super(username, surname, company); //super перечисляет что из этого наследует
        this.skills = skills;
    }
}

let user2 = new Developer("John", "Done", "Apple",['html', 'CSS','JAVA']);
console.log(user2); //[[Prototype]]: Employee
console.log(user2.getName());




// ---------------------пример------------------

let userStore = {};

class User {
    constructor(username, surname, url) {
        this.username = username;
        this.surname = surname;
        this.url = url;
    }
}
let formInput = document.querySelectorAll(".form-input");

let btn = document.querySelector(".btn");
formInput.forEach(elem => {
    elem.onkeyup = handlerChange;

})

btn.onclick = saveForm;

function handlerChange(e){
    userStore[e.target.name] = e.target.value;
}

function saveForm(){
    let user = new User(userStore.username, userStore.surname, userStore.url)

    console.log(user);}