
class Info {
    #fieldCheck;
    #players = [];

    constructor() {
        this.#players[0] = $("#p_One").val();
        this.#players[1] = $("#p_Two").val();
        this.#fieldCheck = false;
    }

    fieldCheck() {
        if (($("#p_One").val().length > 2 && $("#p_Two").val().length > 2) && ($("#p_One").val().length < 22 && $("#p_Two").val().length < 22)) {
            this.#players[0] = $("#p_One").val();
            this.#players[1] = $("#p_Two").val();
            this.#fieldCheck = true;
            this.toggleForm(true);
        }
    }

    getFieldCheck() {
        return this.#fieldCheck;
    }

    getPlayer(index) {
        return this.#players[index];
    }

    toggleForm(bool) {
        $("#p_One").prop("disabled", bool);
        $("#p_Two").prop("disabled", bool);
        if (bool) {
            $(".button").css("display", "none");
        } else {
            $(".button").css("display", "flex");
        }
    }

    nextPlayer(name) {
        $(".feedback").html(`
        <div class="stepFeedback"><h3>Next step:</h3><span>${name}</span></div>`);
    }

    winner(name) {
        $(".feedback").html(`
        <div class="stepFeedback"><h3>Winner:</h3><span>${name}</span></div>`);
    }
}

export default Info;