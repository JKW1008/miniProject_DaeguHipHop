function toggleAccordion() {
  const isActive = this.classList.contains("open");

  // 모든 아코디언 메뉴 닫기
  accordionItems.forEach((item) => {
    item.classList.remove("open");
    item.querySelector("ul").style.display = "none";
  });

  // 클릭한 아코디언 메뉴 열기 또는 닫기
  if (!isActive) {
    this.classList.add("open");
    this.querySelector("ul").style.display = "block";
  }
}

const accordionItems = document.querySelectorAll(".sidebar li.open");

accordionItems.forEach((item) => {
  // 초기에 모든 아코디언 메뉴 닫기
  item.classList.remove("open");
  item.querySelector("ul").style.display = "none";

  item.addEventListener("click", toggleAccordion);
});
