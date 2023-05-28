import { setStyle, transitionDuration, transitionGap, transitionProperties } from "./variables.js"

const fadeIn = (element, displayElement = "block") => {

    setStyle(element, "transition", transitionProperties())
    setStyle(element, "opacity", 0)
    setStyle(element, "display", displayElement)

    setTimeout(() => {
        setStyle(element, "opacity", "")

        setTimeout(() => {
            setStyle(element, "transition", "")
        }, transitionDuration)
    }, transitionGap)
}

const fadeOut = (element, removeElement = false) => {
    
    setStyle(element, "transition", transitionProperties())
    setStyle(element, "opacity", 0)

    setTimeout(() => {
        setStyle(element, "display", "none")
        setStyle(element, "opacity", "")
        setStyle(element, "transition", "")
        removeElement && element.remove()
    }, transitionDuration)
}

export { fadeIn, fadeOut }