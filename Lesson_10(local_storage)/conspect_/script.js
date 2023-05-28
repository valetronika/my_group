// localStorage  - метод (обект)позволяющий сохраняь в браузер любую информацию в виде строеового типа--
// --------------
// localStorage.setItem('key','val') создание нового зранилища
// localStorage.getItem('key') вводим только ключ. возвращает знаение указанного
// ключа внутри хранилища, если ключ не будет найден вернет null
// localStorage.removeItem('String') удаление записи по ключу внутри хранилища
// localStorage.clear() удаление всех данных внутри хранилища

//-------

let btnElem = document.querySelector("button");

btnElem.onclick = () => {
    if (localStorage.getItem("num") === "1") {
        localStorage.setItem("num", "0");
    } else {
        localStorage.setItem("num", "1");
    }
};
const inp_elem = document.querySelector("input");
const btn1_elem = document.querySelector('#btn1')
const btn2_elem = document.querySelector('#btn2')
const btn3_elem = document.querySelector('#btn3')

// inp_elem.onchange=(event)=>{
// console.log(event.target.value) при изменениях

// }
// inp_elem.onkeydown=(event)=>{
// console.log(event.target.value)  при нажатии на клавишу клавиатуры
// }

//--------задачи
// Задача 2.
// Напишите процесс, который по событию onchange будет сохранять 
// значение инпут - поля в localStorage

// inp_elem.onchange = (event) => {
    // localStorage.setItem("value", event.target.value);
// };  //2        вариант 1

// inp_elem.onchange = () => {
//     localStorage.setItem("value", inp_elem.value);
// };  //2       вариант 2
//----


btn1_elem.onclick= ()=>{
localStorage.setItem('input', inp_elem.value)
}

//----
// Задача 2.2
// Доработайте решение. Реализуйте дополнительную кнопку 
// которая будет помещать в input поле ранее 
// сохраненное значение localStorage (ключа input)

btn2_elem.onclick= ()=>{
    inp_elem.value = localStorage.getItem('input')
}
//----

// Задача 2.3
// Доработайте решение. Добавьте новую кнопку, которая будет очищать (удалять) только ключ data в localStorage

btn3_elem.onclick= ()=>{ 
    localStorage.removeItem('input')

}
