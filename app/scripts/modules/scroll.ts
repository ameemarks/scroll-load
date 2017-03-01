export default class Scroll {
    fromTop: number;

    constructor () {
        this.fromTop = document.body.scrollTop;
        console.log(this.fromTop);
    }
}


// class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;
//
//    constructor (element: HTMLElement) {
//        this.element = element;
//        this.element.innerText += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }
//
//    start() {
//        this.timerToken = setInterval(() => this.span.innerText = new Date().toUTCString(), 500);
//    }
//
//    stop() {
//        clearTimeout(this.timerToken);
//    }
//
// }
//
// window.onload = () => {
//    el: HTMLElement = document.getElementById('content');
//    var greeter = new Greeter(el);
//    greeter.start();
// };