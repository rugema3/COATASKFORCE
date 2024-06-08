document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".photo-gallery");
    gallery.style.opacity = 1;

    const photoItems = document.querySelectorAll(".photo-item");

    photoItems.forEach(item => {
        const imageUrl = item.getAttribute('data-image');
        item.style.backgroundImage = `url(${imageUrl})`;
    });
});
