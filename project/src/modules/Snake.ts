class Snake {
    head: HTMLElement
    element:HTMLElement

    bodies: HTMLCollection
    constructor() {
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.element=document.getElementById('snake')! as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');

        
    }
    get x(){
        return this.head.offsetLeft;
    }
    get y(){
        return this.head.offsetTop;
    }
    set x(value){

        this.head.style.left = `${value}px`;
    }
    set y(value){
        this.head.style.top = `${value}px`;
    }
    addBody(){
    this.element.insertAdjacentHTML('beforeend','<div></div>');


    }


    }
   export default Snake