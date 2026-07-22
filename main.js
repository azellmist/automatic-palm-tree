gsap.registerPlugin(ScrollTrigger);

// Данные
const catalogData = [
    { id: 1, title: "Daikin Sensira FTXF-D 09", brandLabel: "DAIKIN", type: "inverter", price: "52 800 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Площадь": "До 25 кв.м.", "Шум": "19 дБ" } },
    { id: 2, title: "Haier Flexis Plus 09", brandLabel: "HAIER", type: "inverter", price: "39 800 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Площадь": "До 25 кв.м.", "Wi-Fi": "Встроенный" } },
    { id: 3, title: "Mitsubishi MSZ-HR 09", brandLabel: "MITSUBISHI", type: "inverter", price: "61 900 ₽", image: "https://via.placeholder.com/300x150/FAFAFA/A0A0A0?text=PHOTO", specs: { "Серия": "HR Inverter", "Класс": "A++" } }
];

// Рендер каталога
const catalogGrid = document.getElementById('catalog-grid');
catalogData.forEach(item => {
    catalogGrid.innerHTML += `
        <div class="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col h-[400px]">
            <div class="mb-4">
                <span class="text-[10px] tracking-widest text-gray-400 font-bold uppercase">${item.brandLabel}</span>
                <h4 class="text-lg font-bold text-gray-900 leading-tight">${item.title}</h4>
            </div>
            <div class="flex-grow flex items-center justify-center bg-white rounded-2xl mb-4">
                <img src="${item.image}" alt="${item.title}" class="h-32 object-contain">
            </div>
            <div class="mt-auto">
                <div class="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">${item.price}</div>
                <button class="w-full text-center border border-gray-300 text-gray-900 text-xs font-bold py-3 rounded-xl open-specs-btn cta-pill bg-white" data-id="${item.id}">Подробнее</button>
            </div>
        </div>
    `;
});

// Отзывы
const reviewsData = [
    { name: "Игорь В.", text: "Приехали ко времени, отработали аккуратно, ни пылинки.", date: "Май 2026" },
    { name: "Марина С.", text: "Работает как новый. Мастер все подробно объяснил.", date: "Июнь 2026" }
];
const reviewsGrid = document.getElementById('reviews-grid');
reviewsData.forEach(r => {
    reviewsGrid.innerHTML += `
        <div class="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col">
            <p class="text-sm text-gray-600 font-light flex-grow leading-relaxed">${r.text}</p>
            <div class="flex justify-between mt-6 pt-4 border-t border-gray-100">
                <span class="text-sm font-bold text-gray-900">${r.name}</span>
                <span class="text-[10px] text-gray-400 uppercase tracking-wider">${r.date}</span>
            </div>
        </div>
    `;
});

// --- APPLE DESIGN: Инициализация пружинных панелей ---
const specsDrawer = document.getElementById('specs-drawer');
const drawerBackdrop = document.getElementById('drawer-backdrop');
gsap.set(specsDrawer, { xPercent: 100 }); // Уводим за экран

document.querySelectorAll('.open-specs-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const item = catalogData.find(i => i.id == e.target.getAttribute('data-id'));
        if(item) {
            document.getElementById('drawer-brand').innerText = item.brandLabel;
            document.getElementById('drawer-title').innerText = item.title;
            document.getElementById('drawer-price').innerText = item.price;
            
            drawerBackdrop.classList.remove('pointer-events-none');
            // Critically damped spring (power4.out, 0.4s) - непрерываемая и физичная
            gsap.to(drawerBackdrop, { opacity: 1, duration: 0.4, ease: "none", overwrite: true });
            gsap.to(specsDrawer, { xPercent: 0, duration: 0.4, ease: "power4.out", overwrite: true });
        }
    });
});

const closeDrawerAction = () => {
    drawerBackdrop.classList.add('pointer-events-none');
    gsap.to(drawerBackdrop, { opacity: 0, duration: 0.4, ease: "none", overwrite: true });
    gsap.to(specsDrawer, { xPercent: 100, duration: 0.4, ease: "power4.out", overwrite: true });
};
document.getElementById('close-drawer').addEventListener('click', closeDrawerAction);
drawerBackdrop.addEventListener('click', closeDrawerAction);
document.getElementById('drawer-cta').addEventListener('click', () => {
    closeDrawerAction();
    document.getElementById('form-section').scrollIntoView();
});

// Мобильное меню (Прерываемая пружина)
const mobileMenu = document.getElementById('mobile-menu');
gsap.set(mobileMenu, { autoAlpha: 0, scale: 1.05 });
let isMenuOpen = false;
window.toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        gsap.to(mobileMenu, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "power4.out", overwrite: true });
    } else {
        gsap.to(mobileMenu, { autoAlpha: 0, scale: 1.05, duration: 0.3, ease: "power4.out", overwrite: true });
    }
};
document.getElementById('mobile-menu-btn').addEventListener('click', window.toggleMenu);

// Модалка политики (Materialize effect)
const privacyModal = document.getElementById('privacy-modal');
const privacyBg = privacyModal.querySelector('.privacy-bg');
const privacyContent = privacyModal.querySelector('.privacy-content');

gsap.set([privacyBg, privacyContent], { opacity: 0 });

