const btn = document.getElementById("timeBtn");
const text = document.getElementById("timeDisplay");
btn.addEventListener("click", function(){
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    text.textContent = timeString;
})
