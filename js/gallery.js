const galleryImg = [
  "./images/sns/1.jpg",
  "./images/sns/2.jpg",
  "./images/sns/3.jpg",
  "./images/sns/4.jpg",
  "./images/sns/5.jpg",
  "./images/sns/6.jpg",
  "./images/sns/7.jpg",
  "./images/sns/8.jpg",
  "./images/sns/9.jpg",
  "./images/sns/10.jpg",
  "./images/sns/11.jpg",
  "./images/sns/12.jpg",
  "./images/sns/13.jpg",
  "./images/sns/14.jpg",
  "./images/sns/15.jpg",
  "./images/sns/16.jpg",
  "./images/sns/17.jpg",
  "./images/sns/18.jpg",
  "./images/sns/19.jpg",
  "./images/sns/20.jpg",
  "./images/sns/21.jpg",
  "./images/sns/22.jpg",
  "./images/sns/23.jpg",
  "./images/sns/24.jpg",
  "./images/sns/25.jpg",
  "./images/sns/26.jpg",
  "./images/sns/27.jpg",
  "./images/sns/28.jpg",
  "./images/sns/29.jpg",
  "./images/sns/30.jpg",
  "./images/sns/1.jpg",
  "./images/sns/2.jpg",
  "./images/sns/3.jpg",
  "./images/sns/4.jpg",
  "./images/sns/5.jpg",
  "./images/sns/6.jpg",
  "./images/sns/7.jpg",
  "./images/sns/8.jpg",
  "./images/sns/9.jpg",
  "./images/sns/10.jpg",
  "./images/sns/11.jpg",
  "./images/sns/12.jpg",
  "./images/sns/13.jpg",
  "./images/sns/14.jpg",
  "./images/sns/15.jpg",
  "./images/sns/16.jpg",
  "./images/sns/17.jpg",
  "./images/sns/18.jpg",
  "./images/sns/19.jpg",
  "./images/sns/20.jpg",
  "./images/sns/21.jpg",
  "./images/sns/22.jpg",
  "./images/sns/23.jpg",
  "./images/sns/24.jpg",
  "./images/sns/25.jpg",
  "./images/sns/26.jpg",
  "./images/sns/27.jpg",
  "./images/sns/28.jpg",
  "./images/sns/29.jpg",
  "./images/sns/30.jpg",
];
// 이미지 배열 생성
const galleryContainer = document.getElementById("gallery");
const showMoreButton = document.getElementById("showMoreButton");
// html 요소 호출

let currentIndex = 0; // 변수 생성
let itemsPerPage = 4; // 해상도마다 보여지는 이미지의 갯수를 변수로 생성

function showItems() {
  const endIndex = Math.min(currentIndex + itemsPerPage, galleryImg.length);
  // 갤러리가 다 펼쳐졌을 때를 위한 변수
  const shuffledImages = shuffleArray(galleryImg);
  // 함수로 랜덤하게 섞이는 이미지배열 변수
  for (let i = currentIndex; i < endIndex; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = shuffledImages[i];
    div.appendChild(img);
    galleryContainer.appendChild(div);
  }
  // 이미지배열의 끝에 다를때 까지 div로 감싼 img를 html에 쏴준다
  currentIndex += itemsPerPage;

  // 모든 이미지를 로드한 경우, 더 이상 버튼을 표시하지 않습니다
  if (currentIndex >= galleryImg.length) {
    showMoreButton.style.display = "none";
  }
}

function adjustItemsPerPage() {
  if (window.innerWidth < 768) {
    itemsPerPage = 2;
  } else if (window.innerWidth < 960) {
    itemsPerPage = 3;
  } else if (window.innerWidth < 1024) {
    itemsPerPage = 4;
  } else if (window.innerWidth < 1280) {
    itemsPerPage = 5;
  } else {
    itemsPerPage = 6;
  }
}
// 해상도에 따라 버튼을 누를때 로드 되는 이미지의 개수(반응형을 위한 함수)

// 랜덤하게 배열을 섞어주는 함수
function shuffleArray(array) {
  const shuffled = [...array];
  //원본 배열은 건드리지 않고 새로은 배열을 생성함

  for (let i = shuffled.length - 1; i > 0; i--) {
    // 배열을 뒤에서부터 인덱스 0까지 반복한다
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    // 0 부터 i 까지 무작위로 정수를 생성해서 j에 할당한다.
    // 이때 인덱스 i 값과 인덱스 j 값을 서로 교환해서 무작위로 배열을 생성한다.
  }
  return shuffled;
}

showMoreButton.addEventListener("click", () => {
  showItems();
});
// 버튼을 클릭했을때 이벤트 발생
window.addEventListener("resize", () => {
  adjustItemsPerPage();
});
// 해상도가 바뀌었을때 이벤트 발생
adjustItemsPerPage();
showItems();
