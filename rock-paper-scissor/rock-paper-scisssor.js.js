let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let reset_btn = document.querySelector(".btn");
let para = document.querySelector("#para");
let score_board = document.querySelector(".score-board");

let userscore = 0;
let compscore = 0;

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id")
        // console.log(`${userChoice} was clicked`);
        playGame(userChoice)
    })
})

const playGame = (userChoice)=>{
    // console.log("user choice = ",userChoice);
    let compChoice = comprandomChoice()
    // console.log("compChoice = ",compChoice);
    condition(userChoice,compChoice)
    reset();
    result();
}

const condition = (userChoice,compChoice) =>{
    if ((userChoice === "paper" && compChoice === "paper") || (userChoice === "rock" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "scissor") )
        {
           msg.innerHTML = `Match is draw 🤨. your ${userChoice} equal to computer ${compChoice}`;
           msg.style.backgroundColor = "blue";
       }
       else if((userChoice === "paper" && compChoice === "rock") || (userChoice === "scissor" && compChoice === "paper")||(userChoice === "rock" && compChoice === "scissor")){
        msg.innerHTML = `You are win 🤩. your ${userChoice} beat computer ${compChoice}`
        msg.style.backgroundColor = "green";
        userscore++;
        // console.log("user-score =",userscore);
        user.innerHTML = userscore;
       }
       else{
        msg.innerHTML = `You are lose 😯. computer ${compChoice} beat your ${userChoice}`
        msg.style.backgroundColor = "red"
        compscore++;
        // console.log("comp-score =",compscore);
        comp.innerHTML = compscore;
       }
}

const comprandomChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const reset = () => {
reset_btn.addEventListener(("click"),()=>{
    userscore = 0;
    compscore = 0;
    user.innerHTML = "0";
    comp.innerHTML = "0";
    choices[0].classList.replace("new","choice");
    choices[1].classList.replace("new","choice");
    choices[2].classList.replace("new","choice");
    msg.innerHTML = "Play your  move";
    msg.style.backgroundColor = "black";
    msg.classList.replace("new","msg")
    para.removeAttribute("class");
    para.innerHTML = "";
    score_board.removeAttribute("id");
    reset_btn.removeAttribute("id");
    para.removeAttribute("id");
    reset_btn.innerHTML = "reset";
})
}
const result = () =>{
    if (userscore == 10 ) {
        choices[0].classList.replace("choice","new");
        choices[1].classList.replace("choice","new");
        choices[2].classList.replace("choice","new");
        msg.classList.replace("msg","new");
        para.innerHTML = "finnaly , you are won 😎"
        para.classList.add("para");
        score_board.setAttribute("id","score");
        reset_btn.setAttribute("id","score");
        reset_btn.innerHTML = "new game";
    }
    if (compscore == 10 ) {
        choices[0].classList.replace("choice","new");
        choices[1].classList.replace("choice","new");
        choices[2].classList.replace("choice","new");
        msg.classList.replace("msg","new");
        para.innerHTML = "ooho , you are lose 😢";
        para.classList.add("para");
        score_board.setAttribute("id","score");
        reset_btn.setAttribute("id","score");
        reset_btn.innerHTML = "new game";
    }
}