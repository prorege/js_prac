const btn = document.getElementById("btn");
const text = document.getElementById("textSpan");
btn.addEventListener("click", function(){
    text.textContent = "This is Text After Btn_Clicked"
})