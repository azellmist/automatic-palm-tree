// Регистрируем плагин
gsap.registerPlugin(ScrollTrigger);
gsap.set(".service-node", { opacity: 0, y: 50 });

// --- 1. КАТАЛОГ ДАННЫХ ---
const catalogData = [
    { id: 1, title: "AERONIK On/Off ASI-09 HS5", brand: "aeronik", brandLabel: "AERONIK", type: "onoff", price: "29 600 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Завод изготовитель": "GREE inc.", "Рекомендуемая площадь": "До 25 кв.м.", "Мощность": "2550 Вт", "Класс энергии": "A" } },
    { id: 2, title: "AERONIK Inverter ASI-12 INV", brand: "aeronik", brandLabel: "AERONIK", type: "inverter", price: "38 900 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Компрессор": "Инверторный", "Класс энергии": "A++" } },
    { id: 3, title: "GREEN Eco Inverter 09", brand: "gree", brandLabel: "GREEN", type: "inverter", price: "34 000 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Компрессор": "Инверторный", "Уровень шума": "22 дБ" } },
    { id: 4, title: "CHERBROOKE Japan Inverter 12", brand: "gree", brandLabel: "CHERBROOKE", type: "inverter", price: "44 900 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Класс": "A+++", "Обогрев": "до −15°C" } },
    { id: 5, title: "Kentatsu YUKI Inverter 09", brand: "kentatsu", brandLabel: "KENTATSU", type: "inverter", price: "41 200 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Серия": "YUKI Premium", "Рекомендуемая площадь": "До 25 кв.м.", "Wi-Fi": "Опционально" } },
    { id: 6, title: "Kentatsu Tagawa 2.0 Inverter 18", brand: "kentatsu", brandLabel: "KENTATSU", type: "inverter", price: "67 500 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 50 кв.м.", "Класс энергии": "A+++", "Фильтр": "Cold Plasma" } },
    { id: 7, title: "Daikin Sensira FTXF-D 09", brand: "daikin", brandLabel: "DAIKIN", type: "inverter", price: "52 800 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Класс энергии": "A++", "Уровень шума": "19 дБ" } },
    { id: 8, title: "Daikin Sensira FTXF-D 12", brand: "daikin", brandLabel: "DAIKIN", type: "inverter", price: "58 400 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Класс энергии": "A++", "Обогрев": "до −20°C" } },
    { id: 9, title: "Daikin On/Off FTXB-C 09", brand: "daikin", brandLabel: "DAIKIN", type: "onoff", price: "46 200 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Тип компрессора": "On/Off", "Класс энергии": "A" } },
    { id: 10, title: "Mitsubishi Electric MSZ-HR 09", brand: "mitsubishi", brandLabel: "MITSUBISHI", type: "inverter", price: "61 900 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Серия": "HR Inverter", "Рекомендуемая площадь": "До 25 кв.м.", "Класс энергии": "A++" } },
    { id: 11, title: "Mitsubishi Electric MSZ-HR 12", brand: "mitsubishi", brandLabel: "MITSUBISHI", type: "inverter", price: "68 500 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Обогрев": "до −15°C", "Уровень шума": "21 дБ" } },
    { id: 12, title: "Haier Flexis Plus 09", brand: "haier", brandLabel: "HAIER", type: "inverter", price: "39 800 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Wi-Fi": "Встроенный", "Класс энергии": "A++" } },
    { id: 13, title: "Haier Jade Super Match 12", brand: "haier", brandLabel: "HAIER", type: "inverter", price: "47 600 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Самоочистка": "Есть", "Класс энергии": "A+++" } },
    { id: 14, title: "Gree Pular Inverter 09", brand: "gree", brandLabel: "GREE", type: "inverter", price: "36 500 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Компрессор": "GREE G10", "Класс энергии": "A++" } },
    { id: 15, title: "Gree Lyra On/Off 12", brand: "gree", brandLabel: "GREE", type: "onoff", price: "31 200 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Тип компрессора": "On/Off", "Класс энергии": "A" } },
    { id: 16, title: "Midea Breezeless E 09", brand: "midea", brandLabel: "MIDEA", type: "inverter", price: "42 300 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Wi-Fi": "Встроенный", "Класс энергии": "A+++" } },
    { id: 17, title: "Midea Paramount 12 Inverter", brand: "midea", brandLabel: "MIDEA", type: "inverter", price: "49 900 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Обогрев": "до −25°C", "Уровень шума": "20 дБ" } },
    { id: 18, title: "Hisense Crystal Super DC 09", brand: "hisense", brandLabel: "HISENSE", type: "inverter", price: "37 400 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Wi-Fi": "Опционально", "Класс энергии": "A++" } },
    { id: 19, title: "Hisense Easy Smart 12", brand: "hisense", brandLabel: "HISENSE", type: "inverter", price: "43 800 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 35 кв.м.", "Самоочистка": "Есть", "Класс энергии": "A++" } },
    { id: 20, title: "Ballu Lagoon DC Inverter 09", brand: "ballu", brandLabel: "BALLU", type: "inverter", price: "33 600 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Класс энергии": "A++", "Уровень шума": "23 дБ" } },
    { id: 21, title: "Ballu iGreen Pro On/Off 07", brand: "ballu", brandLabel: "BALLU", type: "onoff", price: "27 900 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 20 кв.м.", "Тип компрессора": "On/Off", "Класс энергии": "A" } },
    { id: 22, title: "Kentatsu Bronte On/Off 09", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", price: "32 400 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Рекомендуемая площадь": "До 25 кв.м.", "Тип компрессора": "On/Off", "Класс энергии": "A+" } }
];

