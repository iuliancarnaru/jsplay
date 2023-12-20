const cursorEl = document.getElementById("cursor");

console.log(cursorEl);

document.addEventListener("mousemove", (event) => {
  cursorEl.style.cssText = `
    top: ${event.y - 80}px;
    left: ${event.x - 80}px;
  `;
});
