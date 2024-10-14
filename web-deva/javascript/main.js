// Scroll to specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Reveal hidden message
function revealMessage() {
    const message = document.getElementById('hiddenMessage');
    message.style.visibility = 'visible';
    message.style.transition = 'visibility 0.5s ease-in-out';
}

// WhatsApp Message
function sendWhatsAppMessage() {
    var message = document.getElementById('whatsappMessage').value;

    if (message.trim() === '') {
        alert('Tolong tulis pesan terlebih dahulu!');
        return;
    }
    
    var formattedMessage = "from Vivi to you: " + message;
    var encodedMessage = encodeURIComponent(formattedMessage);

    var phoneNumber = '6285904471135'; // Ganti dengan nomor tujuan
    var whatsappUrl = "https://wa.me/" + 6285904471135 + "?text=" + encodedMessage;

    window.open(whatsappUrl, "_blank");
}
