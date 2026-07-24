// Динамический импорт Vercel Analytics
import('https://esm.sh/@vercel/analytics').then(({ inject }) => inject()).catch(e => console.warn('Analytics blocked:', e));
import('https://esm.sh/@vercel/speed-insights').then(({ injectSpeedInsights }) => injectSpeedInsights()).catch(e => console.warn('Insights blocked:', e));

gsap.registerPlugin(ScrollTrigger);

// --- 1. КАТАЛОГ ДАННЫХ ИЗ EXCEL ---
const imgPlaceholder = "https://dummyimage.com/300x150/f9fafb/6b7280.png&text=PHOTO";

const catalogData = [
    { id: 1, title: "KiTANO KR-Toha-07", brand: "kitano", brandLabel: "KITANO", type: "onoff", priceCategory: "Бюджетный", price: "18 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.32 кВт", "Обогрев": "2.43 кВт" } },
    { id: 2, title: "KiTANO KR-Toha-09", brand: "kitano", brandLabel: "KITANO", type: "onoff", priceCategory: "Бюджетный", price: "20 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.67 кВт", "Обогрев": "2.75 кВт" } },
    { id: 3, title: "KiTANO KR-Toha-12", brand: "kitano", brandLabel: "KITANO", type: "onoff", priceCategory: "Бюджетный", price: "27 850 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.35 кВт", "Обогрев": "3.61 кВт" } },
    { id: 4, title: "KiTANO KR-Toha-18", brand: "kitano", brandLabel: "KITANO", type: "onoff", priceCategory: "Средний", price: "46 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.16 кВт", "Обогрев": "5.28 кВт" } },
    { id: 5, title: "KiTANO KR-Toha-24", brand: "kitano", brandLabel: "KITANO", type: "onoff", priceCategory: "Премиум", price: "58 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "6.56 кВт", "Обогрев": "6.87 кВт" } },
    { id: 6, title: "Roland FU-07 HSS010/N6-IN", brand: "roland", brandLabel: "ROLAND", type: "onoff", priceCategory: "Бюджетный", price: "20 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.37 кВт", "Обогрев": "2.48 кВт" } },
    { id: 7, title: "Roland FU-09 HSS010/N6-IN", brand: "roland", brandLabel: "ROLAND", type: "onoff", priceCategory: "Бюджетный", price: "22 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.65 кВт", "Обогрев": "2.7 кВт" } },
    { id: 8, title: "Roland FU-12 HSS010/N6-IN", brand: "roland", brandLabel: "ROLAND", type: "onoff", priceCategory: "Бюджетный", price: "29 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.52 кВт", "Обогрев": "3.66 кВт" } },
    { id: 9, title: "axioma ASB/ASX 07 F1", brand: "axioma", brandLabel: "AXIOMA", type: "onoff", priceCategory: "Бюджетный", price: "19 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.1 кВт", "Обогрев": "2.1 кВт" } },
    { id: 10, title: "axioma ASB/ASX 09 F1", brand: "axioma", brandLabel: "AXIOMA", type: "onoff", priceCategory: "Бюджетный", price: "22 150 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.5 кВт", "Обогрев": "2.5 кВт" } },
    { id: 11, title: "axioma ASB/ASX 12 F1", brand: "axioma", brandLabel: "AXIOMA", type: "onoff", priceCategory: "Бюджетный", price: "29 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.4 кВт", "Обогрев": "3.55 кВт" } },
    { id: 12, title: "JAX YORK ACE 20 HE NEO", brand: "jax", brandLabel: "JAX", type: "onoff", priceCategory: "Средний", price: "47 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.28 кВт", "Обогрев": "5.57 кВт" } },
    { id: 13, title: "°D Alpine ALP 07 AVQ1R", brand: "daichi", brandLabel: "DAICHI", type: "onoff", priceCategory: "Бюджетный", price: "20 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.34 кВт", "Обогрев": "2.34 кВт" } },
    { id: 14, title: "°D Alpine ALP 09 AVQ1R", brand: "daichi", brandLabel: "DAICHI", type: "onoff", priceCategory: "Бюджетный", price: "22 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.64 кВт", "Обогрев": "2.78 кВт" } },
    { id: 15, title: "°D Alpine ALP 12 AVQ1R", brand: "daichi", brandLabel: "DAICHI", type: "onoff", priceCategory: "Бюджетный", price: "29 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.52 кВт", "Обогрев": "3.66 кВт" } },
    { id: 16, title: "°D Alpine ALP 18 AVQ1R", brand: "daichi", brandLabel: "DAICHI", type: "onoff", priceCategory: "Средний", price: "47 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.28 кВт", "Обогрев": "5.57 кВт" } },
    { id: 17, title: "°D Alpine ALP 24 AVQ1R", brand: "daichi", brandLabel: "DAICHI", type: "onoff", priceCategory: "Премиум", price: "61 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "7.03 кВт", "Обогрев": "7.33 кВт" } },
    { id: 18, title: "Persona MSAG4 09 HRN8", brand: "midea", brandLabel: "MIDEA", type: "onoff", priceCategory: "Средний", price: "38 800 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.64 кВт", "Обогрев": "2.78 кВт" } },
    { id: 19, title: "Persona MSAG4 12 HRN8", brand: "midea", brandLabel: "MIDEA", type: "onoff", priceCategory: "Средний", price: "49 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.52 кВт", "Обогрев": "3.66 кВт" } },
    { id: 20, title: "EK Futura EKSF 50 HN/EKOF", brand: "ek", brandLabel: "EK", type: "onoff", priceCategory: "Премиум", price: "57 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.8 кВт", "Обогрев": "5.16 кВт" } },
    { id: 21, title: "Kanami410 KSGA 53 HFAN1/KSRA", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Средний", price: "47 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.3 кВт", "Обогрев": "5.3 кВт" } },
    { id: 22, title: "Kanami410 KSGA 70 HFAN1/KSRA", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Премиум", price: "61 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "7 кВт", "Обогрев": "7.3 кВт" } },
    { id: 23, title: "Kanami32 KSGA 35 HFRN1/KSRA", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Бюджетный", price: "29 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.52 кВт", "Обогрев": "3.66 кВт" } },
    { id: 24, title: "MARSA FORTUNA MRK-07 MGF", brand: "marsa", brandLabel: "MARSA", type: "onoff", priceCategory: "Бюджетный", price: "23 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.25 кВт", "Обогрев": "2.3 кВт" } },
    { id: 25, title: "MARSA FORTUNA MRK-09 MGF", brand: "marsa", brandLabel: "MARSA", type: "onoff", priceCategory: "Бюджетный", price: "26 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.55 кВт", "Обогрев": "2.65 кВт" } },
    { id: 26, title: "MARSA FORTUNA MRK-12 MGF", brand: "marsa", brandLabel: "MARSA", type: "onoff", priceCategory: "Средний", price: "36 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.25 кВт", "Обогрев": "3.4 кВт" } },
    { id: 27, title: "MARSA FORTUNA MRK-18 MGF", brand: "marsa", brandLabel: "MARSA", type: "onoff", priceCategory: "Премиум", price: "62 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.8 кВт", "Обогрев": "5.16 кВт" } },
    { id: 28, title: "MARSA FORTUNA MRK-24 MGF", brand: "marsa", brandLabel: "MARSA", type: "onoff", priceCategory: "Премиум", price: "71 750 ₽", image: imgPlaceholder, specs: { "Охлаждение": "6.16 кВт", "Обогрев": "6.7 кВт" } },
    { id: 29, title: "MARSA FORTUNA MRK-36 MGF", brand: "marsa", brandLabel: "MARSA", type: "onoff", priceCategory: "Премиум", price: "112 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "9.5 кВт", "Обогрев": "9.8 кВт" } },
    { id: 30, title: "BORA GWH 07 AAAXA/K3NNA2A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Средний", price: "33 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.25 кВт", "Обогрев": "2.35 кВт" } },
    { id: 31, title: "BORA GWH 09 AAAXA/K3NNA2A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Средний", price: "36 300 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.55 кВт", "Обогрев": "2.65 кВт" } },
    { id: 32, title: "BORA GWH 12 AABXB/K3NNA2A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Средний", price: "49 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.25 кВт", "Обогрев": "3.4 кВт" } },
    { id: 33, title: "BORA GWH 18 AACXD/K3NNA2A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Премиум", price: "86 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.8 кВт", "Обогрев": "5 кВт" } },
    { id: 34, title: "BORA GWH 24 AADXE/K3NNA2A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Премиум", price: "113 800 ₽", image: imgPlaceholder, specs: { "Охлаждение": "6.16 кВт", "Обогрев": "6.2 кВт" } },
    { id: 35, title: "PULAR GWH 07 AGAXA/K3NNA1A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Средний", price: "34 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.35 кВт", "Обогрев": "2.45 кВт" } },
    { id: 36, title: "PULAR GWH 09 AGAXA/K3NNA1A", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Средний", price: "38 100 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.55 кВт", "Обогрев": "2.65 кВт" } },
    { id: 37, title: "PULAR GWH 12 AGBXB/K3NNA1B", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Премиум", price: "50 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.25 кВт", "Обогрев": "3.4 кВт" } },
    { id: 38, title: "PULAR GWH 18 AGCXD/K3NNA1B", brand: "gree", brandLabel: "GREE", type: "onoff", priceCategory: "Премиум", price: "87 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.8 кВт", "Обогрев": "5.158 кВт" } },
    { id: 39, title: "Roland FIU-09 HSS010/N5-IN Inv.", brand: "roland", brandLabel: "ROLAND", type: "inverter", priceCategory: "Бюджетный", price: "28 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.8 кВт", "Обогрев": "2.96 кВт" } },
    { id: 40, title: "Roland FIU-12 HSS010/N5-IN Inv.", brand: "roland", brandLabel: "ROLAND", type: "inverter", priceCategory: "Средний", price: "34 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.55 кВт", "Обогрев": "3.66 кВт" } },
    { id: 41, title: "KiTANO KRD-Walli-09 inverter", brand: "kitano", brandLabel: "KITANO", type: "inverter", priceCategory: "Средний", price: "36 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.64 кВт", "Обогрев": "2.78 кВт" } },
    { id: 42, title: "KiTANO KRD-Walli-12 inverter", brand: "kitano", brandLabel: "KITANO", type: "inverter", priceCategory: "Средний", price: "38 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.52 кВт", "Обогрев": "3.66 кВт" } },
    { id: 43, title: "°D Alpine ALP 25 AVQS1R Inv.", brand: "daichi", brandLabel: "DAICHI", type: "inverter", priceCategory: "Средний", price: "31 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.64 кВт", "Обогрев": "2.93 кВт" } },
    { id: 44, title: "°D Alpine ALP 35 AVQS1R Inv.", brand: "daichi", brandLabel: "DAICHI", type: "inverter", priceCategory: "Средний", price: "36 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.52 кВт", "Обогрев": "3.66 кВт" } },
    { id: 45, title: "°D Alpine ALP 50 AVQS1R Inv.", brand: "daichi", brandLabel: "DAICHI", type: "inverter", priceCategory: "Премиум", price: "59 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.28 кВт", "Обогрев": "5.57 кВт" } },
    { id: 46, title: "°D Alpine ALP 70 AVQS1R Inv.", brand: "daichi", brandLabel: "DAICHI", type: "inverter", priceCategory: "Премиум", price: "78 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "7.03 кВт", "Обогрев": "7.33 кВт" } },
    { id: 47, title: "Persona MSAG4W  09  N8C2S", brand: "midea", brandLabel: "MIDEA", type: "inverter", priceCategory: "Премиум", price: "56 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.64 кВт", "Обогрев": "2.93 кВт" } },
    { id: 48, title: "YUKI KSGYK 26 HZRN1 inverter", brand: "kentatsu", brandLabel: "KENTATSU", type: "inverter", priceCategory: "Средний", price: "30 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.64 кВт", "Обогрев": "2.93 кВт" } },
    { id: 49, title: "Jax Murray ACY-12HE inverter", brand: "jax", brandLabel: "JAX", type: "inverter", priceCategory: "Средний", price: "44 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.2 кВт", "Обогрев": "3.4 кВт" } },
    { id: 50, title: "Jax Murray ACY-18HE inverter", brand: "jax", brandLabel: "JAX", type: "inverter", priceCategory: "Премиум", price: "62 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.6 кВт", "Обогрев": "5.2 кВт" } },
    { id: 51, title: "°D O2 25 AVQS1R1/FVS1R1 inverter", brand: "daichi", brandLabel: "DAICHI", type: "inverter", priceCategory: "Средний", price: "43 750 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.65 кВт", "Обогрев": "2.85 кВт" } },
    { id: 52, title: "ICE 25 AVQS1R/FVS1R inverter", brand: "daichi", brandLabel: "DAICHI", type: "inverter", priceCategory: "Средний", price: "42 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.65 кВт", "Обогрев": "2.85 кВт" } },
    { id: 53, title: "LG  EVO MAX  DC 12 RH Inverter", brand: "lg", brandLabel: "LG", type: "inverter", priceCategory: "Премиум", price: "71 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "4 кВт" } },
    { id: 54, title: "BORA Inv. 09 AAAXA/K6DNA2C", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Средний", price: "47 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.65 кВт", "Обогрев": "2.85 кВт" } },
    { id: 55, title: "BORA Inv. 12 AABXB/K6DNA2C", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "53 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "3.5 кВт" } },
    { id: 56, title: "BORA Inv. 18 AAD / K6DNA2E", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "92 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.6 кВт", "Обогрев": "5.2 кВт" } },
    { id: 57, title: "BORA Inv. 24 AADXE/ K6DNA2A", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "118 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "6.155 кВт", "Обогрев": "6.2 кВт" } },
    { id: 58, title: "PULAR Inv. 09 AGAXA/K6DNA4C", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Средний", price: "47 700 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.65 кВт", "Обогрев": "2.85 кВт" } },
    { id: 59, title: "PULAR Inv. 12 AGBXB/K6DNA4C", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "54 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "3.5 кВт" } },
    { id: 60, title: "PULAR Inv. 18 AGD/K6DNA4D", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "94 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "4.6 кВт", "Обогрев": "5.2 кВт" } },
    { id: 61, title: "PULAR Inv. 24 AGDXE/K6DNA4C", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "124 500 ₽", image: imgPlaceholder, specs: { "Охлаждение": "6.15 кВт", "Обогрев": "6.2 кВт" } },
    { id: 62, title: "PULAR Arctic Inv. 09 AGCXB/K6DNA4F", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "66 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 63, title: "PULAR Arctic Inv. 12 AGC    /K6DNA4F", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "69 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "3.8 кВт" } },
    { id: 64, title: "LYRA White 09 ACС/K6DNA1F inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "64 300 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 65, title: "LYRA White 12 ACС/K6DNA1F inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "66 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.51 кВт", "Обогрев": "3.81 кВт" } },
    { id: 66, title: "LYRA White 18 ACD/K6DNA1I inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "103 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.2 кВт", "Обогрев": "5.6 кВт" } },
    { id: 67, title: "LYRA White 24 ACE/K6DNA1I inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "135 800 ₽", image: imgPlaceholder, specs: { "Охлаждение": "7.1 кВт", "Обогрев": "7.8 кВт" } },
    { id: 68, title: "LYRA champagne 09 ACС/K6DNA1F inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "66 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 69, title: "LYRA champagne 12 ACС/K6DNA1F inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "69 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.51 кВт", "Обогрев": "3.81 кВт" } },
    { id: 70, title: "LYRA champagne 18 ACD/K6DNA1I inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "107 600 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.2 кВт", "Обогрев": "5.6 кВт" } },
    { id: 71, title: "LYRA Black 09 ACС/K6DNA1F inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "66 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 72, title: "LYRA Black 12 ACС/K6DNA1F inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "69 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.51 кВт", "Обогрев": "3.81 кВт" } },
    { id: 73, title: "LYRA Black 18 ACD/K6DNA1I inverter", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "107 600 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.2 кВт", "Обогрев": "5.6 кВт" } },
    { id: 74, title: "Airy White 09 AVCXB-K6DNA1B inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "73 950 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 75, title: "Airy White 12 AVCXD-K6DNA1A inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "79 200 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "3.81 кВт" } },
    { id: 76, title: "Airy White 18 AVCXD-K6DNA1A inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "115 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.3 кВт", "Обогрев": "5.6 кВт" } },
    { id: 77, title: "Airy White 24 AVEXF-K6DNA1A inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "142 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "7.1 кВт", "Обогрев": "7.8 кВт" } },
    { id: 78, title: "Airychampagne09AVCXB-K6DNA1B inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "77 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 79, title: "Airychampagne12AVCXD-K6DNA1A inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "82 600 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "3.81 кВт" } },
    { id: 80, title: "Airychampagne18AVCXD-K6DNA1B inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "118 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.3 кВт", "Обогрев": "5.6 кВт" } },
    { id: 81, title: "Airy Black 09 AVCXB-K6DNA1B inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "77 400 ₽", image: imgPlaceholder, specs: { "Охлаждение": "2.7 кВт", "Обогрев": "3 кВт" } },
    { id: 82, title: "Airy Black 12 AVCXD-K6DNA1A inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "82 600 ₽", image: imgPlaceholder, specs: { "Охлаждение": "3.5 кВт", "Обогрев": "3.81 кВт" } },
    { id: 83, title: "Airy Black 18 AVDXE-K6DNA1A inv.", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "118 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "5.3 кВт", "Обогрев": "5.6 кВт" } },
    { id: 84, title: "Kentatsu (36) напольно-потолочный KSHF105HFAN3/KSUR105HFAN3L", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Премиум", price: "146 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "10.55 кВт", "Обогрев": "10.6 кВт" } },
    { id: 85, title: "Kentatsu (48) напольно-потолочный KSHF140HFAN3/KSUT140HFAN3L", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Премиум", price: "167 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "14.07 кВт", "Обогрев": "16.12 кВт" } },
    { id: 86, title: "Kentatsu (60) напольно-потолочный KSHF176HFAN3/KSUT176HFAN3L", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Премиум", price: "188 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "16.12 кВт", "Обогрев": "17.58 кВт" } },
    { id: 87, title: "Kentatsu (48) кассета KSVT140HFAN3R/KSUT140HFAN3L/KPU95-DR", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Премиум", price: "167 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "14.07 кВт", "Обогрев": "15.24 кВт" } },
    { id: 88, title: "Kentatsu (60) кассета KSVT176HFAN3R/KSUT176HFAN3L/KPU95-DR", brand: "kentatsu", brandLabel: "KENTATSU", type: "onoff", priceCategory: "Премиум", price: "195 900 ₽", image: imgPlaceholder, specs: { "Охлаждение": "16.12 кВт", "Обогрев": "17.88 кВт" } },
    { id: 89, title: "GREE (36) U-Match Inverter RU - GUD100ZD1/B-S(220)", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "168 800 ₽", image: imgPlaceholder, specs: { "Охлаждение": "10 кВт", "Обогрев": "11 кВт" } },
    { id: 90, title: "GREE (48) U-Match Inverter RU - GUD140ZD1/B-S(380)", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "269 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "14 кВт", "Обогрев": "16 кВт" } },
    { id: 91, title: "GREE (60) U-Match Inverter RU - GUD160ZD1/B-S(380)", brand: "gree", brandLabel: "GREE", type: "inverter", priceCategory: "Премиум", price: "284 000 ₽", image: imgPlaceholder, specs: { "Охлаждение": "16 кВт", "Обогрев": "18 кВт" } }
];

let activeTypeFilter = 'all';
let activeBrandFilter = 'all';
let activePriceFilter = 'all';

function getFilteredCatalog() {
    return catalogData.filter(item => {
        const typeMatch = activeTypeFilter === 'all' || item.type === activeTypeFilter;
        const brandMatch = activeBrandFilter === 'all' || item.brand === activeBrandFilter;
        const priceMatch = activePriceFilter === 'all' || item.priceCategory === activePriceFilter;
        return typeMatch && brandMatch && priceMatch;
    });
}

function setActiveFilterButton(buttons, activeBtn) {
    buttons.forEach(btn => {
        btn.classList.remove('text-[#146C8C]', 'font-bold', 'border-b-2', 'border-[#146C8C]');
        btn.classList.add('text-gray-600', 'font-medium');
    });
    activeBtn.classList.remove('text-gray-600', 'font-medium');
    activeBtn.classList.add('text-[#146C8C]', 'font-bold', 'border-b-2', 'border-[#146C8C]');
}

const catalogGrid = document.getElementById('catalog-grid');
function renderCatalog(items) {
    catalogGrid.innerHTML = '';

    if (!items.length) {
        catalogGrid.innerHTML = '<div class="col-span-full py-16 text-center text-gray-600 font-light">По выбранным фильтрам моделей не найдено. Попробуйте изменить бренд или тип системы.</div>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = `catalog-card p-6 rounded-3xl bg-white border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-[400px] group`;
        
        card.innerHTML = `
            <div class="mb-4">
                <span class="text-[10px] tracking-widest text-gray-500 font-bold uppercase block mb-1">${item.brandLabel}</span>
                <h3 class="text-lg font-bold text-gray-900 leading-tight">${item.title}</h3>
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

document.querySelectorAll('.catalog-price-filter').forEach(btn => {
    btn.addEventListener('click', (e) => {
        activePriceFilter = e.currentTarget.getAttribute('data-price');
        setActiveFilterButton(document.querySelectorAll('.catalog-price-filter'), e.currentTarget);
        renderCatalog(getFilteredCatalog());
    });
});

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
                    specsContent.innerHTML += `<div class="flex justify-between border-b border-gray-100 pb-2"><span class="text-gray-600 text-xs">${k}</span><span class="text-gray-900 font-bold text-xs text-right">${v}</span></div>`;
                }
                specsDrawer.classList.remove('translate-x-full');
            }
        });
    });
}
document.getElementById('close-drawer').addEventListener('click', () => specsDrawer.classList.add('translate-x-full'));
document.getElementById('drawer-cta').addEventListener('click', () => specsDrawer.classList.add('translate-x-full'));

// --- 3. ЛОГИКА ОТЗЫВОВ И ФОРМЫ ---
// 10 разнообразных отзывов. 
// mediaType может быть: null (без фото), 'image' (фото), 'video' (видео).
// Когда появятся реальные фото, просто замени null на 'image', а в mediaUrl вставь путь, например 'review1.jpg'
const reviewsData = [
    { name: "Игорь В.", text: "Ставили Daikin в двухкомнатную квартиру — приехали точно ко времени, отработали аккуратно, после себя не оставили ни пылинки. Заказали ещё и на дачу.", mediaType: null, mediaUrl: "", date: "Май 2026" },
    { name: "Марина С.", text: "Обратились по чистке и дозаправке фреоном. Мастер объяснил, что происходит с системой, показал фото до/после фильтров. Работает как новый.", mediaType: null, mediaUrl: "", date: "Июнь 2026" },
    { name: "Дмитрий К.", text: "Комплекс «под ключ»: подбор, доставка, монтаж — всё за один день и без доплат сверх сметы. Рекомендую всем, кто не хочет разбираться в этом сам.", mediaType: null, mediaUrl: "", date: "Июль 2026" },
    { name: "Елена А.", text: "Долго сомневалась между инвертором и обычным. Ребята посоветовали отличный вариант от Gree по бюджету, работает бесшумно, спать совершенно не мешает.", mediaType: null, mediaUrl: "", date: "Апрель 2026" },
    { name: "Антон П.", text: "Монтаж на стадии ремонта прошел идеально. Штробы ровные, трассы уложили аккуратно. После чистовой отделки приехали и повесили блоки за час.", mediaType: null, mediaUrl: "", date: "Март 2026" },
    { name: "Светлана Ю.", text: "Сломался старый кондиционер в самую жару. Позвонила вечером, утром уже приехал мастер. Диагностика заняла 20 минут, запчасти были с собой. Спасли!", mediaType: null, mediaUrl: "", date: "Июль 2026" },
    { name: "Виктор М.", text: "Отличный сервис. Не просто продали коробку, а подобрали систему под нестандартную планировку студии. Продувает все зоны равномерно.", mediaType: null, mediaUrl: "", date: "Февраль 2026" },
    { name: "Ольга Н.", text: "Очень вежливые мастера. Работали в бахилах, мусор сразу убирали в пылесос. Установка мульти-сплита заняла полдня, качество на высоте.", mediaType: null, mediaUrl: "", date: "Январь 2026" },
    { name: "Сергей Д.", text: "Брал Daichi для офиса. Приятно удивила честная гарантия — через месяц был мелкий сбой в пульте, приехали и заменили по гарантии без лишних вопросов.", mediaType: null, mediaUrl: "", date: "Июнь 2026" },
    { name: "Анна В.", text: "Искала надежную фирму для родителей. Сделали скидку, всё подробно объяснили пожилым людям как пользоваться пультом. Родители довольны.", mediaType: null, mediaUrl: "", date: "Май 2026" }
];

function renderReviews() {
    const track = document.getElementById('reviews-track');
    track.innerHTML = '';
    
    reviewsData.forEach(r => {
        const card = document.createElement('div');
        // Карточка занимает 100% на мобилках, 50% на планшетах, 33.3% на ПК (с учетом отступов)
        card.className = 'review-card flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm flex flex-col cursor-grab active:cursor-grabbing';
        
        let mediaHtml = '';
        if (r.mediaType === 'image') {
            mediaHtml = `<div class="w-full h-48 rounded-2xl mb-5 bg-gray-200 overflow-hidden relative group"><img src="${r.mediaUrl}" alt="Фото отзыва" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"></div>`;
        } else if (r.mediaType === 'video') {
            mediaHtml = `<div class="w-full h-48 rounded-2xl mb-5 bg-gray-200 overflow-hidden relative"><video src="${r.mediaUrl}" controls class="w-full h-full object-cover"></video></div>`;
        }
        // Если mediaType null, блок с фото просто не выводится

        card.innerHTML = `
            ${mediaHtml}
            <div class="flex mb-4 text-[#146C8C]">
                ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>'.repeat(5)}
            </div>
            <p class="text-sm text-gray-700 font-light leading-relaxed flex-grow italic">«${r.text}»</p>
            <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span class="text-sm font-bold text-gray-900">${r.name}</span>
                <span class="text-[10px] text-gray-500 uppercase tracking-wider">${r.date}</span>
            </div>
        `;
        track.appendChild(card);
    });
}
renderReviews();

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

phoneInput.addEventListener('focus', () => { if (!phoneInput.value) phoneInput.value = '+7 '; });
phoneInput.addEventListener('input', () => { phoneInput.value = formatRuPhone(phoneInput.value); });
phoneInput.addEventListener('keydown', (e) => {
    if ((e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft') && phoneInput.selectionStart <= 2 && phoneInput.selectionEnd <= 2) e.preventDefault();
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
window.addEventListener('load', () => {

    gsap.set(".hero-reveal, .scroll-anim, .reveal-up, .nav-reveal, .service-node", { opacity: 0 });
    
    requestAnimationFrame(() => {
        if (document.fonts) {
            document.fonts.ready.then(() => ScrollTrigger.refresh());
        }

        gsap.fromTo(".nav-reveal", 
            { y: -16, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power2.out" }
        );

        gsap.fromTo(".hero-reveal", 
            { y: 40, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
        );

        if (typeof SplitText !== "undefined") {
            const split = new SplitText("#hero-heading", { type: "chars" });
            gsap.fromTo(split.chars, 
                { y: 40, opacity: 0, color: "#146C8C" }, 
                { y: 0, opacity: 1, color: "#111827", stagger: { each: 0.04, from: "start" }, duration: 0.6, ease: "sine.out", delay: 0.2 }
            );
        } else {
            gsap.fromTo("#hero-heading", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
        }

        gsap.fromTo(".hero-visual", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.5 });

        gsap.to(".hero-orb-1", { y: "+=25", x: "+=15", duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".hero-orb-2", { y: "-=30", x: "-=10", duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });

        gsap.to("#ac-power-light", { scale: 1.15, opacity: 0.7, transformOrigin: "50% 50%", duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to("#ac-power-glow", { scale: 1.5, opacity: 0.25, transformOrigin: "50% 50%", duration: 1.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to("#ac-airflow", { strokeDashoffset: -16, duration: 1.4, repeat: -1, ease: "none" });
        gsap.to(".ac-fan-bar", { scaleY: 0.55, transformOrigin: "50% 100%", duration: 0.7, ease: "sine.inOut", stagger: { each: 0.09, repeat: -1, yoyo: true }});
        
        gsap.to(".hero-badge-float", { y: -12, rotationZ: 0.01, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut", force3D: true });
        gsap.to(".hero-badge-float-2", { y: 12, rotationZ: 0.01, duration: 3.6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5, force3D: true });

        gsap.fromTo(".scroll-anim", 
            { y: 40, opacity: 0 }, 
            { scrollTrigger: { trigger: "#about", start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
        );
        
        gsap.utils.toArray(".service-node").forEach((card) => {
            gsap.fromTo(card, 
                { opacity: 0, y: 50 }, 
                { scrollTrigger: { trigger: card, start: "top 85%", once: true }, duration: 0.6, opacity: 1, y: 0, ease: "power2.out" }
            );
        });

        document.querySelectorAll('section, footer').forEach(sectionEl => {
            const items = sectionEl.querySelectorAll('.reveal-up');
            if (items.length) {
                gsap.fromTo(items, 
                    { y: 30, opacity: 0 }, 
                    { scrollTrigger: { trigger: sectionEl, start: "top 82%" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power2.out" }
                );
            }
        });

        ScrollTrigger.create({
            trigger: "#catalog",
            start: "top 75%",
            once: true,
            onEnter: () => gsap.to("#catalog-grid > div", { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power2.out" })
        });

        gsap.fromTo("#lead-form-card", 
            { opacity: 0, y: 40, scale: 0.97 }, 
            { scrollTrigger: { trigger: "#form-section", start: "top 75%", once: true }, opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power2.out" }
        );

        // --- ЛОГИКА КАРУСЕЛИ ОТЗЫВОВ ---
        const reviewTrack = document.getElementById('reviews-track');
        const reviewCards = gsap.utils.toArray('.review-card');
        const btnPrev = document.getElementById('review-prev');
        const btnNext = document.getElementById('review-next');
        let currentReviewIndex = 0;
        let autoPlayTimer;

        ScrollTrigger.create({
            trigger: "#reviews",
            start: "top 75%",
            once: true,
            onEnter: () => {
                gsap.fromTo(reviewTrack, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
                startReviewAutoplay();
            }
        });

        function updateCarousel() {
            if (!reviewCards.length) return;
            const gap = 24; // отступ gap-6 в Tailwind
            const cardWidth = reviewCards[0].offsetWidth;
            const itemWidth = cardWidth + gap;
            
            // Вычисляем видимые элементы, чтобы не прокрутить в пустоту
            const trackWidth = reviewTrack.parentElement.offsetWidth;
            const visibleItems = Math.floor((trackWidth + gap) / itemWidth);
            const maxIndex = Math.max(0, reviewCards.length - visibleItems);

            if (currentReviewIndex > maxIndex) currentReviewIndex = 0;
            if (currentReviewIndex < 0) currentReviewIndex = maxIndex;

            gsap.to(reviewTrack, { x: -(currentReviewIndex * itemWidth), duration: 0.6, ease: "power3.out", overwrite: "auto" });
        }

        function startReviewAutoplay() {
            autoPlayTimer = setInterval(() => {
                currentReviewIndex++;
                updateCarousel();
            }, 4000);
        }

        function resetReviewAutoplay() {
            clearInterval(autoPlayTimer);
            startReviewAutoplay();
        }

        btnNext.addEventListener('click', () => { currentReviewIndex++; updateCarousel(); resetReviewAutoplay(); });
        btnPrev.addEventListener('click', () => { currentReviewIndex--; updateCarousel(); resetReviewAutoplay(); });

        reviewTrack.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
        reviewTrack.addEventListener('mouseleave', startReviewAutoplay);
        window.addEventListener('resize', updateCarousel);
    });

    document.querySelectorAll('.cta-pill').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { duration: 0.3, scale: 1.05, boxShadow: "0 0 20px rgba(20, 108, 140, 0.5)", ease: "power2.out" });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { duration: 0.3, scale: 1, boxShadow: "none", ease: "power2.out" });
        });
    });

    const navbarEl = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbarEl.classList.toggle('shadow-md', window.scrollY > 40);
    });

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.style.transform = isMenuOpen ? 'translateY(0)' : 'translateY(-100%)';
    }
    mobileBtn.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', toggleMenu));

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