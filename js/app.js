
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

        if (currentAccDescrip.classList.contains("accordion__description_close")) {

            currentAccDescrip.classList.add("accordion__description_open");

            currentAccDescrip.classList.remove("accordion__description_close");

            const btn = currentAccDescrip.parentNode.querySelector(".accordion__btn");
            btn.classList.add("accordion__btn_open");
            btn.classList.remove("accordion__btn_close");

        } else {

            currentAccDescrip.classList.add("accordion__description_close");

            currentAccDescrip.classList.remove("accordion__description_open");

            const btn = currentAccDescrip.parentNode.querySelector(".accordion__btn");
            btn.classList.add("accordion__btn_close");
            btn.classList.remove("accordion__btn_open");
        }

    } else {

        document.querySelectorAll(".accordion__description").forEach(element => {

            element.classList.remove("accordion__description_open")
            element.classList.add("accordion__description_close")

            const btn = element.parentNode.querySelector(".accordion__btn");
            btn.classList.add("accordion__btn_close");
            btn.classList.remove("accordion__btn_open");

        })

        currentAccDescrip.classList.add("accordion__description_open");
        currentAccDescrip.classList.remove("accordion__description_close");

        const btn = currentAccDescrip.parentNode.querySelector(".accordion__btn");
        btn.classList.add("accordion__btn_open");
        btn.classList.remove("accordion__btn_close");
    }
}