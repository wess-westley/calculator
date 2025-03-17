
const display=document.getElementById("display");
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("time").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

function appendtodiplay(input){
    display.value += input;


}
function displayclear(){
    display.value = " ";
    
}
function del() {
    display.value = display.value.slice(0, -1);
}
function calculate(){
    try{
    display.value=eval(display.value)
    }
    catch(error){
        display.value = error
    }
}
function answer() {
    display.value += lastAnswer;
}
