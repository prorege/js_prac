const greeting = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");

// 1. 페이지 로드 시, 저장된 이름이 있다면 불러와서 인사
const savedName = localStorage.getItem("username");
if (savedName) {
  greeting.textContent = `환영합니다, ${savedName}님!`;
}

// 2. 이름 입력 후 저장 버튼 클릭 시 localStorage에 저장
saveBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (name === "") {
    alert("이름을 입력해주세요!");
    return;
  }
  localStorage.setItem("username", name);
  greeting.textContent = `환영합니다, ${name}님!`;
  input.value = "";
});
