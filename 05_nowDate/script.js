const btn = document.getElementById("toggleBtn");
const text = document.getElementById("hiddenText");
let isVisible = false;
btn.addEventListener("click", function(){
    if(isVisible == false){
        isVisible = true;
        text.style.display = "block"
        btn.textContent = "내용 가리기"
    } else {
        isVisible = false;
        text.style.display = "none"
        btn.textContent = "내용 보기"

    }
})
