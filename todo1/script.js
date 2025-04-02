window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("todoForm");
    const todoList = document.getElementById("todoUl");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById("todoInput");
      const todoValue = input.value.trim();
  
      if (todoValue !== "") {
        const li = document.createElement("li");
  
        // 체크박스
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
  
        // 텍스트 (span으로 감싸서 class 제어)
        const textSpan = document.createElement("span");
        textSpan.textContent = todoValue;
  
        // 체크 이벤트: 줄긋기
        checkbox.addEventListener("change", function () {
          textSpan.classList.toggle("done", checkbox.checked);
        });
  
        // 삭제 버튼
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
          li.remove();
        });
  
        // li 구성
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
  
        input.value = "";
      }
    });
  });
  