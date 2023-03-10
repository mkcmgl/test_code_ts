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
        if(this.x==value){
            return
        }
        if(value<0||value>290){
            throw new Error('撞墙');
            
        }
        if(this.bodies[1]&& (<HTMLElement>this.bodies[1]).offsetLeft===value){
            console.log('x')
            if(value>this.x){
                value= this.x-10;
                console.log(' value= this.x-10;')
            }
            else{
                value= this.x +10;
                console.log('      value= this.x +10;;')

            }
        }
            
        this.moveBody()
        this.head.style.left = `${value}px`;
        this.checkHeadBody()
       
       
    }
    set y(value){
        if(this.y==value){
            return
        }
        if(value<0||value>290){
            throw new Error('撞墙');
        }
        if(this.bodies[1]&& (<HTMLElement>this.bodies[1]).offsetTop===value){
            console.log('y')

            if(value>this.y){
                value=  this.y-10;
 

            }
            else{
                value= this.y +10;
            }
            
        }
        
        this.moveBody()
        this.head.style.top = `${value}px`;
        this.checkHeadBody()
    }
    addBody(){
    this.element.insertAdjacentHTML('beforeend','<div></div>');
    }

    moveBody(){
        for(let i=this.bodies.length-1;i>0;i--){
            let x=(<HTMLElement>this.bodies[i-1]).offsetLeft;
            let y=(<HTMLElement>this.bodies[i-1]).offsetTop;
            (<HTMLElement>this.bodies[i]).style.left =x+ `px`;
            (<HTMLElement>this.bodies[i]).style.top =y+ `px`;
            
        }
    }
    checkHeadBody(){
        console.log('自己')
        
        for(let i=1; i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if (this.x === bd.offsetLeft && this.y === bd.offsetTop) {
                throw new Error("撞到自己了~~");
                
            }

        }
    }
    restart(){
        for(let i=this.bodies.length-1;i>0;i--){
            this.bodies[i].remove();
        }
        this.x=0
        this.y=0
    }

}
   export default Snake