const main = document.querySelector('button')
const body = document.body;
const bord = document.querySelector('h1') 

const colorGenerator = ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red},${green},${blue})`;
    return color;
} 
 
main.addEventListener('click' , ()=>{
    const color1 = colorGenerator();
    bord.innerHTML = ` Current Color : ${color1}`;
    body.style.backgroundColor =  color1;
} 
);
