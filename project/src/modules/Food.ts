class Food {

    constructor() {
        this.element = document.getElementById('food') as HTMLElement;

    }

    element: HTMLElement;

    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop;

    }
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }

}
export default Food