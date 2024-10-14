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
    // Ambil pesan yang ditulis oleh pengguna
    var message = document.getElementById('whatsappMessage').value;

    // Cek jika pesan kosong, tampilkan alert
    if (message.trim() === '') {
        alert('Tolong tulis pesan terlebih dahulu!');
        return;
    }

    // Nomor telepon tujuan (format internasional tanpa + atau spasi)
    var phoneNumber = '6285904471135'; // Ganti dengan nomor tujuan
    var whatsappUrl = "https://wa.me/qr/EA776HKALFVDJ1" + phoneNumber + "?text=" + encodedMessage;

    // Buat URL WhatsApp
    // var url = `https://wa.me/${6285904471135}?text=${encodeURIComponent(message)}`;

    // Arahkan pengguna ke URL tersebut
    // window.location.href = 'https://wa.me/qr/EA776HKALFVDJ1';
    window.open(whatsappUrl, "https://wa.me/qr/EA776HKALFVDJ1");
}
