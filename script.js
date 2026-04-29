const bten = document.getElementById('btn')
const col = document.getElementById('color')
const reset = document.getElementById('resetBtn')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B","C", "D", "E", "F"];

bten.addEventListener('click', function(){
  let hexColor = "#";

  for(let i =0; i < 6; i++){
    let random = Math.floor(Math.random() * hex.length)
    hexColor += hex[random]
  }
  document.body.style.backgroundColor = hexColor;
  col.textContent = hexColor;
})

reset.addEventListener('click', function(){
    document.body.style.backgroundColor = "white";
    col.textContent = "#FFFFFF";
})