const containerQR = document.getElementById("containerQR");
const form = document.getElementById("form");
const QR = new QRCode(containerQR);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    QR.makeCode(form.userURL.value);
})


//Simple Generation
// new QRCode(containerQR, "https://github.com/abrahamTech");