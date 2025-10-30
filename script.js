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

function initMap() {
    // Coordenadas da confeitaria (exemplo: Ribeirão Preto)
    const confeitaria = { lat: -2.9935201256769512, lng: -60.04281681174986};

    // Inicializa o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: confeitaria,
        mapTypeControl: false,
        streetViewControl: false,
    });

    // Cria o marcador
    const marker = new google.maps.Marker({
        position: confeitaria,
        map,
        title: "Ariane Cake's",
    });

    // URL para abrir o Google Maps com a localização
    const mapsUrl = `https://www.google.com/maps?q=${confeitaria.lat},${confeitaria.lng}`;

    // Redireciona ao clicar no marcador
    marker.addListener("click", () => {
        window.open(mapsUrl, "_blank");
    });

    // Redireciona ao clicar em qualquer parte do mapa
    map.addListener("click", () => {
        window.open(mapsUrl, "_blank");
    });
}



