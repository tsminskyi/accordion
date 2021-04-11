function accordionOpen(elem,openIMG,closeIMG) {


    document.querySelectorAll(".accordion__description").forEach(element => {
        element.classList.remove("accordion__description_open")
        element.classList.add("accordion__description_close")

        element.parentNode.firstElementChild.lastElementChild.setAttribute("src", openIMG)

    })

    elem.parentNode.lastElementChild.classList.add("accordion__description_open");
    elem.parentNode.lastElementChild.classList.remove("accordion__description_close");
    elem.parentNode.firstElementChild.lastElementChild.setAttribute("src", closeIMG)
}