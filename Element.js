
class Element{
    static X = "X";
    static O = "O";
    #index;
    #elementSign;
    #element;
    #status;
    constructor(container,index){
        this.#status = false;
        this.#index = index;
        container.append(`<div class="element"></div>`);
        this.#element = container.children("div:last-child");
        this.#element.on("click",()=>{
            this.setStatus();
            this.clickTrigger();

        });
    }

    setStatus(){
        this.#status=!this.#status;
        this.#element.off();
    }
    setElementSign(sign){
        console.log("asd")
        this.#elementSign = sign;
        $(this.#element).html("<p>"+this.#elementSign+"</p>");
    }

    clickTrigger(){
        let choose = new CustomEvent("playerChoose",{detail:this.#index});

        window.dispatchEvent(choose);
    }
    
}


export default Element;