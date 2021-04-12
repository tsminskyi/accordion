function accordionAction(elem, openIMG, closeIMG) {

    const currentAccDescrip = elem.parentNode.lastElementChild;
    const accordionInterf = document.querySelector("input[type='radio']:checked")


    if (accordionInterf.value == "one") {

        if (currentAccDescrip.classList.contains("accordion__description_close")) {

            currentAccDescrip.classList.add("accordion__description_open");

            currentAccDescrip.classList.remove("accordion__description_close");

            currentAccDescrip.parentNode.firstElementChild.lastElementChild.setAttribute("src", closeIMG)

        } else {

            currentAccDescrip.classList.add("accordion__description_close");

            currentAccDescrip.classList.remove("accordion__description_open");

            currentAccDescrip.parentNode.firstElementChild.lastElementChild.setAttribute("src", openIMG)
        }

    } else {

        document.querySelectorAll(".accordion__description").forEach(element => {

            element.classList.remove("accordion__description_open")
            element.classList.add("accordion__description_close")

            element.parentNode.firstElementChild.lastElementChild.setAttribute("src", openIMG)

        })

        currentAccDescrip.classList.add("accordion__description_open");
        currentAccDescrip.classList.remove("accordion__description_close");
        currentAccDescrip.parentNode.firstElementChild.lastElementChild.setAttribute("src", closeIMG)
    }
}