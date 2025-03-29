const container = document.querySelector("#container");
let squares = prompt("How many squares");
for (let i = 1; i <= squares*squares; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = `This is box ${i}`;
    container.appendChild(box);
}
document.body.addEventListener('mouseover', e => {
    let box = e.target.closest('.box');
    if (!box) { return; }
    box.style.backgroundColor = generateAllColors();
  });
  
  /** document.body.addEventListener('mouseout', e => {
    let box = e.target.closest('.box');
    if (!box) { return; }
    box.style.backgroundColor = '';
  }); **/

  function generateAllColors() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
    
  }
document.body.addEventListener('click')

function Reset() {
    location.reload();
}