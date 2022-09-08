let hour = new Date().getHours();
console.log(hour);

let dark_mode_color = "gray";
let day_mode_color = "white";
let dark_mode_opacity = 70%

let background = document.querySelector('body');

if(hour >= 18 || hour < 6){
    background.style.backgroundColor = dark_mode_color;
    background.style.opacity = dark_mode_opacity;

}else{
    background.style.backgroundColor = day_mode_color;
    background.style.opacity = 1;
}