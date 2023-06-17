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
formInput.forEach((elem) => {
    elem.onkeyup = handlerChange;
});

btn.onclick = saveForm;

function handlerChange(e) {
    userStore[e.target.name] = e.target.value;
}

function saveForm() {
    let user = new User(userStore.username, userStore.surname, userStore.url);

    let div = document.createElement("div");
    div.classList.add("user__item");

    let img = document.createElement("img");
    img.setAttribute("src", user.url);

    let h6 = document.createElement("h6");
    h6.innerText = `${user.username} ${user.surname}`;

    div.append(img, h6);

    document.querySelector(".user").append(div);
    console.log(user);
}

class Element {
    constructor(type, className) {
        this.type = type;
        this.className = className;

        this.styles={}
    }
    create() {
        // let styles = this.styles  // 1 способ присвоить
        let {styles} = this          // 2 способ присвоить
        // let {type,className,styles = this } // можно деструкутуризировать и не писать в дальнейшем везде this.
        let elem = document.createElement("input");
        elem.setAttribute("type", this.type);

        // {color:'red', border:'1px solid green'}
        for (const key in styles) {
            // console.log(key,styles);
            // console.log(styles[key]);
            elem.style[key] = styles[key];
        }

        let div = document.createElement("div");
        div.append(elem);

        document.querySelector(`.${this.className}`).append(div);
    }
    addStyle(styles){
        this.styles=styles

    }
}

let textElem = new Element("text", "elements");
textElem.create();
// console.log(textElem);

let numberElement = new Element("num", "elements");
numberElement.create();

class TextElement extends Element {
    constructor(type, className) {
        super(type, className);

        this.type = "text";
        this.className = "elements";
    }
}
let p1 = new TextElement();
p1.create();
class NumberElement extends Element {
    constructor(type, className) {
        super(type, className);

        this.type = "text";
        this.className = "elements";
    }
}
let p2 = new NumberElement();
p2.addStyle({color:'red', border:'5px solid green'})
p2.create()

let p3 = new TextElement()
p3.addStyle({
    color:`#000`,
    border:`1px solid #000`,
    padding:`8px 16px`,
    backgroundColor:'#ccc',
    'font-size':'26px'
})
p3.create()

class DateElement extends Element{
    constructor(type, className){
        super(type,className);

       
        this.type='date';
        this.className = 'elements';
    }
}
p4 = new DateElement();
p4.create();