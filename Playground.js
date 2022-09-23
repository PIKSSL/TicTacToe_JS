import Element from "./Element.js";
import Info from "./Info.js";

class Playground {
    #elements = [];
    #currentPlayer;
    constructor() {
        const container = $(".playground");
        this.#currentPlayer = false;
        for (let index = 0; index < 9; index++) {
            const element = new Element(container, index);
            this.#elements.push(element);
        }
        //console.log(this.#elements);
        $(window).on("playerChoose", (event) => {
            this.setSign(event.detail);
        })
    }

    setSign(id) {
        if (this.#currentPlayer) {
            this.#elements[id].setElementSign(Element.X);
        }
        if (!this.#currentPlayer) {
            this.#elements[id].setElementSign(Element.O);
        }
        this.#currentPlayer = !this.#currentPlayer;
    }


}



export default Playground;