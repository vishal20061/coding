let choice = document.querySelectorAll(".pic");
let coin = document.querySelector(".coin");
let inputBox = document.querySelector(".input");
let msg = document.querySelector(".msg");
let btn = document.querySelector(".btn")


const randomChoice = () =>{
    let arr = ["big","small"];
    let idx = Math.floor(Math.random()*2);
    return (arr[idx]);
}
choice.forEach((value)=>{
    value.addEventListener("click", ()=>{
        let userchoice = value.getAttribute("id");
        // console.log(userchoice);
        playGame(userchoice,value);
        inputBox.value = "";
    })
})

const playGame=(userChoice,value) =>{
    // console.log("user choice =",userChoice);
    let compChoice = randomChoice();
    // console.log("comp Choice =",compChoice);
    condition(userChoice,compChoice,value);
    resetbtn(value);
}

const condition = (userChoice,compChoice,value)=>{

    let num = Number(coin.innerHTML);
    // console.log(num);

    if (userChoice === compChoice) {
        // console.log("hurray");
        let num = Number(coin.innerHTML);
        // console.log(num);
        // console.log(inputBox.value);
        coin.innerHTML = num + Number(inputBox.value)
        msg.innerHTML = `you are win ${inputBox.value} coin 😎`
        msg.style.backgroundColor = "green";
        msg.style.color = "white"    
    }

    if (userChoice !== compChoice) {
        // console.log("not hurray");
        coin.innerHTML = num - Number(inputBox.value)
        msg.innerHTML = `you are lose ${inputBox.value} coin 😓`
        msg.style.backgroundColor = "red";
        msg.style.color = "white"
    }
    if (inputBox.value == "" || inputBox.value == "0") {
        msg.innerHTML = "please enter value 😝"
        msg.style.backgroundColor = "blue";
        msg.style.color = "white"
    }
    if (coin.innerHTML <= 0) {
        msg.innerHTML = "ooho 😥 you are finnay lose ,please reset game"
        coin.innerHTML = 0
        disableBoxes();
    }
    if (coin.innerHTML >= 300) {
        msg.innerHTML = "wow 😯, you are finnaly win ,now reset game"
        disableBoxes();
    }

    if (num < inputBox.value) {
        msg.innerHTML = "please,reduce the number of coin 😏."
        msg.style.backgroundColor = "yellow";
        coin.innerHTML = 100
        msg.style.color = "red"
        enableBoxes();
    }

}

const resetbtn = (value) => {
    btn.addEventListener("click",()=>{
        coin.innerHTML = Number(100);
        msg.innerHTML = "Play your move";
        msg.style.backgroundColor = "white";
        msg.style.color = "black"
        inputBox.value = "0";
        enableBoxes();
    })
}

const disableBoxes = ()=>{
    for (let value of choice) {
        value.disabled = true;
    }
}

const enableBoxes = ()=>{
    for (let value of choice) {
        value.disabled = false;
    }
}
