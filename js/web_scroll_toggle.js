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
    const windowWidth = getWindowWidth();

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
  { rootMargin: "-50px 0px" }
);

headerObserver.observe(headerContainer);