let activeTypeFilter = 'all';
let activeBrandFilter = 'all';

function getFilteredCatalog() {
    return catalogData.filter(item => {
        const typeMatch = activeTypeFilter === 'all' || item.type === activeTypeFilter;
        const brandMatch = activeBrandFilter === 'all' || item.brand === activeBrandFilter;
        return typeMatch && brandMatch;
    });
}

function setActiveFilterButton(buttons, activeBtn) {
    buttons.forEach(btn => {
        btn.classList.remove('text-[#146C8C]', 'font-bold', 'border-b-2', 'border-[#146C8C]');
        btn.classList.add('text-gray-400', 'font-medium');
    });
    activeBtn.classList.remove('text-gray-400', 'font-medium');
    activeBtn.classList.add('text-[#146C8C]', 'font-bold', 'border-b-2', 'border-[#146C8C]');
}

// --- 2. РЕНДЕРИНГ КАТАЛОГА С ФОТОГРАФИЯМИ ---
const catalogGrid = document.getElementById('catalog-grid');
function renderCatalog(items) {
    catalogGrid.innerHTML = '';

    if (!items.length) {
        catalogGrid.innerHTML = '<div class="col-span-full py-16 text-center text-gray-500 font-light">По выбранным фильтрам моделей не найдено. Попробуйте изменить бренд или тип системы.</div>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = `catalog-card p-6 rounded-3xl bg-white border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-[400px] group`;
        
        card.innerHTML = `
            <div class="mb-4">
                <span class="text-[10px] tracking-widest text-gray-400 font-bold uppercase block mb-1">${item.brandLabel}</span>
                <h4 class="text-lg font-bold text-gray-900 leading-tight">${item.title}</h4>
                <span class="inline-block mt-2 px-2.5 py-1 bg-[#146C8C]/10 text-[#146C8C] rounded-full text-[9px] font-bold uppercase tracking-wider">${item.type === 'inverter' ? 'Inverter' : 'On / Off'}</span>
            </div>
            
            <div class="flex-grow flex items-center justify-center relative overflow-hidden mb-4 bg-gray-50 rounded-2xl">
                <img src="${item.image}" alt="${item.title}" class="object-contain w-full h-32 transform group-hover:scale-105 transition-transform duration-500">
            </div>
            
            <div class="mt-auto">
                <div class="text-xl font-extrabold text-gray-900 tracking-tight mb-4">${item.price}</div>
                <button class="w-full text-center border border-gray-300 text-gray-900 text-xs font-bold py-3 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 open-specs-btn" data-id="${item.id}">
                    Подробнее
                </button>
            </div>
        `;
        catalogGrid.appendChild(card);
    });
    initSpecsTriggers();
}
renderCatalog(catalogData);

