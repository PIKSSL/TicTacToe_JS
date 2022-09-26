import Element from "./Element.js";
import Info from "./Info.js";

class Playground {
    #elements = [];
    #currentPlayer;
    #step = 0;
    #winner = false;
    #info;
    constructor() {
        this.#info = new Info();
        $(".button").on("click", () => {
            this.#info.fieldCheck();
            if (this.#info.getFieldCheck() == true) {
                this.start();
            } else {
                window.alert("A mezőn lévő értékek valamelyike nem felel meg a követelményeknek!");
            }
        });
        $(".reset").on("click", () => {
            window.location.reload();
        });
    }

    start() {
        const container = $(".playground");
        this.#currentPlayer = false;
        for (let index = 0; index < 9; index++) {
            const element = new Element(container, index);
            this.#elements.push(element);
        }
        this.#info.nextPlayer(this.#info.getPlayer(0));
        $(window).on("playerChoose", (event) => {
            this.setSign(event.detail);
            if (this.#step > 3) {
                this.winnerPlayer();
            }
        })
    }

    setSign(id) {
        if (this.#currentPlayer) {
            this.#elements[id].setElementSign(Element.O);
            this.#info.nextPlayer(this.#info.getPlayer(0));
        }
        if (!this.#currentPlayer) {
            this.#elements[id].setElementSign(Element.X);
            this.#info.nextPlayer(this.#info.getPlayer(1));
        }
        this.#currentPlayer = !this.#currentPlayer;
        this.#step++;
    }

    checkForWinner() {
        if (this.situations(0, 1, 2)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(0, 3, 6)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(0, 4, 8)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(3, 4, 5)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(6, 7, 8)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(1, 4, 7)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(2, 5, 8)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
        if (this.situations(2, 4, 6)) {
            this.#winner = true;
            $(window).off("playerChoose")
        }
    }

    situations(firstElement, secondElement, thirdElement) {
        if (
            this.#elements[firstElement].getElementSign() == this.#elements[secondElement].getElementSign() &&
            this.#elements[secondElement].getElementSign() == this.#elements[thirdElement].getElementSign() &&
            this.#elements[firstElement].getElementSign() != "") {
            return true;
        }
        return false;
    }

    winnerPlayer() {
        this.checkForWinner();
        if (this.#winner) {
            if (!this.#currentPlayer == false) {
                this.#info.winner(this.#info.getPlayer(0));
            }
            else if (!this.#currentPlayer == true) {
                this.#info.winner(this.#info.getPlayer(1));
            }
        } else if (!this.#winner && this.#step == 9) {
            $(".feedback").html(`
            <div class="stepFeedback"><h3>It's a draw</div>`);
        }
    }

}

export default Playground;