alert(
  "2023년 대구힙합페스티벌 행사는 종료되었습니다. 내년에 다시 찾아 뵙겠습니다."
);
// 메인 페이지를 열었을때 뜨는 안내 메시지
const elements = document.getElementsByClassName("alertbtn");

function showAlert() {
  alert(
    "2023년 대구힙합페스티벌 행사는 종료되었습니다. 내년에 다시 찾아 뵙겠습니다."
  );
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", showAlert);
}
//  tickets라는 클래스 alertbtn 을 가진 태그들을 클릭했을때 나오는 안내 메시지
