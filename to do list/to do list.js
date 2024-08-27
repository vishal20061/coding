let input = document.querySelector("input");
let task = document.querySelector(".tasks");
let btn = document.querySelector("button");
let newtask = document.querySelector("#newtask");

btn.onclick = function(){
    if (input.value.length == 0) {
        alert("plase enter a value");
    }
    else{
        task.innerHTML += 
        `<div class = "new">
        <span>
                ${input.value}
            </span>
            <button class = "del">del</button>
        </div>`
    }
    input.value = "";
    
var delbtn = document.querySelectorAll(".del");

for (let i = 0; i < delbtn.length; i++) {
    delbtn[i].onclick = function() {
        this.parentNode.remove();
    }
  }


for (let i = 0; i <task.length; i++) {
    task.onclick = function(){
        this.classList.toggle('complete')
    }
  }
}
