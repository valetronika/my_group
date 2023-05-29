// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11];

// Массив строк в одинаковом регистре
const sameCaseStringsArray = [
    "these",
    "strings",
    "have",
    "the",
    "same",
    "case",
];

// Массив строк в разных регистрах
const differentCaseStringsArray = [
    "This",
    "is",
    "an",
    "Array",
    "of",
    "strings",
];

// Объекты для массива объектов
const ball = {
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100,
};
const gloves = {
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140,
};
const shoes = {
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320,
};
const hammer = {
    name: "AHammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40,
};
const saw = {
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75,
};
const shark = {
    name: "Shark toy",
    category: "HomeStuff",
    img: "./assets/shark.jpeg",
    price: 45,
};

// Массив объектов
let products = [ball, shark, gloves, hammer, shoes, saw];
// 1. Разворот строки. Вывести строку в обратном порядке.
// Пример: reverseString("timon"); Ожидаемый результат - nomit.
let reverseString = (str) => {
    return str.split("").reverse().join("");
};
// console.log(reverseString("timon"));

// 2. Проверка, является ли строка палиндромом.
// Нужно проверить, читается ли строка в обеих направлениях одинаково, БЕЗ учета регистра.
// Например, слово Anna - это палиндром. Слово Hanna - нет.

function isPalindrom(str) {
    let a = str.toLowerCase();
    let reverce = a.split("").reverse().join("");
    if (reverce === a) {
        console.log("+");
    } else {
        console.log("-");
    }
    // str.toLowerCase()===a.split('').reverse().join('')
}
// isPalindrom('Anna')

// 3. Посчитать количество гласных в строке, без учета регистра. Примеры:
//  - countVovels("bird") -> 1
//  - count Vovels("TimOn") -> 2
// function countVovels(str){
//     let count = 0;
//     const vovels =['a', 'o', 'e', 'i', 'u','y'];
//     const letters =str.toLowerCase().split('');
//     letters.forEach(letter=>{
//         if(vovels.indexOf(letter)>=0){
//             count +=1;
//         }
//     });
//     return count;
//+++++++++

// }
// console.log(countVovels('TimOn')); 'elvis
// function countVovels(str){
//     const vovels = ['a','o','e','i','u','y']
//     let splitted = str.split('')
//     let count = 0
//     for (let index = 0; index < splitted.length; index++) {
//         if(vovels.includes(splitted[index])){
//             count += 1
//         }

//     }
//     return count
// }
// 4. Переформатирование даты. Написать функцию, которая на вход принимает строку,
// которая содержит дату в формате ГГГГ-ММ-ДД.
// Функция должна вернуть дату в формате ДД.ММ.ГГГГ
function transformDate(dateStr) {
    // return dateStr.split('-').reverse().join('.')
}
// console.log(transformDate('2023-05-26'));

// 5. Вывести результат сортировки массива numbers по убыванию.
// При этом, нужно сделать это так, чтобы исходный массив остался неизменным.
// Подсказка - нужно скопировать исходный массив.

let numbers_sort = numbers.slice().sort((a, b) => a - b);
// console.log(numbers);
// console.log(numbers_sort);

// 6. Отсортировать массив товаров по наименованию товара,
// вывести в консоль результат (закрепление пройденного ранее).
// let products = [ball, shark, gloves, hammer, shoes, saw];

// products.sort((a, b) => {
//     return a.name < b.name ? 1 : -1;
// });
// console.log(products);

// 7. Создать глубокую копию первого товара из массива товаров.
// Нужно гарантировать, что изменение в этой копии не затронет элемент в массиве.

// let product_1 = JSON.parse(JSON.stringify(products[0]))

// console.log(product_1);

// 8. Вывести в консоль результат сортировки массива товаров по наименованию товара.
// При этом, не изменять исходный массив. Для этого тоже нужно скопировать массив -
// но учитывать, что здесь мы работаем с объектами (нужно глубокое копирование).
// const products_2 = JSON.parse(JSON.stringify(products))
// products_2.sort((a,b)=> {
//     return a.name> b.name?1:-1})
// console.log(products_2);

