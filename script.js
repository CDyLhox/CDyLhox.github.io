const paintings = document.querySelectorAll(".painting");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDescription = document.getElementById("modalDescription");

paintings.forEach(p => {
  p.addEventListener("click", () => {
    modal.style.display = "block";

    modalTitle.textContent = p.dataset.title;
    modalDate.textContent = p.dataset.date;
    modalDescription.textContent = p.dataset.description;

    modalImages.innerHTML = "";

    const images = JSON.parse(p.dataset.process);
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      modalImages.appendChild(img);
    });

    modalImages.scrollTop = 0; // start at finished work
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.style.display = "none";
});

