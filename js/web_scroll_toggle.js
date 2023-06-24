const headerContainer = document.getElementById("header_Container");
const headerImageContainer = document.getElementById("header_ImageContainer");

const fadeOut = () => {
  headerImageContainer.style.top = "-300px";
};

const fadeIn = () => {
  headerImageContainer.style.top = "0";
};

const headerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeOut();
      } else {
        fadeIn();
      }
    });
  },
  { rootMargin: "-50px 0px" }
);

headerObserver.observe(headerContainer);