// Фильтрация по типу и бренду
document.querySelectorAll('.catalog-type-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
        activeTypeFilter = e.currentTarget.getAttribute('data-filter');
        setActiveFilterButton(document.querySelectorAll('.catalog-type-filter'), e.currentTarget);
        renderCatalog(getFilteredCatalog());
    });
});

document.querySelectorAll('.catalog-brand-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
        activeBrandFilter = e.currentTarget.getAttribute('data-brand');
        setActiveFilterButton(document.querySelectorAll('.catalog-brand-filter'), e.currentTarget);
        renderCatalog(getFilteredCatalog());
    });
});

// Боковая панель деталей
const specsDrawer = document.getElementById('specs-drawer');
function initSpecsTriggers() {
    document.querySelectorAll('.open-specs-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = catalogData.find(i => i.id == e.target.getAttribute('data-id'));
            if(item) {
                document.getElementById('drawer-brand').innerText = item.brandLabel;
                document.getElementById('drawer-title').innerText = item.title;
                document.getElementById('drawer-type').innerText = item.type === 'inverter' ? 'Inverter' : 'On / Off';
                document.getElementById('drawer-price').innerText = item.price;
                
                const specsContent = document.getElementById('drawer-specs-content');
                specsContent.innerHTML = '';
                for (const [k, v] of Object.entries(item.specs)) {
                    specsContent.innerHTML += `<div class="flex justify-between border-b border-gray-100 pb-2"><span class="text-gray-500 text-xs">${k}</span><span class="text-gray-900 font-bold text-xs text-right">${v}</span></div>`;
                }
                specsDrawer.classList.remove('translate-x-full');
            }
        });
    });
}
document.getElementById('close-drawer').addEventListener('click', () => specsDrawer.classList.add('translate-x-full'));
document.getElementById('drawer-cta').addEventListener('click', () => specsDrawer.classList.add('translate-x-full'));

// --- 3. ЛОГИКА ОТПРАВКИ ФОРМЫ (TELEGRAM API) ---
const reviewsData = [
    { name: "Игорь В.", text: "Ставили Daikin в двухкомнатную квартиру — приехали точно ко времени, отработали аккуратно, после себя не оставили ни пылинки. Заказали ещё и на дачу.", photo: null, date: "Май 2026" },
    { name: "Марина С.", text: "Обратились по чистке и дозаправке фреоном. Мастер объяснил, что происходит с системой, показал фото до/после фильтров. Работает как новый.", photo: null, date: "Июнь 2026" },
    { name: "Дмитрий К.", text: "Комплекс «под ключ»: подбор, доставка, монтаж — всё за один день и без доплат сверх сметы. Рекомендую всем, кто не хочет разбираться в этом сам.", photo: null, date: "Июль 2026" }
];

