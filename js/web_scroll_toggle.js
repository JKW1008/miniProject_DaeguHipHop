const getWindowWidth = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};
// 현재 브라우저 창의 크기를 가져오는 함수 하나씩 존재하지않는다면 그다음 값들을 사용
const headerContainer = document.getElementById("header_Container");
const headerImageContainer = document.getElementById("header_ImageContainer");
// 요소 호출
const headerObserver = new IntersectionObserver(
  (entries) => {
    const windowWidth = getWindowWidth();
    // 함수 생성 IntersectionObserver에 매개변수를 담고 windowWidth 변수를 생성 getWindowWidth 함수를 호출
    entries.forEach((entry) => {
      if (windowWidth >= 1024) {
        if (entry.isIntersecting) {
          headerImageContainer.style.top = "-300px";
        } else {
          headerImageContainer.style.top = "0";
        }
      } else {
        headerImageContainer.style.top = "0";
      }
    });
  },
  // 해상도 1024 이상 pc모드에서 매개변수가 관찰될때와 안될때로 나눠서 포지션 정렬
  // 그리고 1024 이하의 해상도에서 포지션도 정렬
  { rootMargin: "-50px 0px" }
);

headerObserver.observe(headerContainer);
// headerContainer로 실행
