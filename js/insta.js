const pic = [
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
const insta = document.querySelector(".instagram_contents");
const showMoreButton = document.getElementById("showMoreButton");
// Html 요소 호출
const festivalInstagramLink = "https://www.instagram.com/daeguhiphop/"; // 대구힙합페스티벌의 인스타그램 링크
// instagram 링크를 변수로 정의
let currentIndex = 0; // 변수 생성
let itemsPerPage = 4; // 이미지 갯수 생성

function showItems() {
  const endIndex = Math.min(currentIndex + itemsPerPage, pic.length);
  // 현재 보여지는 페이지, 그리고 배열의 길이를 나타낸 변수
  for (let i = currentIndex; i < endIndex; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const link = document.createElement("a");
    link.href = festivalInstagramLink;
    link.target = "_blank";
    img.src = pic[i];
    link.appendChild(img);
    div.appendChild(link);
    insta.appendChild(div);
  }
  currentIndex += itemsPerPage;
  // 배열의 길이 만큼 html로 보내주는 함수

  // 모든 이미지를 로드한 경우, 더 이상 버튼을 표시하지 않습니다
  if (currentIndex >= pic.length) {
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
// 해상도에 따른 이미지의 갯수
showMoreButton.addEventListener("click", () => {
  showItems();
});
// 클릭 이벤트 발생
window.addEventListener("resize", () => {
  adjustItemsPerPage();
});
// 리사이즈 이미지 발생
// 초기에 이미지를 표시합니다
adjustItemsPerPage();
showItems();
