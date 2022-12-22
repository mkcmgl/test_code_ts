import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction:string=''
    constructor() {
        this.snake = new Snake();

        this.food = new Food();

        this.scorePanel = new ScorePanel();
        this.init()

    } 
    init() {
        document.addEventListener("keydown", (e:KeyboardEvent)=>{
   
            this.direction=e.key;
            console.log(this,'this')
        });
        // document.addEventListener('keydown', this.keyDownHandler.bind(this));
        // 涉及到this和bind知识

    }
    keyDownHandler(e:KeyboardEvent) {
        console.log(e)
        this.direction=e.key;
        console.log(this)
        
    }
    run(){
        
    }


}
export default GameControl;
