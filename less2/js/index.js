// btn.onClick =

// const counter = () =>{  // 2 (1)
//     console.log('ok');
// }

// const btn = document.getElementById("btn");

// let count = 0;

// const counter = () => {
//     count++;
//     console.log(count);
// };

// btn.onclick = counter;

// alert('or')
// const btn = document.getElementById("btn");

// let count = 0;
// const counter = () => {
// console.log("ok");
// count++;
// console.log(count);
// document.getElementById("result").innerHTML = count;
// }

// btn.onclick = counter;

// --------------

const prev = document.querySelector(".gallery_prev");
const next = document.querySelector(".gallery_next");
let count = 1;
const nextCount = () => {
    count++;

    if(count > 5 ){
        count =1 
        
    }
    console.log(count);
    document.querySelector(".gallery_img").src = `./img/${count}.jpeg`;
};
next.onclick = nextCount;

const prevCount = () => {
count--;
if(count<1){
    count=5;
}

    // if(count ==1){  //2 alternative
    //     count = 6;
    // }
    // --count;
    console.log(count);
    document.querySelector(".gallery_img").src = `./img/${count}.jpeg`;
};
prev.onclick = prevCount;