// 9. C помощью метода reduce, получить массив с названиями товаров
// let products = [ball, shark, gloves, hammer, shoes, saw];
// const result = products.reduce((acc, value)=> {
// acc.push(value.name)
// return acc;
// },[])
// console.log(result);

// 10. C помощью метода reduce, получить из массива товаров объект,
// в котором ключами будут наименования товаров, а значениями - цены этих товаров.
// То есть, результат будет такого вида:

const prod_3 = products.reduce((acc, val) => {
    acc[val.name] = val.price;
    return acc;
}, {});
// console.log(prod_3);
products.reduce((acc, val) => {});
// - с помощью метода reduce, на основе списка товаров
// получить объект, в котором ключами будут категории,
// а значениями - количество товаров в этой категории.
// Ожидаемый результат для массива products:

const prod_4 = products.reduce((acc,val)=>{
    if(acc[val.category]){
        acc[val.category]+=1;
    }else{
        acc[val.category]=1;
    }
    return acc;
},{})
console.log(prod_4);

// 11. Найти среднее арифметическое массива чисел (использовать метод reduce).
// Подсказка - имеет смысл вспомнить про 3-й аргумент функции-колбэка.
// const numbers = [1, 3, 6, 2, 4, 0, 9, 7, 5, 10, 15, 12, 11];
const numbers_ = [3, 6, 9, 12];
const numbers__ = [1, 5, 7, 10];

// const average = Math.round(numbers.reduce((acc,val)=>acc + val /numbers.length ,0))
// console.log(average);

// 12. Проверить, есть ли в массиве чисел числа, кратные 3

// const multiples_of = (arr, collback) =>
//     collback(arr) ? console.log("+") : console.log("-");
// const collback_multiples_of_3 = (el) => el.some((el) => el % 3 == 0);
// multiples_of(numbers_ , collback_multiples_of_3);

// 13. Проверить, есть ли в массиве строк
// sameCaseStringsArray такие строки, длина которых - 4 символа
// const sameCaseStringsArray = [
//     "these",
//     "strings",
//     "have",
//     "the",
//     "same",
//     "case",
// ];

// function check_4_char(arr, callback) {
//     let count = 0;
//     arr.forEach((el) => (callback(el) ? count++ : ""));
//     if(count>0){
//         return 'yes'
//     }else{
//         return 'no'
//     }
// }

// function callback_4char(el) {
//     return el.length === 4;
// }
// console.log(check_4_char(sameCaseStringsArray, callback_4char));

// 14. Проверить, есть ли в массиве товаров такие товары, у которых цена меньше 100.
// 
// products.forEach(el=>{
//    return el.price>100?  'y': 'n'
// })
// const check_pr=(arr)=>{
//     let count =0
//     arr.map(el=>{
//         el.price>100?  count++: ''
//     })
//     return count>0
// }
// console.log(check_pr(products));
// -------------- альтернатива
// const check_pr1 = products.some(el=> el.price>100)
// console.log(check_pr1?'y':'n');

// 15. Проверить, все ли элементы в массиве строк 
// sameCaseStringsArray имеют длину больше 3.

// const check_lenght3=(arr)=>{
//     let count =0;
//     arr.map(el=>{
//         el.length>3?count++:''
//     })
//     return count ==arr.length
// }
// console.log(check_lenght3(sameCaseStringsArray));
// -------------- альтернатива
// const check_lenght3_a=products.every(el=>el.length>3)
// console.log(check_lenght3_a);

// 16. Проверить, все ли товары в массиве имеют цену меньше 200.
// const check_price_200 = products.every(el=> el.price<200)

// console.log(check_price_200);
// 17. Получить массив из товаров категории Sport.
const sport_products = products.filter(el=> el.category== 'Sport')
// console.log(sport_products);
// 18. Получить массив из товаров с ценой в диапазоне от 70 до 150.
const products_middle_price = products.filter(el=>el.price>70&& el.price<150)
// console.log(products_middle_price);