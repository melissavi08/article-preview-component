const btnShare = document.querySelector(".btn-share");
const shareSection = document.querySelector(".article__share");
const authorSection = document.querySelector(".article__author");

function showShareSection() {
  const btnActive = btnShare.classList.contains("active");

  btnShare.classList.toggle("active");
  shareSection.style.display = "flex";
  authorSection.style.display = "none";

  if (btnActive) {
    shareSection.style.display = "none";
    authorSection.style.display = "flex";
  }
}

btnShare.addEventListener("click", showShareSection);
