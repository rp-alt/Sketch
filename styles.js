const container = document.querySelector("#container");
for (let i = 1; i <= 264; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = `This is box ${i}`;
    container.appendChild(box);
}