function renderReviews(data) {
    const grid = document.getElementById('reviews-grid');
    grid.innerHTML = '';
    data.forEach(r => {
        const card = document.createElement('div');
        card.className = 'p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm flex flex-col';
        card.innerHTML = `
            ${r.photo ? `<img src="${r.photo}" alt="Фото отзыва от ${r.name}" class="w-full h-40 object-cover rounded-2xl mb-5">` : ''}
            <p class="text-sm text-gray-600 font-light leading-relaxed flex-grow">${r.text}</p>
            <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span class="text-sm font-bold text-gray-900">${r.name}</span>
                <span class="text-[10px] text-gray-400 uppercase tracking-wider">${r.date}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}
renderReviews(reviewsData);

const form = document.getElementById('premium-lead-form');
const checkbox = document.getElementById('privacy-check');
const submitBtn = document.getElementById('submit-btn');
const statusDiv = document.getElementById('form-status');

const phoneInput = document.getElementById('lead-phone');

function formatRuPhone(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1);
    digits = digits.slice(0, 10); 
    let formatted = '+7';
    if (digits.length > 0) formatted += ' (' + digits.slice(0, 3);
    if (digits.length >= 3) formatted += ')';
    if (digits.length > 3) formatted += ' ' + digits.slice(3, 6);
    if (digits.length > 6) formatted += '-' + digits.slice(6, 8);
    if (digits.length > 8) formatted += '-' + digits.slice(8, 10);
    return formatted;
}

function getPhoneDigitsCount(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('7') || digits.startsWith('8')) digits = digits.slice(1);
    return digits.length;
}

phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value) phoneInput.value = '+7 ';
});
phoneInput.addEventListener('input', () => {
    phoneInput.value = formatRuPhone(phoneInput.value);
});
phoneInput.addEventListener('keydown', (e) => {
    if ((e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft') && phoneInput.selectionStart <= 2 && phoneInput.selectionEnd <= 2) {
        e.preventDefault();
    }
});

checkbox.addEventListener('change', (e) => {
    submitBtn.disabled = !e.target.checked;
    submitBtn.classList.toggle('opacity-30', !e.target.checked);
    submitBtn.classList.toggle('cursor-not-allowed', !e.target.checked);
    submitBtn.classList.toggle('hover:bg-gray-700', e.target.checked);
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('lead-name').value;
    const phone = document.getElementById('lead-phone').value;

    if (getPhoneDigitsCount(phone) !== 10) {
        statusDiv.innerHTML = '<span class="text-red-600">Введите номер телефона полностью — 10 цифр после +7.</span>';
        statusDiv.classList.remove('hidden');
        setTimeout(() => statusDiv.classList.add('hidden'), 4000);
        return;
    }
    
    const BOT_TOKEN = 'ТВОЙ_ТОКЕН_БОТА'; 
    const CHAT_ID = 'ТВОЙ_CHAT_ID';
    const text = `🔥 Новая заявка с сайта ClimaFlow!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

    submitBtn.innerText = 'Отправка...';
    submitBtn.disabled = true;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text })
    })
    .then(res => {
        if(res.ok) {
            statusDiv.innerHTML = '<span class="text-green-600">Заявка успешно отправлена!</span>';
            form.reset();
            submitBtn.classList.add('opacity-30', 'cursor-not-allowed');
        } else {
            statusDiv.innerHTML = '<span class="text-red-600">Ошибка отправки. Позвоните нам.</span>';
        }
    })
    .catch(err => {
        statusDiv.innerHTML = '<span class="text-red-600">Ошибка сети.</span>';
    })
    .finally(() => {
        statusDiv.classList.remove('hidden');
        submitBtn.innerText = 'Отправить заявку';
        setTimeout(() => statusDiv.classList.add('hidden'), 5000);
    });
});

