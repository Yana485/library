// Event listener for image clicks
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fullscreen-img")) {
    openFullscreenModal(e.target);
  }
});

// Function to open the fullscreen modal
function openFullscreenModal(image) {
  // Check if a modal already exists and remove it
  let existingModal = document.querySelector(".modal");
  if (existingModal) existingModal.remove();

  // Create modal container
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create modal image
  const modalImg = document.createElement("img");
  modalImg.src = image.src;
  modalImg.alt = image.alt || "Image";
  modalImg.classList.add("modal-content");

  // Create caption
  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = image.alt || "";

  // Create close button
  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "×";
  closeButton.onclick = function () {
    document.body.removeChild(modal);
  };

  // Append elements to modal
  modal.appendChild(closeButton);
  modal.appendChild(modalImg);
  modal.appendChild(caption);

  // Append modal to the body
  document.body.appendChild(modal);
}
