
class Info{
    #fieldCheck;

    constructor(){
        this.#fieldCheck = false;

    }
    
    fieldCheck(){
        let data = new FormData();
        let p1 = data.append("text", document.getElementById("p_One").value);
        let p2 = data.append("text", document.getElementById("p_Two").value);
        if(p1.length() > 3 && p2.length() > 3){
            $("p_One").prop("disabled",true);
            $("p_Two").prop("disabled",true);
            return true;

        }else{
            return false;
        }
    }
    feedback(){
        if(this.#fieldCheck){
            gameStarted();
        }else{

        }
    }
    gameStarted(){

    }
    feedbackError(){
        
    }
}



export default Info;