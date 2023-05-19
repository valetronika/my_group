const toggle = document.querySelector(".navbar__toggle");
// const navbar = document.querySelector('.navbar__mobile > .navbar');

function toggleHandler() {
    // toggle.classList.toggle('navbar__toggle_active');  -был мой вариант

    // console.log(this.classList);
    // console.log(this.classList.contains('navbar__toggle_active'));
    // console.log(this.parentElement.querySelector('.navbar'));
    // console.log(this.nextElementSibling);
    if (this.classList.contains("navbar__toggle_active")) {
        this.classList.remove("navbar__toggle_active");
        this.parentElement.querySelector('.navbar').classList.remove("navbar__show");
        
    } else {
        this.classList.add("navbar__toggle_active");
        this.parentElement.querySelector('.navbar').classList.add("navbar__show");
    }

    //альтернатива this.classList.toggle('navbar__toggle_active'); 
}

toggle.onclick = toggleHandler;


//------- из конспекта преп-ля9
// const toggle = document.querySelector(".navbar__toggle");

// function toggleHandler(){
//     // alert("ok");

//     // console.log(this.classList);

//     // console.log(this.classList.contains("navbar__toggle_active"));

//     if(this.classList.contains("navbar__toggle_active")){
//         this.classList.remove("navbar__toggle_active");
//         this.parentElement.querySelector(".navbar").classList.remove("navbar__show");
//     }else{
//         this.classList.add("navbar__toggle_active");
//         this.parentElement.querySelector(".navbar").classList.add("navbar__show");
//     }

//     this.classList.toggle("navbar__toggle_active");
//     this.parentElement.querySelector(".navbar").classList.toggle("navbar__show");

// }

// toggle.onclick = toggleHandler;