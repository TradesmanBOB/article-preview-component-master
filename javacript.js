document.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.getElementById('share-btn');
    const popup = document.getElementById('share-popup');

    if (shareBtn && popup) {
        shareBtn.addEventListener("click", () => {
            if (popup.classList.contains("hidden")) {
                popup.classList.remove("hidden");
                shareBtn.style.backgroundColor = "#49556b";
            } else {
                popup.classList.add("hidden");
                shareBtn.style.backgroundColor = "transparent";
            }
        });
    }
});
