let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#msg_btn");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#message");

let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]; 

const resetGame = () => {
    turn0 = true;
    enableBoxes ();
    msg_container.classList.add("hide");
    }
    

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
        if(turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, ${Winner} wins!`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !="") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("WINNER",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


