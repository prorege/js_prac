const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", ()=>{
    const task = input.value.trim();
    
    if(task === ""){
        alert("할 일을 입력하고 눌러야지 이 사람아");
        return;
    }
    //할 일 항목(li) 생성
    const li = document.createElement("li");
    li.textContent = task;

    //삭제버튼 생성
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(delBtn);
    todoList.appendChild(li);

    input.value = "";

})


//   // 삭제 버튼 클릭 시 li 삭제
//   delBtn.addEventListener("click", () => {
//     li.remove();
//   });

//   // li에 삭제 버튼 붙이고 ul에 추가
//   li.appendChild(delBtn);
//   todoList.appendChild(li);

//   // 입력창 초기화
//   input.value = "";
// });