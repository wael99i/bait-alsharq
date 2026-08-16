const languageBtn = document.getElementById("languageBtn");
let isArabic = true;
languageBtn.addEventListener("click", function () {
    if (isArabic) {
        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
        languageBtn.textContent = "العربية";
        document.querySelector(".header h1").textContent =
            "ORIENT HOUSE";
        document.querySelector(".header p").textContent =
            "ORIENT HOUSE RESTAURANT";
        document.querySelector(".welcome").textContent =
            "Welcome 👋";
        document.querySelector(".hero h2").textContent =
            "The Taste of the East in Malaysia";
        document.querySelector(".hero p").textContent =
            "Enjoy delicious Arabic dishes and fresh meals in a special atmosphere.";
        document.querySelector(".main-button").textContent =
            "View Menu";
        document.querySelector(".menu > h2").textContent =
            "Menu";
        const items = document.querySelectorAll(".item");
        items[0].querySelector("h3").textContent =
            "Chicken Mandi";
        items[0].querySelector("p").textContent =
            "Seasoned chicken with traditional Arabic mandi rice";
        items[1].querySelector("h3").textContent =
            "Shawarma";
        items[1].querySelector("p").textContent =
            "Fresh shawarma with vegetables and our special sauce";
        items[2].querySelector("h3").textContent =
            "Falafel";
        items[2].querySelector("p").textContent =
            "Crispy falafel with tahini and fresh vegetables";
        items[3].querySelector("h3").textContent =
            "Beef Kebab";
        items[3].querySelector("p").textContent =
            "Grilled beef kebab served with rice and salad";
        items[4].querySelector("h3").textContent =
            "Beef Burger";
        items[4].querySelector("p").textContent =
            "Fresh beef burger with cheese and special sauce";
        items[5].querySelector("h3").textContent =
            "French Fries";
        items[5].querySelector("p").textContent =
            "Crispy and delicious fries";
        document.querySelector(".contact h2").textContent =
            "Contact Us";
        document.querySelector(".contact p").textContent =
            "We are happy to welcome you and receive your orders.";
        document.querySelector(".whatsapp").textContent =
            "Contact us on WhatsApp";
        document.querySelector("footer p").textContent =
            "© 2026 Orient House Restaurant";
        isArabic = false;
    } else {
        location.reload();
    }
});