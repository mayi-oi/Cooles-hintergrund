// Liste aller verfügbaren Hintergrundbilder für den Header
const headerBackgrounds = [
    "src/img/wallpapers/wallhaven-mlo6my_2560x1440.png",
    "src/img/wallpapers/wallhaven-x6w33o_1920x1080.png",
    "src/img/wallpapers/wallhaven-yqkl97_1920x1080.png",
    "src/img/wallpapers/wallhaven-qrpedr_1920x1080.png",
    "src/img/wallpapers/wallhaven-pomo69_1920x1080.png",
    "src/img/wallpapers/wallhaven-1qoej1_1920x1080.png",
    "src/img/wallpapers/wallhaven-qrp87d_2560x1440.png",
    "src/img/wallpapers/wallhaven-5ypy88_2560x1440.png",
    "src/img/wallpapers/wallhaven-k8jgl6_2560x1440.png",
    "src/img/wallpapers/wallhaven-7jxkqe_2560x1440.png",
    "src/img/wallpapers/wallhaven-nm311y_1920x1080.png",
    "src/img/wallpapers/wallhaven-g7ppq7_2560x1440.png"
];

// Funktion zum sanften Wechseln des Header-Hintergrunds
function changeHeaderBackground() {
    const overlayBanner = document.querySelector('.overlay-banner');
    if (overlayBanner) {
        // Fade out starten
        overlayBanner.style.opacity = '0';

        setTimeout(() => {
            // Neues zufälliges Bild setzen
            const randomIndex = Math.floor(Math.random() * headerBackgrounds.length);
            overlayBanner.src = headerBackgrounds[randomIndex];

            // Fade in nach kurzer Verzögerung (damit Bild laden kann)
            setTimeout(() => {
                overlayBanner.style.opacity = '1';
            }, 50);
        }, 1000); // 1 Sekunde für Fade-Out
    }
}

// Header-Hintergrund sofort setzen und dann alle 14 Sekunden wechseln
changeHeaderBackground();
setInterval(changeHeaderBackground, 14000);

// Herunterladen-Funktionalität für Papier-Cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.Papier-download').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.papier-card');
            if (card) {
                const img = card.querySelector('.Papier-banner');
                if (img && img.src) {
                    const link = document.createElement('a');
                    link.href = img.src;
                    const parts = img.src.split('/');
                    link.download = parts[parts.length - 1];
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            }
        });
    });
});
