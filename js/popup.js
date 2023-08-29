document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupClose = document.querySelector(".popup-close");

  function openPopup() {
    popup.style.display = "flex";
  }

  function closePopup() {
    popup.style.display = "none";
  }

  popupClose.addEventListener("click", closePopup);

  window.addEventListener("scroll", function () {
    const commentsSection = document.getElementById("comments_section");
    const footer = document.querySelector("footer");
    const windowHeight = window.innerHeight;
    const commentsSectionOffset = commentsSection.getBoundingClientRect().top;
    const footerOffset = footer.getBoundingClientRect().top;

    if (commentsSectionOffset < windowHeight && footerOffset > windowHeight) {
      openPopup();
    } else {
      closePopup();
    }
  });
});
