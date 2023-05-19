// loop:
// for (let i = 0; i < 5; i++) {
//     loop1:
//     for (let j = 0; j < 5; j++) {
//         loop2:
//         for (let k = 0; k < 5; k++) {
//             console.log(i, j, k)
//             if (k == 3) {
//                 break loop;
//             }
//         }
//     }
// }
//  -------------------------------
let grids = document.querySelectorAll(".grid > div");

// grids[0].style.background = 'red';
// grids[1].style.background = 'lightblue';
// grids[3].style.background = 'grey';


// const setColor =()=>{  тут не будета работать this
//     alert('ok')
// }

const random =()=>parseInt(Math.random() *255);
function setColor (){
    // this.style.background = 'red';
        let r = random(),
        g = random(),
        b = random();

    this.style = `background:rgb(${r},${g},${b});`
}


for (let i = 0; i < grids.length; i++) {
    const element = grids[i];
    element.onclick = setColor;
}

const btn = document.querySelector('.btn');

function clearBG (){
    for (let i = 0; i < grids.length; i++) {
        const element = grids[i];
        element.style = '';
    }
}

btn.onclick=clearBG;