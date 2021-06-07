import { breakpoint } from "./declaration_breakpoint.js"
import responsiveMedia from "./objeto_responsive.js"

document.addEventListener("DOMContentLoaded", () => {
    breakpoint.addEventListener("change", (e) => {
        responsiveMedia(e, "youtube", "Contenido Movil", "Contenido Escritorio")
        responsiveMedia(e, "gmaps", "Contenido Movil", "Contenido Escritorio")
    })

})