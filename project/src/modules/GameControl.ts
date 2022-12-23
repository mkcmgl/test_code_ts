import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = ''
    count: string = ''
    isLive = true;
    time = 0

    constructor() {
        this.snake = new Snake();

        this.food = new Food();

        this.scorePanel = new ScorePanel();
        this.init()

    }
    init() {
        document.addEventListener("keydown", (e: KeyboardEvent) => {
            let timer=true
            if(!timer){
                return
            }else{
                timer=false
                setTimeout(()=>{
                    this.count = this.direction = e.key;
                    timer=true
                },100)
            }
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
        if (!this.scorePanel.pauseGameType) {

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
                this.time = 0
                this.isLive = false

            }

        }
        if (this.isLive) {
            this.time = <any>setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);

        }



    }
    checkEat(x: number, y: number) {

        if (x === this.food.x && y === this.food.y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
        this.gameWin()
        this.coincidence()

    }
    // 游戏胜利
    gameWin() {
        let stageWidth = (<HTMLElement>document.getElementById('stage')).offsetWidth;
        let stageHight = (<HTMLElement>document.getElementById('stage')).offsetHeight
        let foodWidth = this.food.element.offsetWidth
        let foodHeight = this.food.element.offsetHeight
        let num = (Math.round(stageWidth / foodWidth) * foodWidth) * (Math.round(stageHight / foodHeight) * foodHeight)
        if (this.snake.bodies.length == num - 1) {
            this.resetState()
            const res = confirm(" YOU WIN ! 是否重新开始");
            if (!res) {
                clearTimeout(this.time);
                this.time = 0
                this.isLive = false
            }
        }
    }
    // 食物位置和蛇重合 重置食物位置
    coincidence() {
        let bdx = this.snake.bodies
        for (let i = 0; i < bdx.length; i++) {
            let bd = bdx[i]
            let left = (<HTMLElement>bd).offsetLeft
            let top = (<HTMLElement>bd).offsetTop
            if (this.food.x == left && this.food.y == top) {
                this.food.change()
                return
            }

        }
    }
    resetState() {
        this.snake.restart()
        this.scorePanel.reset();
        this.food.change()
        this.direction = ''
    }

    restart() {
        (<HTMLElement>this.scorePanel.startAgain).addEventListener('click', () => {

            this.resetState()
            if (!this.isLive) {
                this.isLive = true
                this.init()
                // this.time=<any>setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
            }
        });
        (<HTMLElement>this.scorePanel.pauseGame).addEventListener('click', () => {
            if (this.scorePanel.pauseGameType) {
                this.isLive = false

            } else {
                clearTimeout(this.time);
                this.isLive = true
                this.run()
            }
        }, { once: true });

    }


}
export default GameControl;
