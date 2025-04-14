const todos = document.getElementById("todoInput").value;
const btn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

btn.addEventListener("click", function(){
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    if(isNaN(num1) || isNaN(num2)){
        prompt("정확한 숫자를 입력해주세요");
    } else {
        const sum = num1 + num2;
        result.textContent = sum;
    }
})
