let count = 0;
const btn = document.getElementById("btn");
const text = document.getElementById("textSpan");
btn.addEventListener("click", function(){
    count ++;
    text.textContent = `count : ${count}`;
})
