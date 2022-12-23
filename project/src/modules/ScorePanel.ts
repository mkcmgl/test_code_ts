class ScorePanel {

    score = 0
    level = 1
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upScore:number
    startAgain:HTMLElement;
    pauseGame:HTMLElement;
    pauseGameType=false


    constructor(maxLevel: number=10 ,upScore:number=10) {

        this.scoreEle = document.getElementById('score') as HTMLElement;

        this.levelEle = document.getElementById('level') as HTMLElement;

        this.startAgain = document.getElementById('restart') as HTMLElement;

        this.pauseGame = document.getElementById('pause') as HTMLElement;

        this.maxLevel = maxLevel
        this.upScore=upScore
        
    }
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score%this.upScore == 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.maxLevel   ) {
            this.levelEle.innerHTML = ++this.level + '';

        }
    }
    reset(){
        this.score = 0;
        this.level = 1;
        this.scoreEle.innerHTML = this.score + '';
        this.levelEle.innerHTML = this.level + '';
    }

}
export default ScorePanel