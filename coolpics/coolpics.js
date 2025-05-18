// MENU BUTTON CODE
const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
handleResize();


// Target elements
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = document.querySelector(".close-viewer");

// Open image function
function openImage(event) {
  const clickedImg = event.target.closest("img");
  if (clickedImg) {
    const srcParts = clickedImg.src.split("-")[0];
    const fullSrc = srcParts + "-full.jpeg";
    modalImage.src = fullSrc;
    modalImage.alt = clickedImg.alt;
    modal.showModal();
  }
}

// Close modal function
function closeModal() {
  modal.close();
}

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Event listeners
gallery.addEventListener("click", openImage);
closeButton.addEventListener("click", closeModal);
