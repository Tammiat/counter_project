let count = 0
let color = "black"

function setDecrease(){
    count = count - 1;
    changeColor();
    document.getElementById("number").innerHTML = count;
}
document.getElementById("decrease")
.addEventListener("click", setDecrease);

function setReset(){
    count = 0;
    changeColor();
    document.getElementById("number").innerHTML = count;
}
document.getElementById("reset")
.addEventListener("click", setReset);

function setIncrease(){
    count = count + 1;
    changeColor();
    document.getElementById("number").innerHTML = count;
}
document.getElementById("increase")
.addEventListener("click", setIncrease);

function changeColor(){
    if (count < 0) {
        document.getElementById("number").style.color = "red";
    } else if (count > 0) {
        document.getElementById("number").style.color = "green";
    } else if (count == 0 ){
        document.getElementById("number").style.color = "black";
    }
}