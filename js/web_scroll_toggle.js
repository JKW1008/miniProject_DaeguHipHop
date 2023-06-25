const getWindowWidth = () => {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
};

const headerContainer = document.getElementById("header_Container");
const headerImageContainer = document.getElementById("header_ImageContainer");

const headerObserver = new IntersectionObserver(
  (entries) => {
    const windowWidth = getWindowWidth(); // 창 너비를 동적으로 확인

    entries.forEach((entry) => {
      if (windowWidth >= 1024) {
        if (entry.isIntersecting) {
          headerImageContainer.style.top = "-300px"; // 상단에 고정
        } else {
          headerImageContainer.style.top = "0"; // 상단에 고정
        }
      } else {
        headerImageContainer.style.top = "0"; // 상단에 고정
      }
    });
  },
  { rootMargin: "-50px 0px" }
);

headerObserver.observe(headerContainer);
