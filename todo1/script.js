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
  
        // 수정 버튼
    const changeBtn = document.createElement("button");
    changeBtn.textContent = "Change";
    changeBtn.id = "changeBtn";
    changeBtn.addEventListener("click", function () {
    // 기존 텍스트 감싸는 <span>을 <input>으로 바꿈
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = textSpan.textContent;
    editInput.classList.add("edit-input");

    li.replaceChild(editInput, textSpan);
    editInput.focus();

    // 엔터 누르거나 포커스 벗어나면 수정 완료
    function finishEdit() {
        const newValue = editInput.value.trim();
        if (newValue !== "") {
        textSpan.textContent = newValue;
        }
        li.replaceChild(textSpan, editInput);
    }

    editInput.addEventListener("blur", finishEdit);
    editInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
        finishEdit();
        }
    });
    });



        // 삭제 버튼
        const deleteBtn = document.createElement("button");
        deleteBtn.id = "deleteBtn";

        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
          li.remove();
        });        
  
        // li 구성
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(changeBtn)
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
  
        input.value = "";
      }
    });
  });
  