const togglePrivacy = (show) => {
    if (show) {
        privacyModal.classList.remove('pointer-events-none');
        gsap.to(privacyBg, { opacity: 1, duration: 0.4, ease: "none", overwrite: true });
        // Materialize: Scale and fade in together
        gsap.fromTo(privacyContent, 
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "power4.out", overwrite: true }
        );
    } else {
        privacyModal.classList.add('pointer-events-none');
        gsap.to(privacyBg, { opacity: 0, duration: 0.3, ease: "none", overwrite: true });
        gsap.to(privacyContent, { scale: 0.95, opacity: 0, duration: 0.3, ease: "power4.out", overwrite: true });
    }
};
document.getElementById('open-privacy-link').addEventListener('click', (e) => { e.preventDefault(); togglePrivacy(true); });
document.getElementById('open-privacy-footer').addEventListener('click', () => togglePrivacy(true));
document.getElementById('close-privacy').addEventListener('click', () => togglePrivacy(false));
document.getElementById('agree-privacy-btn').addEventListener('click', () => togglePrivacy(false));


// --- GSAP Scroll Анимации ---
document.addEventListener('DOMContentLoaded', () => {
    gsap.set(".nav-reveal", { visibility: "visible" });
    gsap.from(".nav-reveal", { y: -16, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" });

    gsap.set(".hero-reveal", { visibility: "visible" });
    gsap.from(".hero-reveal", { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.1 });
    
    // Wave Shift для заголовка
    if (typeof SplitText !== "undefined") {
        const split = new SplitText("#hero-heading", { type: "chars" });
        gsap.from(split.chars, {
            y: 30, color: "#146C8C", opacity: 0,
            stagger: { each: 0.03, from: "start" }, duration: 0.6, ease: "power3.out", delay: 0.2
        });
    } else {
        gsap.from("#hero-heading", { y: 40, opacity: 0, duration: 1, ease: "power4.out", delay: 0.2 });
    }

    gsap.set(".hero-visual", { opacity: 0, x: 40 });
    gsap.to(".hero-visual", { opacity: 1, x: 0, duration: 1.2, ease: "power4.out", delay: 0.4 });

    gsap.to(".hero-orb-1", { y: "+=25", x: "+=15", duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".hero-orb-2", { y: "-=30", x: "-=10", duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
    
    gsap.to("#ac-power-light", { scale: 1.15, opacity: 0.7, transformOrigin: "50% 50%", duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to("#ac-airflow", { strokeDashoffset: -16, duration: 1.4, repeat: -1, ease: "none" });

    // Fade Up Cards
    gsap.utils.toArray(".service-node, #catalog-grid > div, #reviews-grid > div").forEach((card) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 }, 
            { scrollTrigger: { trigger: card, start: "top 85%", once: true }, opacity: 1, y: 0, duration: 0.6, ease: "power4.out" }
        );
    });

    gsap.set(".reveal-up", { visibility: "visible" });
    document.querySelectorAll('section, footer').forEach(sectionEl => {
        const items = sectionEl.querySelectorAll('.reveal-up');
        if (items.length) {
            gsap.from(items, { scrollTrigger: { trigger: sectionEl, start: "top 85%" }, y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" });
        }
    });

    gsap.set("#lead-form-card", { opacity: 0, y: 40, scale: 0.97 });
    gsap.to("#lead-form-card", { scrollTrigger: { trigger: "#form-section", start: "top 80%", once: true }, opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power4.out" });

    // --- APPLE DESIGN: Magnetic buttons + Мгновенный отклик на нажатие ---
    document.querySelectorAll('.cta-pill').forEach(btn => {
        // Легкий визуальный ховер
        btn.addEventListener('pointerenter', () => {
            gsap.to(btn, { duration: 0.3, scale: 1.02, boxShadow: "0 4px 20px rgba(20, 108, 140, 0.2)", ease: "power3.out", overwrite: "auto" });
        });
        btn.addEventListener('pointerleave', () => {
            gsap.to(btn, { duration: 0.4, scale: 1, boxShadow: "none", ease: "power4.out", overwrite: "auto" });
        });
        // Мгновенный физический отклик на нажатие с перехватом курсора
        btn.addEventListener('pointerdown', (e) => {
            btn.setPointerCapture(e.pointerId);
            gsap.to(btn, { duration: 0.1, scale: 0.96, ease: "none", overwrite: "auto" });
        });
        // Возврат пружиной
        btn.addEventListener('pointerup', (e) => {
            btn.releasePointerCapture(e.pointerId);
            gsap.to(btn, { duration: 0.5, scale: 1.02, ease: "back.out(2)", overwrite: "auto" });
        });
    });

    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('shadow-sm', window.scrollY > 40);
        document.getElementById('navbar').classList.toggle('bg-white/90', window.scrollY > 40);
    });
});

// Логика чекбокса и отправки формы
const submitBtn = document.getElementById('submit-btn');
document.getElementById('privacy-check').addEventListener('change', (e) => {
    submitBtn.disabled = !e.target.checked;
    submitBtn.classList.toggle('opacity-40', !e.target.checked);
    submitBtn.classList.toggle('cursor-not-allowed', !e.target.checked);
});