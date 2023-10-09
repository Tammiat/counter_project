let count = 0
let color = "black"

function setIncrease(){
    count = count+1;
    document.getElementById("number").innerHTML = count;
    if (count > 0) {
        color = "green";
      }

}
document.getElementById("increase")
.addEventListener("click", setIncrease);

function setReset(){
    count = 0;
    document.getElementById("number").innerHTML = count;
    document.getElementById("number").style.color = "black";
    
}
document.getElementById("reset")
.addEventListener("click", setReset);

function setDecrease(){
    count = count-1;
    document.getElementById("number").innerHTML = count;
    document.getElementById("number").style.color = "red";
}
document.getElementById("decrease")
.addEventListener("click", setDecrease);
