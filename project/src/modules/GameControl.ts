import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = ''
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

            this.direction = e.key;
            console.log(this, 'this')
        });
        // document.addEventListener('keydown', this.keyDownHandler.bind(this));
        // 涉及到this和bind知识
        this.run();

    }
    keyDownHandler(e: KeyboardEvent) {
        console.log(e)
        this.direction = e.key;
        console.log(this)

    }
    run() {
        let x = this.snake.x
        let y = this.snake.y
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
            console.log(error,'error')
            
            this.resetState()


            console.log(this.food, this.direction, this.snake, this.scorePanel, '1')
            console.log(this, 'this')


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
            let timer=true
           if(!timer){return}
           else{
            timer=false
            setTimeout(()=>{
                if( this.scorePanel.pauseGameType){
                    this.scorePanel.pauseGame.innerHTML = '开始';
                    this.scorePanel.pauseGameType=!this.scorePanel.pauseGameType
                 }else{
                    this.scorePanel.pauseGame.innerHTML = '暂停';
                    this.scorePanel.pauseGameType=!this.scorePanel.pauseGameType
                 }
                
                console.log(this.scorePanel.pauseGame); 
                timer=true
                
            }, 500)
           }
            
        });

    }


}
export default GameControl;
