// const zoomImg = document.querySelector(".zoom_img");

// const size_400 = 400;

// const isZoom = false;

// const zoom = () => {
//     const img = document.querySelector(".zoom_img");

//     if (!isZoom) {
//         img.style = "width:250; height:250;";

//         isZoom = true;
//     } else {
//         img.style = "width:200; height:200;";
//         isZoom = false;
//     }
// };
// zoomImg.onclick = zoom;
//------------
const zoomImg = document.querySelector(".zoom_img");
let isZoom = false;

const zoom = () => {
    if (!isZoom) {
        zoomImg.style = "width:250px;height:250px;transition:0.2s;";

        isZoom = true;
    } else {
        zoomImg.style = "width:200px;height:200px;transition:0.2s;";

        isZoom = false;
    }
};

zoomImg.onclick = zoom;

//- мои страдания
// const size_200 = 200;
// const zoom1 = ()=>{

//     zoomImg.style.width= size_200+ 50 +'px'
//     zoomImg.style.height= size_200 + 50+'px'

// };

// // - решение Єлвиса
// let count = 0
// const zoomImg2 = document.querySelector(".zoom_img")
// const zoom2 = () => {
//     zoomImg.style= "width:250px; height:250px"
//     count++
//     if(count>1){
//         count = 0
//         zoomImg.style= "width:200px; height:200px"
//     }
// }
// zoomImg2.onclick = zoom2;
