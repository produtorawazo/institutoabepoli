document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    const backToTop = document.getElementById("backToTop");

    const openVideo = document.getElementById("openVideo");
    const closeVideo = document.getElementById("closeVideo");

    const videoModal = document.getElementById("videoModal");
    const abepoliVideo = document.getElementById("abepoliVideo");


    /* MENU MOBILE */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            const aberto =
                navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-label",
                aberto ? "Fechar Menu" : "Abrir Menu"
            );

        });


        navMenu
            .querySelectorAll(".nav-link")
            .forEach(function (link) {

                link.addEventListener("click", function () {

                    navMenu.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-label",
                        "Abrir Menu"
                    );

                });

            });

    }


    /* ABRIR VÍDEO */

    function abrirVideo() {

        if (!videoModal) {
            return;
        }

        videoModal.classList.add("active");

        videoModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add("video-open");


        if (abepoliVideo) {

            abepoliVideo.currentTime = 0;

            const promessa =
                abepoliVideo.play();

            if (
                promessa &&
                typeof promessa.catch === "function"
            ) {

                promessa.catch(function () {});

            }

        }

    }


    /* FECHAR VÍDEO */

    function fecharVideo() {

        if (!videoModal) {
            return;
        }

        videoModal.classList.remove("active");

        videoModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove("video-open");


        if (abepoliVideo) {

            abepoliVideo.pause();

            abepoliVideo.currentTime = 0;

        }

    }


    if (openVideo) {

        openVideo.addEventListener(
            "click",
            abrirVideo
        );

    }


    if (closeVideo) {

        closeVideo.addEventListener(
            "click",
            fecharVideo
        );

    }


    if (videoModal) {

        videoModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === videoModal
                ) {

                    fecharVideo();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                fecharVideo();

            }

        }
    );


    /* BOTÃO VOLTAR AO TOPO */

    function atualizarBotaoTopo() {

        if (!backToTop) {
            return;
        }

        backToTop.style.display =
            window.scrollY > 350
                ? "flex"
                : "none";

    }


    window.addEventListener(
        "scroll",
        atualizarBotaoTopo
    );

    atualizarBotaoTopo();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});