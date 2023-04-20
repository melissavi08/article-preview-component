const btnShare = document.querySelector(".btn-share");
const shareSection = document.querySelector(".article__share");
const authorSection = document.querySelector(".article__author");
const facebook = document.querySelector("#facebook");
const twitter = document.querySelector("#twitter");
const pinterest = document.querySelector("#pinterest");

// social media share buttons
const urlFacebbok = `https://www.facebook.com/sharer/sharer.php?u=${document.URL}`;
facebook.setAttribute("href", urlFacebbok);

const urlTwitter = `https://twitter.com/intent/tweet?text=${document.URL}`;
twitter.setAttribute("href", urlTwitter);

const urlPinterest = `https://pinterest.com/pin/create/button/?url=${document.URL}`;
pinterest.setAttribute("href", urlPinterest);

// show social media buttons
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
