document.addEventListener("DOMContentLoaded", () => {
    // Carrega o header
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Inicializa menu mobile após carregar o header
            const navToggle = document.getElementById("navToggle");
            const mobileMenu = document.getElementById("mobileMenu");

            if (navToggle && mobileMenu) {
                navToggle.addEventListener("click", () => {
                    const isOpen = mobileMenu.classList.toggle("open");
                    navToggle.setAttribute("aria-expanded", String(isOpen));
                });
            }
        })
        .catch(err => console.error("Erro ao carregar header:", err));

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

    // Animações de scroll para a página about
    initScrollAnimations();
});

// Função para animações de scroll (página about)
function initScrollAnimations() {
    const elements = document.querySelectorAll('.value-item, .about-image img');
    
    if (elements.length === 0) return; // Se não houver elementos, sair

    elements.forEach(el => {
        el.classList.add('slide');
    });

    function showElements() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight * 0.8;
            
            if (isVisible) {
                el.classList.add('active');
            }
        });
    }

    // Executar ao carregar e ao rolar
    showElements();
    window.addEventListener('scroll', showElements);
}

// Função para inicializar o mapa do Google Maps (página stores)
function initMap() {
    const confeitaria = { lat: -2.9935201256769512, lng: -60.04281681174986 };
    const mapElement = document.getElementById("map");
    
    if (!mapElement) return; // Se não houver elemento de mapa, sair

    const map = new google.maps.Map(mapElement, {
        zoom: 15,
        center: confeitaria,
        mapTypeControl: false,
        streetViewControl: false,
    });

    const marker = new google.maps.Marker({
        position: confeitaria,
        map,
        title: "Ariane Cake's",
    });

    const mapsUrl = `https://www.google.com/maps?q=${confeitaria.lat},${confeitaria.lng}`;

    marker.addListener("click", () => {
        window.open(mapsUrl, "_blank");
    });

    map.addListener("click", () => {
        window.open(mapsUrl, "_blank");
    });
}