document.addEventListener("click", function (e) {
  if (e.target.classList.contains("news-temp-img")) {
    openFullscreenModal(e.target);
  }
});

function openFullscreenModal(image) {
  let existingModal = document.querySelector(".modal");
  if (existingModal) existingModal.remove();

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.style.display = "block";  // Відкриваємо модальне вікно

  const modalImg = document.createElement("img");
  modalImg.src = image.src;
  modalImg.alt = image.alt || "Image";
  modalImg.classList.add("modal-content");

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = image.alt || "";

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "×";
  closeButton.onclick = function () {
    document.body.removeChild(modal);
  };

  modal.appendChild(closeButton);
  modal.appendChild(modalImg);
  modal.appendChild(caption);

  document.body.appendChild(modal);
}
