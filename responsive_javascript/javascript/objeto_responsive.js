const responsiveMedia = (e, id, mobileContent, desktopContent) => {
        if(e.matches){
            document.getElementById(id).innerHTML = desktopContent
            document.querySelector(".x").classList.remove("body")
            //si esta en desktop quiero que sea blanco, sin la clase body.
        }
        else{
            document.getElementById(id).innerHTML = mobileContent
            document.querySelector(".x").classList.add("body")
            // si esta en mobile quiero que sea negro y agrego la clase body
        }
        // console.log("MQ", e.matches)    
}

export default responsiveMedia






