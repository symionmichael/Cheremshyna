// Language translation module for Cheremshyna Mini-Hotel website
(function () {
    "use strict";

    const STORAGE_KEY = "cheremshyna-lang";
    const DEFAULT_LANG = "uk";

    const translations = {
        uk: {
            nav_about: "Про нас",
            nav_rooms: "Номери",
            nav_services: "Послуги",
            nav_gallery: "Галерея",
            nav_contact: "Контакти",

            brand_main: "Черемшина",
            brand_sub: "-Міні-готель",

            hero_title: "Спокійний гірський відпочинок біля термальних вод Закарпаття",
            hero_lead: "Міні-готель «Черемшина» розташований у селі Велятино, за кілька хвилин ходьби від термального комплексу «Теплі Води» — тихе місце для сімейного відпочинку чи неспішної подорожі селом.",
            hero_btn_primary: "Перевірити наявність номерів",
            hero_btn_ghost: "Переглянути номери",
            hero_fact1_dd: "до термальних басейнів «Теплі Води»",
            hero_fact2_dd: "за ніч, номер «Стандарт»",
            hero_fact3_dd: "мінімальне поселення",

            about_title: "Про нас",
            about_p1: "Міні-готель «Черемшина» — невеликий сімейний готель у селі Велятино, Закарпатська область, Україна. Гарна база для неспішного знайомства з карпатським селом.",
            about_p2: "Готель розташований приблизно за 50 метрів від термального комплексу «Теплі Води», тож купання в теплих басейнах завжди поруч. Номери виходять у приватний закритий двір з паркуванням для гостей, віддалений від дороги.",

            rooms_title: "Номери",
            rooms_intro: "Кожен номер «Стандарт» облаштований для комфортного проживання з можливістю самостійного приготування їжі: власна ванна кімната, балкон або лоджія та повністю обладнана міні-кухня.",

            room_facilities_title: "Обладнання номера",
            room_fac_1: "Двоспальне ліжко або два односпальних",
            room_fac_2: "Додаткове ліжко за запитом",
            room_fac_3: "Власна ванна кімната з душовою кабіною",
            room_fac_4: "Телевізор",
            room_fac_5: "Балкон або лоджія",
            room_fac_6: "Фен",

            kitchen_title: "Приватна міні-кухня",
            kitchen_intro: "Гості можуть готувати самостійно в будь-який час. Кожна кухня включає:",
            kitchen_1: "Холодильник",
            kitchen_2: "Індукційну варильну поверхню",
            kitchen_3: "Мультиварку",
            kitchen_4: "Електрочайник",
            kitchen_5: "Базовий посуд та кухонне приладдя",

            pricing_title: "Ціни",
            pricing_p: "Вартість залежить від сезону та тривалості проживання. Зв'яжіться з нами, щоб перевірити наявність та актуальну ціну.",
            pricing_th_room: "Тип номера",
            pricing_th_price: "Ціна",
            pricing_room_type: "Стандарт",
            pricing_price: "від 450 грн / особу",
            pricing_note1: "Мінімальне поселення: 3 ночі.",
            pricing_note2: "Це наша поточна пропозиція — остаточна ціна підтверджується під час бронювання.",
            pricing_btn: "Перевірити наявність номерів",

            services_title: "Послуги та зручності",
            services_intro: "Включено у вартість проживання, без додаткової оплати:",
            amenity_1: "Wi-Fi та швидкісний інтернет",
            amenity_2: "Безкоштовне паркування на території",
            amenity_3: "Відеоспостереження",
            amenity_4: "Автономне опалення на всій території",
            amenity_5: "Приватна закрита територія",

            gallery_title: "Галерея",
            gallery_caption: "Міні-готель «Черемшина»",

            contact_title: "Контакти",
            contact_address_label: "Адреса",
            contact_address_value: "с. Велятино, Тячівський район, Закарпатська область, Україна",
            contact_phone_label: "Телефон",
            contact_email_label: "Ел. пошта",
            contact_checkinout_label: "Заїзд / Виїзд",
            contact_checkinout_value: "з 14:00 / до 11:00",

            footer_text: "Міні-готель «Черемшина», с. Велятино, Закарпатська область"
        },

        cs: {
            nav_about: "O nás",
            nav_rooms: "Pokoje",
            nav_services: "Služby",
            nav_gallery: "Galerie",
            nav_contact: "Kontakt",

            brand_main: "Čeremšyna",
            brand_sub: "-Mini-hotel",

            hero_title: "Klidný horský pobyt u termálních vod Zakarpatí",
            hero_lead: "Mini-hotel Čeremšyna se nachází ve vesnici Velyatyno, jen pár kroků od termálního komplexu Teplí Vody — klidné místo pro rodinnou dovolenou nebo pomalejší venkovský odpočinek.",
            hero_btn_primary: "Ověřit dostupnost",
            hero_btn_ghost: "Prohlédnout pokoje",
            hero_fact1_dd: "k termálním bazénům Teplí Vody",
            hero_fact2_dd: "za noc, pokoj Standard",
            hero_fact3_dd: "minimální délka pobytu",

            about_title: "O nás",
            about_p1: "Mini-hotel Čeremšyna je malý rodinný hotel ve vesnici Velyatyno v Zakarpatské oblasti na západě Ukrajiny — dobrá základna pro pomalejší poznávání karpatského venkova.",
            about_p2: "Hotel se nachází přibližně 50 metrů od termálního komplexu Teplí Vody, takže koupel v teplých bazénech je vždy jen kousek pěšky. Pokoje vedou do soukromé uzavřené zahrady s parkováním pro hosty, mimo dosah ulice.",

            rooms_title: "Pokoje",
            rooms_intro: "Každý pokoj Standard je vybaven pro pohodlný samostatný pobyt: vlastní koupelna, balkon nebo lodžie a plně vybavená mini-kuchyňka.",

            room_facilities_title: "Vybavení pokoje",
            room_fac_1: "Manželská postel nebo dvě jednolůžkové postele",
            room_fac_2: "Přistýlka na vyžádání",
            room_fac_3: "Vlastní koupelna se sprchovým koutem",
            room_fac_4: "Televize",
            room_fac_5: "Balkon nebo lodžie",
            room_fac_6: "Fén",

            kitchen_title: "Soukromá mini-kuchyňka",
            kitchen_intro: "Hosté si mohou kdykoli sami vařit. Každá kuchyňka obsahuje:",
            kitchen_1: "Lednička",
            kitchen_2: "Indukční varná deska",
            kitchen_3: "Multifunkční hrnec",
            kitchen_4: "Rychlovarná konvice",
            kitchen_5: "Základní kuchyňské nádobí a náčiní",

            pricing_title: "Ceny",
            pricing_p: "Ceny se liší podle sezóny a délky pobytu. Kontaktujte nás pro ověření dostupnosti a aktuální ceny.",
            pricing_th_room: "Typ pokoje",
            pricing_th_price: "Cena",
            pricing_room_type: "Standard",
            pricing_price: "od 450 UAH / noc",
            pricing_note1: "Minimální délka pobytu: 3 noci.",
            pricing_note2: "Toto je naše aktuální nabídka — konečná cena se potvrzuje při rezervaci.",
            pricing_btn: "Ověřit dostupnost",

            services_title: "Služby a vybavení",
            services_intro: "Zahrnuto v ceně pobytu, bez příplatku:",
            amenity_1: "Wi-Fi a rychlý internet",
            amenity_2: "Bezplatné parkování v areálu",
            amenity_3: "Kamerový systém",
            amenity_4: "Autonomní vytápění v celém objektu",
            amenity_5: "Soukromý uzavřený areál",

            gallery_title: "Galerie",
            gallery_caption: "Mini-hotel Čeremšyna",

            contact_title: "Kontakt",
            contact_address_label: "Adresa",
            contact_address_value: "obec Velyatyno, okres Ťačiv, Zakarpatská oblast, Ukrajina",
            contact_phone_label: "Telefon",
            contact_email_label: "E-mail",
            contact_checkinout_label: "Check-in / Check-out",
            contact_checkinout_value: "od 14:00 / do 11:00",

            footer_text: "Mini-hotel Čeremšyna, obec Velyatyno, Zakarpatská oblast"
        },

        en: {
            nav_about: "About us",
            nav_rooms: "Rooms",
            nav_services: "Services",
            nav_gallery: "Gallery",
            nav_contact: "Contact",

            brand_main: "Cheremshyna",
            brand_sub: "-Mini-Hotel",

            hero_title: "A calm mountain stay beside Zakarpattia's thermal waters",
            hero_lead: "Cheremshyna Mini-Hotel sits in the village of Velyatyno, an easy walk from the Tepli Vody thermal complex — a quiet base for a family holiday or a slower countryside break.",
            hero_btn_primary: "Check availability",
            hero_btn_ghost: "Explore rooms",
            hero_fact1_dd: "to the Tepli Vody thermal pools",
            hero_fact2_dd: "per night, Standard room",
            hero_fact3_dd: "minimum stay",

            about_title: "About us",
            about_p1: "Cheremshyna Mini-Hotel is a small, family-run hotel in the village of Velyatyno, in the Zakarpattia region of western Ukraine — a good base for exploring the Carpathian countryside at a slower pace.",
            about_p2: "The hotel stands about 50 metres from the Tepli Vody thermal complex, so a soak in the warm pools is never more than a short walk away. Rooms open onto a private, enclosed garden with parking for guests' cars, set back from the road.",

            rooms_title: "Rooms",
            rooms_intro: "Each Standard room is set up for a comfortable, self-catered stay, with a private bathroom, a balcony or loggia, and a fully equipped mini-kitchen.",

            room_facilities_title: "Room facilities",
            room_fac_1: "Double bed, or two single beds",
            room_fac_2: "Extra bed available on request",
            room_fac_3: "Private bathroom with shower cabin",
            room_fac_4: "TV",
            room_fac_5: "Balcony or loggia",
            room_fac_6: "Hair dryer",

            kitchen_title: "Private mini-kitchen",
            kitchen_intro: "Guests can cook for themselves at any time. Every kitchen includes:",
            kitchen_1: "Refrigerator",
            kitchen_2: "Induction cooktop",
            kitchen_3: "Multicooker",
            kitchen_4: "Electric kettle",
            kitchen_5: "Basic kitchenware and dishes",

            pricing_title: "Prices",
            pricing_p: "Rates depend on the season and length of stay. Contact us to confirm availability and the current price.",
            pricing_th_room: "Room type",
            pricing_th_price: "Price",
            pricing_room_type: "Standard",
            pricing_price: "from 450 UAH / night",
            pricing_note1: "Minimum stay: 3 nights.",
            pricing_note2: "This reflects our current offer — the final price is confirmed at the time of booking.",
            pricing_btn: "Check availability",

            services_title: "Services & amenities",
            services_intro: "Included with every stay, at no extra charge:",
            amenity_1: "Wi-Fi and high-speed internet",
            amenity_2: "Free parking on site",
            amenity_3: "Video surveillance",
            amenity_4: "Autonomous heating throughout the property",
            amenity_5: "Private, enclosed grounds",

            gallery_title: "Gallery",
            gallery_caption: "Cheremshyna Mini-Hotel",

            contact_title: "Contact",
            contact_address_label: "Address",
            contact_address_value: "Velyatyno, Tiachiv district, Zakarpattia region, Ukraine",
            contact_phone_label: "Phone",
            contact_email_label: "Email",
            contact_checkinout_label: "Check-in / Check-out",
            contact_checkinout_value: "From 14:00 / until 11:00",

            footer_text: "Cheremshyna Mini-Hotel, Velyatyno, Zakarpattia region"
        }
    };

    function getSavedLang() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && translations[saved]) return saved;
        } catch (e) {
            /* localStorage unavailable, ignore */
        }
        return null;
    }

    function detectBrowserLang() {
        const nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
        if (nav.startsWith("cs") || nav.startsWith("sk")) return "cs";
        if (nav.startsWith("en")) return "en";
        return DEFAULT_LANG;
    }

    function applyTranslations(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        document.documentElement.setAttribute("lang", lang);

        document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-lang-switch") === lang);
        });
    }

    function setLanguage(lang) {
        if (!translations[lang]) lang = DEFAULT_LANG;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* ignore storage errors */
        }
        applyTranslations(lang);
    }

    function initLanguage() {
        const initialLang = getSavedLang() || DEFAULT_LANG;
        applyTranslations(initialLang);

        document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
            btn.addEventListener("click", () => {
                setLanguage(btn.getAttribute("data-lang-switch"));
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initLanguage);
    } else {
        initLanguage();
    }

    // Expose for debugging / manual use if needed
    window.CheremshynaI18n = { setLanguage, translations };
})();