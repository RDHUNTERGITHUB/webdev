let hour = new Date().getHours();
console.log(hour);

let background = document.querySelector('body');
if (hour>= 18 || hour < 6){
    background.style.backgroundColor = 'grey';
}else {
    background.style.backgroundColor = 'yellow';
}

/*Assignment 2 */

const d = new Date();
let day = d.getDay();

console.log(day);

if (day == 1){
    document.getElementById("h2").textContent = "Have a Marvelous Monday!"
}else if(day == 2){
    document.getElementById("h2").textContent = "Have a Terrific Tuesday!"
}else if(day == 3){
    document.getElementById("h2").textContent = "Have a Wonderful Wednesday!"
}else if(day == 4){
    document.getElementById("h2").textContent = "Have a Thoughtful Thursday!"
}else if(day == 5){
    document.getElementById("h2").textContent = "Have a Fabulous Friday!"
}else if(day == 6){
    document.getElementById("h2").textContent = "Have a Savvy Saturday!"
}else if(day == 7){
    document.getElementById("h2").textContent = "Have a Showy Sunday!"
}


