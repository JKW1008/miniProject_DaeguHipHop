document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header_Container");
  const Pay = document.getElementById("gotoPay");
  const footer = document.getElementsByTagName("footer")[0];
  const windowHeight = window.innerHeight;
  const footerOffset = footer.offsetTop;
  let isPayFixed = false;

  const options = {
    threshold: 0.5, // 임계값 설정 (0 ~ 1)
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // headerContainer가 보일 때 Pay 요소가 나타남
        Pay.style.transform = "translateY(100%)"; // 아래에서 위로 이동
      } else {
        Pay.style.transform = "translateY(0)"; // 숨김 처리
      }
    });
  }, options);

  observer.observe(headerContainer);

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (window.innerWidth >= 1024) {
      // 1024px 이상의 해상도에서만 작동
      // 스크롤이 마지막에 도달하면 Pay 요소가 푸터 위에 붙음
      if (scrollPosition + windowHeight >= footerOffset) {
        if (!isPayFixed) {
          Pay.style.position = "static";
          Pay.style.bottom =
            scrollPosition + windowHeight - footerOffset + "px";
          isPayFixed = true;
        }
      } else {
        if (isPayFixed) {
          Pay.style.position = "fixed";
          Pay.style.bottom = "0";
          isPayFixed = false;
        }
      }
    }
  });
});
