document.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.getElementById('share-btn');
    const popup = document.getElementById('share-popup');

    // Grab computed value of the CSS variable
    const rootStyles = getComputedStyle(document.documentElement);
    const lightGray = rootStyles.getPropertyValue('--Light-Grayish-Blue').trim();
    const darkGray = "#49556b"; // whatever your dark/active color is

    if (shareBtn && popup) {
        shareBtn.addEventListener("click", () => {
            if (popup.classList.contains("hidden")) {
                popup.classList.remove("hidden");
                shareBtn.style.backgroundColor = darkGray;
            } else {
                popup.classList.add("hidden");
                shareBtn.style.backgroundColor = lightGray;
            }
        });
    }
});
