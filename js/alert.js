alert(
  "2023년 대구힙합페스티벌 행사는 종료되었습니다. 내년에 다시 찾아 뵙겠습니다."
);

const elements = document.getElementsByClassName("alertbtn");

function showAlert() {
  alert(
    "2023년 대구힙합페스티벌 행사는 종료되었습니다. 내년에 다시 찾아 뵙겠습니다."
  );
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", showAlert);
}
