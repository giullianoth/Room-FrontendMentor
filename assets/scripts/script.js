const sliderWiewport = () => {
    const sliderNav = document.querySelector(".j_nav");
    const slideImage = document.querySelector(".j_slide_image");

    let sliderNavHeight = sliderNav.offsetHeight;
    let slideImageHeight = slideImage.offsetHeight;

    sliderNav.style.top = `${slideImageHeight - sliderNavHeight}px`;
}

window.onload = sliderWiewport;
window.onresize = sliderWiewport;
