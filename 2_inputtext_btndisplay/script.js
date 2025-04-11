const input = document.getElementById("nameInput");
const btn = document.getElementById("btn");
const text = document.getElementById("textSpan");
btn.addEventListener("click", function(){
    const display = input.value.trim();
    if(display === ""){
        text.textContent = "텍스트를 입력하세요"
    } else {
        text.textContent = display;
    }
})