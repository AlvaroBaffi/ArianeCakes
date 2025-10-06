document.addEventListener("DOMContentLoaded", () => {
    // Carrega o header
    fetch("header.html")
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar header");
            return res.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Ativa o menu hambúrguer
            const hamburgerMenu = document.querySelector(".hamburger-menu");
            const mainNav = document.querySelector(".main-nav");

            if (hamburgerMenu && mainNav) {
                hamburgerMenu.addEventListener("click", () => {
                    if (mainNav.style.display === "flex") {
                        mainNav.style.display = "none";
                    } else {
                        mainNav.style.display = "flex";
                        mainNav.style.flexDirection = "column";
                        mainNav.style.position = "absolute";
                        mainNav.style.top = "60px";
                        mainNav.style.left = "0";
                        mainNav.style.width = "100%";
                        mainNav.style.backgroundColor = "#fff";
                        mainNav.style.padding = "20px 0";
                        mainNav.style.textAlign = "center";
                    }
                });
            }
        })
        .catch(err => console.error(err));

    // Carrega o footer
    fetch("footer.html")
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar footer");
            return res.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.error(err));
});
