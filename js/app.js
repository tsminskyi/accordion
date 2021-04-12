
const accordionBlock = document.querySelectorAll("li")
accordionBlock.forEach(element => {

    if (element.classList.contains("accordion")) {

        element.firstElementChild
            .addEventListener("click", () => accordionAction(element.firstElementChild));
    }

});

function accordionAction(elem) {

    const currentAccDescrip = elem.parentNode.lastElementChild;
    const accordionInterf = elem.parentNode.parentNode.querySelector("input[type='radio']:checked")


    if (accordionInterf.value == "one") {

        switchState(currentAccDescrip)

    } else {

        document.querySelectorAll(".accordion__description").forEach(element => {

            if (currentAccDescrip == element) {

                switchState(currentAccDescrip)
            }
            else {
                element.classList.remove("accordion__description_open")
                element.classList.add("accordion__description_close")

                const btn = element.parentNode.querySelector(".accordion__btn");
                btn.classList.add("accordion__btn_close");
                btn.classList.remove("accordion__btn_open");
            }

        })
    }
}

function switchState(elem) {
    if (elem.classList.contains("accordion__description_close")) {

        elem.classList.add("accordion__description_open");

        elem.classList.remove("accordion__description_close");

        const btn = elem.parentNode.querySelector(".accordion__btn");
        btn.classList.add("accordion__btn_open");
        btn.classList.remove("accordion__btn_close");

    } else {

        elem.classList.add("accordion__description_close");

        elem.classList.remove("accordion__description_open");

        const btn = elem.parentNode.querySelector(".accordion__btn");
        btn.classList.add("accordion__btn_close");
        btn.classList.remove("accordion__btn_open");
    }
}