import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = ''
    count:string=''
    isLive = true;
    time=0

    constructor() {
        this.snake = new Snake();

        this.food = new Food();

        this.scorePanel = new ScorePanel();
        this.init()

    }
    init() {
        document.addEventListener("keydown", (e: KeyboardEvent) => {

         this.count=this.direction = e.key;
        });
        // document.addEventListener('keydown', this.keyDownHandler.bind(this));
        // 涉及到this和bind知识
        this.run();

    }
    keyDownHandler(e: KeyboardEvent) {
        this.direction = e.key;

    }
    run() {
        let x = this.snake.x
        let y = this.snake.y
        if(!this.scorePanel.pauseGameType){
           
        }
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10
                break;

            case 'ArrowDown':
            case 'Down':
                y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                x -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                x += 10
                break;

        }

        this.checkEat(x, y);
        this.restart()


        try {
            this.snake.x = x;
            this.snake.y = y;
            
          
        } catch (error) {
            
            this.resetState()




            const res = confirm((<Error>error).message + " GAME OVER ! 是否重新开始");
            if (!res) {
                clearTimeout(this.time);
                this.time=0
                this.isLive=false

            }
           
        }
        if( this.isLive){
            this.time=<any>setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);

        }
       
     

    }
    checkEat(x: number, y: number) {

        if (x === this.food.x && y === this.food.y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
        let bdx=this.snake.bodies
    }
    resetState() {
        this.snake.restart()
        this.scorePanel.reset();
        this.food.change()
        this.direction = ''
    }

    restart(){
        (<HTMLElement>this.scorePanel.startAgain).addEventListener('click',()=>{
      
            this.resetState()
            if( !this.isLive ){
                this.isLive=true
                this.init()
                // this.time=<any>setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
            }
          
   
        });
        (<HTMLElement>this.scorePanel.pauseGame).addEventListener('click',()=>{

            
            if(this.scorePanel.pauseGameType){
             this.isLive=false
            
            }else{
                clearTimeout(this.time);
                this.isLive=true
                this.run()
            }
        },{once:true});

      

    }


}
export default GameControl;
