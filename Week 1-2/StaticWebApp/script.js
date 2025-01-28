document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Estää lomakkeen oletusarvoisen lähetyksen

    let valid = true;

    // Puhdistetaan mahdolliset aikaisemmat virheilmoitukset
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Tarkistetaan kentät
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "") {
        document.getElementById("nameError").textContent = "Nimi on pakollinen.";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Sähköposti on pakollinen.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Anna kelvollinen sähköpostiosoite.";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Viesti on pakollinen.";
        valid = false;
    }

    if (valid) {
        document.getElementById("formFeedback").style.display = "block";
        document.getElementById("contactForm").reset(); // Tyhjennä lomake
    }
});


