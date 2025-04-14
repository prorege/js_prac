const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") {
    alert("할 일을 입력해주세요!");
    return;
  }

  const li = document.createElement("li");

  // ✅ 체크박스 생성
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style.marginRight = "10px";

  // ✅ 텍스트 노드 생성
  const text = document.createTextNode(task);

  // ✅ 삭제 버튼 생성
  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  delBtn.style.marginLeft = "10px";

  // 체크박스 클릭 시 완료 스타일 적용
  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  // 삭제 버튼 클릭 시 항목 제거
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  input.value = "";
});