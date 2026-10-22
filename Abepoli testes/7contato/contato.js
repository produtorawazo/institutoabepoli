/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {                
        navMenu.classList.toggle("active");
    });

}


/* =========================
   FORMSPREE
========================= */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector(".btn-submit");

        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            /* ENVIO REALIZADO */

            if (response.ok) {

                formStatus.textContent =
                    "Mensagem enviada com sucesso! Obrigado pelo contato.";

                formStatus.className =
                    "form-status success";

                contactForm.reset();

            }


            /* ERRO DO FORMSPREE */

            else {

                formStatus.textContent =
                    "Não foi possível enviar a mensagem. Tente novamente.";

                formStatus.className =
                    "form-status error";

            }

        }


        /* ERRO DE CONEXÃO */

        catch (error) {

            formStatus.textContent =
                "Ocorreu um erro ao enviar. Verifique sua conexão e tente novamente.";

            formStatus.className =
                "form-status error";

        }


        /* VOLTA O BOTÃO AO NORMAL */

        submitButton.disabled = false;
        submitButton.textContent = "Enviar";

    });

}