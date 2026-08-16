let cart = [];

function addToCart(name, price) {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    const button = event.target;

    button.innerText = "✓ تمت الإضافة";

    setTimeout(() => {
        button.innerText = "+ أضف للسلة";
    }, 1000);
}


function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    const cartEmpty = document.getElementById("cartEmpty");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;
        count += item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <span>RM ${item.price} × ${item.quantity}</span>
            </div>

            <div class="quantity">
                <button onclick="changeQuantity(${index}, 1)">+</button>
                <b>${item.quantity}</b>
                <button onclick="changeQuantity(${index}, -1)">−</button>
            </div>
        `;

        cartItems.appendChild(div);
    });

    cartCount.innerText = count;
    cartTotal.innerText = total;

    if (cart.length === 0) {
        cartEmpty.style.display = "flex";
    } else {
        cartEmpty.style.display = "none";
    }
}


function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}


function openCart() {
    document.getElementById("cartOverlay").classList.add("active");
}


function closeCart() {
    document.getElementById("cartOverlay").classList.remove("active");
}


function openCheckout() {

    if (cart.length === 0) {
        alert("السلة فارغة، أضف بعض الأطباق أولاً 😋");
        return;
    }

    closeCart();

    document.getElementById("checkoutOverlay").classList.add("active");
}


function closeCheckout() {
    document.getElementById("checkoutOverlay").classList.remove("active");
}


function sendOrder() {

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const type = document.getElementById("orderType").value;
    const note = document.getElementById("customerNote").value.trim();

    if (!name || !phone) {
        alert("فضلاً اكتب الاسم ورقم الجوال.");
        return;
    }

    let message = "🍽️ *طلب جديد - بيت الشرق*%0A%0A";

    message += "👤 الاسم: " + name + "%0A";
    message += "📱 الجوال: " + phone + "%0A";
    message += "📦 نوع الطلب: " + type + "%0A%0A";

    message += "🛒 *تفاصيل الطلب:*%0A";

    let total = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        message +=
            "• " +
            item.name +
            " × " +
            item.quantity +
            " = RM " +
            itemTotal +
            "%0A";
    });

    message += "%0A💰 *الإجمالي: RM " + total + "*%0A";

    if (note) {
        message += "%0A📝 ملاحظات: " + note;
    }

    const whatsappNumber = "601111098433";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");
}


document.getElementById("languageBtn").addEventListener("click", function () {

    const isArabic = document.documentElement.lang === "ar";

    if (isArabic) {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        this.innerText = "العربية";

        const translations = {
            "بيت الشرق": "Orient House Restaurant",
            "ORIENT HOUSE RESTAURANT": "ORIENT HOUSE RESTAURANT",
            "أهلاً وسهلاً 👋": "Welcome 👋",
            "مطعم بيت الشرق": "Orient House Restaurant",
            "استمتع بأشهى الأطباق العربية، والوجبات الطازجة في أجواء مميزة.": "Enjoy authentic Arabic dishes and fresh meals in a special atmosphere.",
            "شاهد المنيو": "View Menu",
            "قائمة الطعام": "Our Menu",
            "اختر ما تشتهي وأضفه إلى سلتك": "Choose your favorite and add it to your cart",
            "برجر لحم": "Beef Burger",
            "برجر لحم طازج مع الجبن والصوص الخاص": "Fresh beef burger with cheese and special sauce",
            "برجر دجاج": "Chicken Burger",
            "دجاج مقرمش مع الجبن والصوص الخاص": "Crispy chicken with cheese and special sauce",
            "بطاطس": "French Fries",
            "بطاطس مقرمشة ولذيذة": "Crispy and delicious fries",
            "تواصل معنا": "Contact Us",
            "تسعد بخدمتكم وطلباتكم": "We are happy to serve you",
            "تواصل معنا عبر واتساب": "Contact us via WhatsApp",
            "السلة": "Cart",
            "أضف للسلة": "Add to Cart",
            "إتمام الطلب": "Checkout",
            "بيانات الطلب": "Order Details",
            "الاسم": "Name",
            "اكتب اسمك": "Enter your name",
            "رقم الجوال": "Phone Number",
            "نوع الطلب": "Order Type",
            "استلام من المطعم": "Pickup from Restaurant",
            "توصيل": "Delivery",
            "العنوان / الملاحظات": "Address / Notes",
            "اكتب العنوان أو أي ملاحظات على الطلب": "Enter address or any notes about your order",
            "إرسال الطلب عبر واتساب": "Send Order via WhatsApp"
        };

        translatePage(translations);

    } else {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        this.innerText = "English";

        const translations = {
            "Orient House Restaurant": "بيت الشرق",
            "Welcome 👋": "أهلاً وسهلاً 👋",
            "مطعم بيت الشرق": "مطعم بيت الشرق",
            "Enjoy authentic Arabic dishes and fresh meals in a special atmosphere.": "استمتع بأشهى الأطباق العربية، والوجبات الطازجة في أجواء مميزة.",
            "View Menu": "شاهد المنيو",
            "Our Menu": "قائمة الطعام",
            "Choose your favorite and add it to your cart": "اختر ما تشتهي وأضفه إلى سلتك",
            "Beef Burger": "برجر لحم",
            "Fresh beef burger with cheese and special sauce": "برجر لحم طازج مع الجبن والصوص الخاص",
            "Chicken Burger": "برجر دجاج",
            "Crispy chicken with cheese and special sauce": "دجاج مقرمش مع الجبن والصوص الخاص",
            "French Fries": "بطاطس",
            "Crispy and delicious fries": "بطاطس مقرمشة ولذيذة",
            "Contact Us": "تواصل معنا",
            "We are happy to serve you": "تسعد بخدمتكم وطلباتكم",
            "Contact us via WhatsApp": "تواصل معنا عبر واتساب",
            "Cart": "السلة",
            "Add to Cart": "أضف للسلة",
            "Checkout": "إتمام الطلب",
            "Order Details": "بيانات الطلب",
            "Name": "الاسم",
            "Enter your name": "اكتب اسمك",
            "Phone Number": "رقم الجوال",
            "Order Type": "نوع الطلب",
            "Pickup from Restaurant": "استلام من المطعم",
            "Delivery": "توصيل",
            "Address / Notes": "العنوان / الملاحظات",
            "Enter address or any notes about your order": "اكتب العنوان أو أي ملاحظات على الطلب",
            "Send Order via WhatsApp": "إرسال الطلب عبر واتساب"
        };

        translatePage(translations);
    }

});


function translatePage(translations) {

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
        nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {

        let text = node.nodeValue.trim();

        if (translations[text]) {
            node.nodeValue =
                node.nodeValue.replace(text, translations[text]);
        }

    });


    document.querySelectorAll("input, textarea").forEach(element => {

        if (element.placeholder &&
            translations[element.placeholder]) {

            element.placeholder =
                translations[element.placeholder];
        }

    });


    document.querySelectorAll("option").forEach(option => {

        if (translations[option.textContent.trim()]) {

            option.textContent =
                translations[option.textContent.trim()];
        }

    });
}

updateCart();