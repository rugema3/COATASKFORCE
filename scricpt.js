document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".photo-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Open lightbox
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imageUrl = item.style.backgroundImage.slice(5, -2);
            lightbox.style.display = "block";
            lightboxImg.src = imageUrl;
        });
    });

    // Close lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});
