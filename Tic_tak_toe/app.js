let boxes = document.querySelectorAll(".box");
// console.log(boxes);
let resetBtn = document.querySelectorAll("#reset-btn");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled= true;

        checkWinner();
    });
});

const checkWinner = () =>{
    for (pattern of winPatterns){
        console.log(pattern);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);


    } 
}






