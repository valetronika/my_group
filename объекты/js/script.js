// const user = {
//     name: 'Bob',
//     age: 27,
//     getName(){
//         return this.name;
//     }
// }

// const nextUser = {
//     name:"Jon"
// }

// let nextUserName = user.getName.call(nextUser)

//---------------------------------

// const person={
//     firstname: 'Jon',
//     lastname: "Done",
//     fullname(){
//         return this.firstname + " " + this.lastname
//     }
// }

// const greeting = function(message){
//     console.log(message + ", " + this.fullname());
// }
// greeting.call(person, 'hello')             // принимает любое кол-во аргументов

// greeting.apply(person, ['hey'])            //принимает массив

// const boundGreeting = greeting.bind(person) // возвращает функцию
// boundGreeting('hi')

//----------------------------------------

//---------
// const data = [];

// const getAllUsers = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.push(
//                 {
//                     id: 1,
//                     name: "Jon",
//                     isAdmin: true
//                 },
//                 {
//                     id: 2,
//                     name: "Bob",
//                     isAdmin: false
//                 },
//                 {
//                     id: 3,
//                     name: "Anna",
//                     isAdmin: false
//                 }
//             )

//             resolve(data)
//         }, 2000)
//     })
// }

// const filterById = (id) => {
//     return new Promise((resolve, reject) => {
//         const searchData = data.find(user => user.id === id);

//         resolve(searchData)
//     })
// }
// const checkIsAdmin = (searchData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (searchData.isAdmin) {
//                 resolve(`Hello, dear ${searchData.name}`)
//             } else {
//                 reject(`You don't have enough rights!`)
//             }
//         }, 3000)
//     })
// }

// // console.log(getAllUsers());

// getAllUsers()
//     .then((resolve)=>{
//         console.log("resolve 1", resolve);

//         return filterById(1);
//     })
//     .then((resolve)=>{
//         console.log("resolve 2", resolve);

//         return checkIsAdmin(resolve)
//     })
//     .then((resolve)=>{
//         console.log("resolve 3", resolve);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

//------
// const foo = () => console.log("first");
// // const bar =()=>console.log( 'second');
// const bar = () => {
//     setTimeout(() => {
//         console.log("second");
//     }, 0);
// };

// const baz = () => console.log("third");

// foo();
// bar();
// baz();

//-----------микро- и макро- задачи

// микро - самый высокий приоритет
//у промис-высокий приоритет => микрозадача

const first = () => console.log("First");
const second = () =>
    setTimeout(() => {
        console.log("Second");
    }, 2000);
const third = () => {
    console.log("Third");
    Promise.resolve().then(() => {
        console.log("Third promise1");
    });
    Promise.resolve().then(()=>{
        console.log("Third promise2");
    })
};
const fourth = ()=>console.log('fourth');
first()
second()
third()
fourth()
// First
// Third
// fourth
// Third promise1
// Third promise2
// Second