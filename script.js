document.addEventListener("DOMContentLoaded", () => {
    // Carrega o header
    fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        const navToggle = document.getElementById("navToggle");
        const mobileMenu = document.getElementById("mobileMenu");

        if (navToggle && mobileMenu) {
            navToggle.addEventListener("click", () => {
                mobileMenu.classList.toggle("open");

                const expanded = navToggle.getAttribute("aria-expanded") === "true";
                navToggle.setAttribute("aria-expanded", String(!expanded));
            });
        }
    });


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
    const confeitaria = { lat: -2.9935201256769512, lng: -60.04281681174986 };

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