// --- 4. АНИМАЦИИ GSAP И МОБИЛЬНОЕ МЕНЮ ---
document.addEventListener('DOMContentLoaded', () => {
    // Появление навбара
    gsap.set(".nav-reveal", { visibility: "visible" });
    gsap.from(".nav-reveal", { y: -16, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power2.out" });

    // Появление главного экрана
    gsap.set(".hero-reveal", { visibility: "visible" });
    gsap.from(".hero-reveal", { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 });

    // Wave Color Shift для заголовка
    if (typeof SplitText !== "undefined") {
        const split = new SplitText("#hero-heading", { type: "chars" });
        gsap.from(split.chars, {
            y: 40, 
            color: "#146C8C",
            opacity: 0,
            stagger: { each: 0.04, from: "start" },
            duration: 0.6, 
            ease: "sine.out",
            delay: 0.2
        });
    } else {
        gsap.from("#hero-heading", { y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    }

    gsap.set(".hero-visual", { opacity: 0, x: 40 });
    gsap.to(".hero-visual", { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });

    // Плавающие декоративные пятна
    gsap.to(".hero-orb-1", { y: "+=25", x: "+=15", duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".hero-orb-2", { y: "-=30", x: "-=10", duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });

    // Оживляем иллюстрацию кондиционера
    gsap.to("#ac-power-light", { scale: 1.15, opacity: 0.7, transformOrigin: "50% 50%", duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#ac-power-glow", { scale: 1.5, opacity: 0.25, transformOrigin: "50% 50%", duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#ac-airflow", { strokeDashoffset: -16, duration: 1.4, repeat: -1, ease: "none" });
    gsap.to(".ac-fan-bar", {
        scaleY: 0.55,
        transformOrigin: "50% 100%",
        duration: 0.7,
        ease: "sine.inOut",
        stagger: { each: 0.09, repeat: -1, yoyo: true }
    });
    
    // ИСПРАВЛЕНО: Добавлено force3D: true, увеличена длительность и амплитуда для плавности
    gsap.to(".hero-badge-float", { y: -12, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut", force3D: true });
    gsap.to(".hero-badge-float-2", { y: 12, duration: 3.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5, force3D: true });

    gsap.set(".scroll-anim", { visibility: "visible" });
    gsap.from(".scroll-anim", { scrollTrigger: { trigger: "#about", start: "top 85%" }, y: 40, opacity: 0, duration: 0.8, stagger: 0.1 });
    
    // Fade Up Cards при скролле для услуг
    gsap.utils.toArray(".service-node").forEach((card) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 }, 
            {
                scrollTrigger: { 
                    trigger: card, 
                    start: "top 85%", 
                    once: true 
                },
                duration: 0.6,
                opacity: 1,
                y: 0,
                ease: "power2.out"
            }
        );
    });

    // Появление заголовков
    gsap.set(".reveal-up", { visibility: "visible" });
    document.querySelectorAll('section, footer').forEach(sectionEl => {
        const items = sectionEl.querySelectorAll('.reveal-up');
        if (items.length) {
            gsap.from(items, {
                scrollTrigger: { trigger: sectionEl, start: "top 82%" },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out"
            });
        }
    });

    // Появление карточек каталога
    gsap.set("#catalog-grid > div", { opacity: 0, y: 30 });
    ScrollTrigger.create({
        trigger: "#catalog",
        start: "top 75%",
        once: true,
        onEnter: () => gsap.to("#catalog-grid > div", { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power2.out" })
    });

    // Появление карточек отзывов
    gsap.set("#reviews-grid > div", { opacity: 0, y: 30 });
    ScrollTrigger.create({
        trigger: "#reviews",
        start: "top 75%",
        once: true,
        onEnter: () => gsap.to("#reviews-grid > div", { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" })
    });

    // Карточка формы
    gsap.set("#lead-form-card", { opacity: 0, y: 40, scale: 0.97 });
    gsap.to("#lead-form-card", {
        scrollTrigger: { trigger: "#form-section", start: "top 75%", once: true },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out"
    });

    // Magnetic/morphing button on hover с эффектом свечения
    document.querySelectorAll('.cta-pill').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                duration: 0.3, 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(20, 108, 140, 0.5)",
                ease: "power2.out"
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.3, 
                scale: 1, 
                boxShadow: "none",
                ease: "power2.out"
            });
        });
    });

    // Тень навбара при прокрутке
    const navbarEl = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbarEl.classList.toggle('shadow-md', window.scrollY > 40);
    });

    // Мобильное меню
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.style.transform = isMenuOpen ? 'translateY(0)' : 'translateY(-100%)';
    }
    mobileBtn.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMenu));

    // Модалка политики
    const privacyModal = document.getElementById('privacy-modal');
    const togglePrivacy = (show) => {
        privacyModal.classList.toggle('pointer-events-none', !show);
        privacyModal.style.opacity = show ? '1' : '0';
    };
    document.getElementById('open-privacy-link').addEventListener('click', (e) => { e.preventDefault(); togglePrivacy(true); });
    document.getElementById('open-privacy-footer').addEventListener('click', () => togglePrivacy(true));
    document.getElementById('close-privacy').addEventListener('click', () => togglePrivacy(false));
    document.getElementById('agree-privacy-btn').addEventListener('click', () => togglePrivacy(false));
});