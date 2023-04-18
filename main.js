const btnShare = document.querySelector(".btn-share");
const shareSection = document.querySelector(".article__share");
const authorSection = document.querySelector(".article__author");

function showShareSection() {
  const btnActive = btnShare.classList.contains("active");

  btnShare.classList.toggle("active");
  shareSection.style.display = "flex";
  authorSection.classList.toggle("invisible");

  if (btnActive) {
    shareSection.style.display = "none";
  }
}

btnShare.addEventListener("click", showShareSection);
