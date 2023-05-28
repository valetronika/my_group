console.log("----less");
// const body = document.body; //2 vers1
// let thema =localStorage.setItem('defaultTheme', 'light') ;

// console.log(localStorage.getItem('defaultTheme'));

document.body.className = localStorage.getItem('defaultTheme'); //2 vers2
const switch_elem = document.querySelector("input");
// 2   МЕНЯЕМ ТЕМУ ПО ЧЕКБОКСУ
//--------- способ 1 
// function darkThem() {
//     body.style.backgroundColor = "rgb(34, 63, 87)"; //2 -vers1
// }
// function lightThem() {
//     body.style.backgroundColor = "aliceblue"; //2 -vers1
// }
// switch_elem.onclick = () => {
//     console.log(switch_elem.checked);  //2 -vers1
//     if (switch_elem.checked) {
//         darkThem();
//     } else {
//         lightThem();
//     }
// };

//------------способ 2

switch_elem.checked=(localStorage.getItem('defaultTheme')==='light' )?0:1
// switch_elem.checked=(localStorage.getItem('defaultTheme')??'dark')
switch_elem.onclick = () => {
    if (switch_elem.checked) {
        document.body.className = "dark";       //2 -vers2
        localStorage.setItem('defaultTheme', 'dark') 

    } else {
        document.body.className = "light";
        localStorage.setItem('defaultTheme', 'light') 
    }
};
//--------- способ 3

// switch_elem.onclick = () => {
//     document.body.className= (switch_elem.checked )?"dark":"light"  //2 -vers3
// };

//------ЗАДАЧА
// Задача: сделать так, чтобы при обновлении страницы тема сохранялась.