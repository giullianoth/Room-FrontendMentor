import { MobileMenu, SliderViewport } from "./viewport.js";

window.onload = () => {
    SliderViewport()
    MobileMenu()
};

window.onresize = SliderViewport;
