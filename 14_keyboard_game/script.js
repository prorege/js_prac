const box = document.getElementById("box");
const step = 10; // 한 번에 움직일 거리(px)

document.addEventListener("keydown", (e) => {
  const left = parseInt(box.style.left) || 0;
  const top = parseInt(box.style.top) || 0;

  if (e.key === "ArrowRight") {
    box.style.left = (left + step) + "px";
  } else if (e.key === "ArrowLeft") {
    box.style.left = (left - step) + "px";
  } else if (e.key === "ArrowDown") {
    box.style.top = (top + step) + "px";
  } else if (e.key === "ArrowUp") {
    box.style.top = (top - step) + "px";
  }
});
