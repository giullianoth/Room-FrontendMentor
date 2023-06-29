import Slider from "./slider.js"
import { FixedHeader, MobileMenu, SliderViewport } from "./viewport.js"

window.onload = () => {
    FixedHeader()
    SliderViewport()
    MobileMenu()
    Slider()
}

window.onresize = SliderViewport
window.onscroll = FixedHeader
