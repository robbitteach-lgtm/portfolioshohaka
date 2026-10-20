export interface Role {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  skills: string[];
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'code' | 'hardware' | 'robotics' | 'ai' | 'physics' | 'engineering';
  experience: string;
  icon?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'robotics' | 'iot' | 'web' | 'ai' | 'physics';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  featured: boolean;
  metrics: { label: string; value: string }[];
  schematicSummary?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  features: string[];
  targetAudience: string;
  deliveryTime: string;
  iconName: string;
  popular?: boolean;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  category: 'sertifikat' | 'musobaqa' | 'pedagogika' | 'loyiha';
  badge: string;
}

export const PERSONAL_INFO = {
  name: "Shohrux Obbosxonov",
  initials: "SO",
  age: 23,
  location: "Toshkent, O‘zbekiston",
  headline: "Fizika o‘qituvchisi, Muhandis, Robototexnik & Dasturchi",
  heroSubtitle: "Ilm-fan, muhandislik va texnologiyalar orqali kelajakni yarataman",
  status: "Yangi loyihalar va takliflar uchun ochiq",
  email: "robbitteach@gmail.com",
  phone: "+998 (90) 000-00-00", // Haqiqiy raqam uchun o'rin
  telegram: "https://t.me/shohrux_obbosxonov",
  telegramHandle: "@shohrux_obbosxonov",
  instagram: "https://instagram.com/shohrux_obbosxonov",
  instagramHandle: "@shohrux_obbosxonov",
  github: "https://github.com/shohrux-obbosxonov",
  linkedin: "https://linkedin.com/in/shohrux-obbosxonov",
  bio: `Men Shohrux Obbosxonov, 23 yoshdaman. Fizika fundamental qonunlarini zamonaviy dasturlash, mikrokontrollerlar va sun’iy intellekt bilan birlashtirib, hayotga tatbiq etuvchi ko‘p qirrali muhandis va o‘qituvchiman. 

Ilmiy asoslangan bilimlar amaliy robotlar, aqlli IoT qurilmalari va raqamli platformalarga aylangandagina dunyo rivojlanadi, deb ishonaman. O‘quvchilarga fizika fanini qiziqarli tajribalar orqali o‘rgatishdan tortib, avtonom robotlar yaratish, mikrosxemalar loyihalash va murakkab algoritmlar yozishgacha bo‘lgan keng qamrovli yo‘nalishda faoliyat yuritaman.`,
  stats: [
    { label: "Yosh", value: "23", unit: "yoshda", sub: "Innovatsion energiya" },
    { label: "Muvaffaqiyatli Loyihalar", value: "35+", unit: "loyiha", sub: "Robotika, IoT & Web" },
    { label: "Ta'lim olgan o'quvchilar", value: "650+", unit: "shogird", sub: "Fizika & Robototexnika" },
    { label: "Tajriba", value: "4+", unit: "yil", sub: "Muhandislik & Dasturlash" },
  ]
};

export const ROLES: Role[] = [
  {
    id: "physics-teacher",
    title: "Fizika O‘qituvchisi",
    category: "Ta'lim & Pedagogika",
    badge: "Ilmiy ustoz",
    iconName: "Atom",
    shortDesc: "Fundamental fizika qonunlarini hayotiy tajribalar va zamonaviy STEAM metodologiyasi orqali tushuntiraman.",
    fullDesc: "Mexanika, elektrodinamika, optika va kvant fizikasini quruq formulalar emas, balki real laboratoriya tajribalari, 3D vizualizatsiyalar va amaliy qurilmalar orqali o'rgataman. O'quvchilarni milliy va xalqaro fan olimpiadalariga tayyorlayman.",
    skills: ["Klassik Mexanika", "Elektrodinamika", "Kvant Asoslari", "Optika", "Laboratoriya tajribalari", "STEAM Ta'lim"],
    highlights: ["650+ o'quvchi fizika sirlarini o'rgandi", "Olimpiada sovrindorlarini yetishtirish", "Interaktiv fizika simulyatorlari orqali darslar"]
  },
  {
    id: "robotics-engineer",
    title: "Robototexnik Muhandis",
    category: "Muhandislik & Apparat",
    badge: "Avtonom tizimlar",
    iconName: "Bot",
    shortDesc: "Kinematik harakatlanuvchi, to'siqlarni aniqlovchi va avtonom boshqariladigan robotlar yarataman.",
    fullDesc: "Mobil shassi, servo va qadamli motorlar, Lidar va ultrasonik datchiklar bilan jihozlangan aqlli robotlarni loyihalayman va yig'aman. Avtonom navigatsiya va manipulyator qo'llar dasturiy ta'minotini ishlab chiqaman.",
    skills: ["Kinematika", "Servo / Stepper boshqaruv", "Lidar & Sensor integratsiyasi", "Avtonom navigatsiya", "Chassis dizayni"],
    highlights: ["To'siqlarni aylanib o'tuvchi qidiruv roboti", "3D bosilgan robot-qo'l manipulyatori", "Robototexnika musobaqalari uchun qurilmalar"]
  },
  {
    id: "arduino-esp32",
    title: "Arduino & ESP32 Dasturchisi",
    category: "Mikrokontrollerlar & IoT",
    badge: "Mikrosxemalar ustasi",
    iconName: "Cpu",
    shortDesc: "Mikrokontrollerlar uchun C/C++ tillarida yuqori unumdorlikdagi firmware va o'rnatilgan dasturlar yozaman.",
    fullDesc: "Arduino Uno, Nano, Mega va kuchli ESP32 (Wi-Fi + Bluetooth BLE) chiplari uchun dasturiy ta'minot yarataman. Sensorlardan analog/raqamli signallarni o'qish, PWM boshqaruvi, I2C, SPI va UART protokollari bilan ishlash bo'yicha chuqur tajribaga egaman.",
    skills: ["C/C++", "ESP32 Wi-Fi & BLE", "I2C, SPI, UART", "RTOS asoslari", "Sensorni kalibrlash", "Energiya tejash rejimlari"],
    highlights: ["ESP32 asosida telemetriya uzatish", "Simsiz ma'lumot almashinuvi", "Kam quvvat sarflovchi aqlli datchiklar"]
  },
  {
    id: "python-coder",
    title: "Python Dasturchisi",
    category: "Dasturiy Ta'minot",
    badge: "Backend & Skripting",
    iconName: "Terminal",
    shortDesc: "Python yordamida avtomatlashtirish skriptlari, backend tizimlari, botlar va ma'lumotlar tahlilini amalga oshiraman.",
    fullDesc: "Python ekotizimida yuqori tezlikda algoritmlar tuzish, apparat vositalari bilan ketma-ket (serial) port orqali aloqa o'rnatish, ma'lumotlar to'plash va ularni vizuallashtirish, Telegram botlar va API yaratishda samarali foydalanaman.",
    skills: ["Python 3", "Serial Port (PySerial)", "FastAPI / Flask", "NumPy & Pandas", "Asyncio", "Telegram Bot API"],
    highlights: ["Apparat-dastur integratsiyasi", "Real vaqtda datchik ma'lumotlarini tahlil qilish", "Avtomatlashtirilgan test skriptlari"]
  },
  {
    id: "ai-specialist",
    title: "AI Mutaxassisi",
    category: "Sun'iy Intellekt",
    badge: "Machine Intelligence",
    iconName: "Sparkles",
    shortDesc: "Kompyuter ko‘rishi (Computer Vision) va mashinali o‘rganish algoritmlarini robotikaga tadbiq qilaman.",
    fullDesc: "OpenCV va neyrotarmoqlar orqali ob'ektlarni aniqlash, yuzni tanish, rang va harakatni kuzatish tizimlarini yarataman. Sun'iy intellektni jismoniy dunyo qurilmalari bilan birlashtirib, avtonom saralovchi va aqlli yechimlar hosil qilaman.",
    skills: ["Computer Vision (OpenCV)", "YOLO ob'ekt aniqlash", "Machine Learning asoslari", "TensorFlow / Keras", "Edge AI (ESP32-CAM)"],
    highlights: ["Kamera orqali buyumlarni saralovchi robot tizim", "ESP32-CAM asosida yuz tanuvchi xavfsizlik kamerasi", "Optik sensor tahlillari"]
  },
  {
    id: "frontend-developer",
    title: "Frontend Veb-Dasturchi",
    category: "Veb Texnologiyalari",
    badge: "UI / UX & Kod",
    iconName: "Globe",
    shortDesc: "Zamonaviy, tezkor, responsiv va interaktiv veb-interfeyslar, boshqaruv panellari (Dashboard) yarataman.",
    fullDesc: "HTML5, CSS3, JavaScript, TypeScript, React va Tailwind CSS yordamida estetik jihatdan mukammal va texnik jihatdan mustahkam veb-saytlar quraman. IoT qurilmalarini masofadan boshqarish uchun real vaqtli veb-panellarni ishlab chiqaman.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "WebSockets / REST API", "Interaktiv SVG / Canvas"],
    highlights: ["IoT tizimlari uchun real-vaqt monitoring panellari", "Yuqori tezlikdagi Landing page va portfoliolar", "Clean code arxitekturasi"]
  },
  {
    id: "electronics-hardware",
    title: "Elektronika Muhandisi",
    category: "Sxemotexnika & PCB",
    badge: "Hardware & Sxemalar",
    iconName: "Zap",
    shortDesc: "Elektron mikrosxemalar, kuchlanish drayverlari va bosma platalar (PCB) loyihalash va montaj qilish.",
    fullDesc: "Tranzistorlar, rele modullari, kuchlanish stabilizatorlari, filtrlar va mikrosxemalardan iborat mustahkam elektron zanjirlarni hisoblayman va lehimlayman. EasyEDA va Proteus dasturlarida sxemalar chizib, ularni tayyor PCB plataga aylantiraman.",
    skills: ["Sxematik tahlil", "PCB Layout (EasyEDA/Proteus)", "Ohm & Kirxgof qonunlari", "Lehimlash & Montaj", "Multimetr & Ossillograf"],
    highlights: ["Maxsus drayver platalarini loyihalash", "Xavfsiz quvvat ta'minoti bloklari", "Shovqinsiz sensor signallarini filtrlash"]
  },
  {
    id: "innovator-researcher",
    title: "Innovator & Texnologiya Tadqiqotchisi",
    category: "Innovatsiya & Ilm-fan",
    badge: "Kelajak me'mori",
    iconName: "Compass",
    shortDesc: "Yangi g'oyalarni prototipga aylantiruvchi, STEAM ta'limi va innovatsion ixtirolar yaratuvchisi.",
    fullDesc: "Jamiyat va sanoatdagi amaliy muammolarni aniqlab, ularga eng arzon, ishonchli va energiya tejamkor innovatsion yechimlar ishlab chiqaman. Nazariya bilan amaliyotni birlashtirib, kelajak texnologiyalarini bugun yaratishga intilaman.",
    skills: ["Muammo tahlili", "Rapid Prototyping", "3D Modellashtirish", "Tadqiqot metodologiyasi", "Startap arxitekturasi"],
    highlights: ["Bionik protez qo'l prototipi", "Aqlli agrotexnika tejamkor tizimi", "STEAM ta'lim metodikasi bo'yicha ishlanmalar"]
  }
];

export const SKILLS: SkillItem[] = [
  // Dasturlash
  { name: "Python", level: 92, category: "code", experience: "4 yil", description: "Skripting, avtomatlashtirish, data tahlil, Serial va algoritmlar" },
  { name: "C / C++ (Arduino)", level: 90, category: "code", experience: "4 yil", description: "Mikrokontrollerlar, registerlar darajasi va periferiya boshqaruvi" },
  { name: "JavaScript & TypeScript", level: 86, category: "code", experience: "3 yil", description: "Zamonaviy veb ilovalar, asinxron dasturlash va interaktivlik" },
  { name: "HTML5 & CSS3 / Tailwind", level: 94, category: "code", experience: "4 yil", description: "Piksel darajasida aniqlik, responsivlik va futuristik dizayn" },
  
  // Mikrokontrollerlar & Apparat
  { name: "ESP32 (Wi-Fi & BLE)", level: 95, category: "hardware", experience: "3.5 yil", description: "Ikki yadroli arxitektura, simsiz aloqa, FreeRTOS va WebServer" },
  { name: "Arduino (Uno, Mega, Nano)", level: 96, category: "hardware", experience: "4.5 yil", description: "Analog/raqamli sensorlar, PWM, drayverlar va relelar bilan ishlash" },
  { name: "Sensorlar & Aktuatorlar", level: 92, category: "hardware", experience: "4 yil", description: "Ultrasonik, Gyro MPU6050, Lidar, DHT22, Bosim va Namlik datchiklari" },
  { name: "Raspberry Pi & Linux", level: 80, category: "hardware", experience: "2.5 yil", description: "Bort kompyuteri sifatida robotika va kamerani boshqarish" },

  // Robototexnika
  { name: "Avtonom Navigatsiya", level: 88, category: "robotics", experience: "3 yil", description: "To'siqlarni aylanib o'tish, chiziq bo'ylab harakat va xaritalash" },
  { name: "Manipulyatorlar & Servolar", level: 89, category: "robotics", experience: "3 yil", description: "Ko'p bo'g'inli robot-qo'llar kinematikasi va burchak koordinatalari" },
  { name: "Mobil Robot Shassilari", level: 91, category: "robotics", experience: "3.5 yil", description: "Differensial va omni-wheel g'ildirakli platformalar montaji" },

  // Sun'iy intellekt
  { name: "Computer Vision (OpenCV)", level: 85, category: "ai", experience: "2.5 yil", description: "Tasvirni qayta ishlash, konturlar, ranglar va ob'ektlarni treking qilish" },
  { name: "YOLO & Ob'ekt Tanish", level: 82, category: "ai", experience: "2 yil", description: "Real vaqt rejimida buyumlarni aniqlash va robotga koordinata berish" },
  { name: "Prompt Muhandisligi & LLM", level: 88, category: "ai", experience: "2 yil", description: "AI vositalari orqali kod generatsiyasi va aqlli yordamchilarni integratsiya qilish" },

  // Fundamental Fizika
  { name: "Klassik Mexanika & Kinematika", level: 98, category: "physics", experience: "6 yil", description: "Nyuton qonunlari, kuch momenti, energiya saqlanishi va tebranishlar" },
  { name: "Elektrodinamika & Zanjirlar", level: 96, category: "physics", experience: "6 yil", description: "Ohm va Kirxgof qonunlari, magnit maydoni, induksiya va kondensatorlar" },
  { name: "Kvant & Optika Fizikasi", level: 90, category: "physics", experience: "5 yil", description: "Yorug'lik interferensiyasi, fotoeffekt va to'lqin xususiyatlari" },
  { name: "Matematik Tahlil", level: 92, category: "physics", experience: "5 yil", description: "Differensial tenglamalar, integrallar va vektor maydonlari" },

  // Muhandislik & 3D
  { name: "Sxemotexnika & Lehimlash", level: 93, category: "engineering", experience: "4 yil", description: "Elektr sxemalari tahlili, lehimlash stansiyasi, multimetr va xavfsizlik" },
  { name: "EasyEDA / Proteus", level: 87, category: "engineering", experience: "3 yil", description: "Bosma plata (PCB) dizayni va virtual elektronika simulyatsiyasi" },
  { name: "3D Modellashtirish & Chop etish", level: 85, category: "engineering", experience: "2.5 yil", description: "Fusion 360 va 3D printerlar uchun korpuslar va detallar chizish" }
];

export const PROJECTS: Project[] = [
  {
    id: "cyberbot-apex",
    title: "CyberBot Apex — Avtonom Lidar Roboti",
    category: "robotics",
    categoryLabel: "Robototexnika",
    featured: true,
    description: "Lidar skaneri va ultrasonik datchiklar yordamida notanish xonada to'siqlarni aniqlab, eng maqbul marshrutni o'zi tanlovchi avtonom qidiruv roboti.",
    fullDescription: "CyberBot Apex — favqulodda vaziyatlarda yoki xavfli zonalarda inson kirmaydigan joylarni xaritalash uchun ishlab chiqilgan mobil avtonom platforma. Uning asosida ESP32 va Lidar moduli turadi. Robot atrof-muhitni 360 daraja skaner qilib, to'siqlar koordinatasini hisoblaydi va C++ da yozilgan A* algoritmi yordamida erkin yo'lni topadi.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    tags: ["ESP32", "Lidar 360°", "C++", "Avtonom Navigatsiya", "Servo Dvigatellar"],
    metrics: [
      { label: "Aniqlik masofasi", value: "0.02 - 12m" },
      { label: "Aylanish tezligi", value: "360° / 0.5s" },
      { label: "Boshqaruv", value: "Avtonom + Wi-Fi" }
    ],
    schematicSummary: "ESP32 DevKit V1 -> I2C -> Lidar TFMini Plus; PWM -> Dual H-Bridge L298N -> 2x DC Geared Motors; Step-Down LM2596 -> 7.4V LiPo to 5V stable.",
    codeSnippet: {
      language: "cpp",
      code: `// CyberBot Apex - To'siqlarni aylanib o'tish logikasi
void updateNavigation() {
  float distance = lidar.getDistanceCm();
  if (distance < CRITICAL_DISTANCE_CM) {
    stopMotors();
    int bestAngle = scanSurroundings();
    rotateToAngle(bestAngle);
    moveForward();
  }
}`
    }
  },
  {
    id: "agropulse-esp32",
    title: "AgroPulse — Aqlli IoT Issiqxona Tizimi",
    category: "iot",
    categoryLabel: "IoT & Avtomatika",
    featured: true,
    description: "Tuproq namligi, havo harorati, CO2 miqdori va yorug'lik darajasini 24/7 nazorat qilib, avtomatik sug'orish va Telegram bot orqali bildirishnoma yuboruvchi tizim.",
    fullDescription: "AgroPulse zamonaviy fermerlar va issiqxonalar uchun mo'ljallangan to'liq avtomatlashtirilgan IoT majmuasidir. ESP32 mikrokontrolleri har 10 soniyada tuproq namligi va havoning harorati/namligini tahlil qiladi. Agar namlik belgilangan me'yordan tushib ketsa, elektr klapan ochilib tomchilatib sug'orish yoqiladi. Barcha statistika real vaqtda Telegram bot va veb-dashboardga kelib tushadi.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["ESP32", "IoT", "Telegram Bot API", "DHT22 Sensor", "Avtomatik Sug'orish"],
    metrics: [
      { label: "Suv tejash", value: "45%" },
      { label: "Aloqa formati", value: "Wi-Fi + MQTT" },
      { label: "Doimiy monitoring", value: "24 / 7" }
    ],
    schematicSummary: "ESP32 GPIO4 -> Capacitive Soil Sensor (ADC); GPIO15 -> DHT22; GPIO18 -> 5V Optocoupler Relay -> 12V Solenoid Valve; Deep Sleep power management.",
    codeSnippet: {
      language: "cpp",
      code: `// AgroPulse - Namlik tahlili va rele yoqish
if (soilMoisturePercent < MOISTURE_THRESHOLD) {
  digitalWrite(RELAY_PUMP_PIN, HIGH);
  telegramBot.sendMessage("⚠️ Ogohlantirish: Tuproq namligi " + String(soilMoisturePercent) + "%. Sug'orish boshlandi!");
}`
    }
  },
  {
    id: "physilab-simulator",
    title: "PhysiLab 3D — Interaktiv Fizika Simulyatori",
    category: "physics",
    categoryLabel: "Fizika & Ta'lim",
    featured: true,
    description: "O'quvchilar uchun real fizika qonuniyatlarini (Ohm qonuni, mayatnik tebranishi, optik sinish) interaktiv vizuallashtiruvchi raqamli laboratoriya platformasi.",
    fullDescription: "PhysiLab dars jarayonida fizikani tushunishni osonlashtirish maqsadida yaratilgan veb-laboratoriyadir. Unda foydalanuvchi qarshilik, kuchlanish, prujina qattiqligi yoki mayatnik ipi uzunligini slayderlar orqali o'zgartirganda real vaqtda formulalar hisob-kitobi va grafiklar jonli harakatlanadi. O'quvchilarga fanni jonli his qilish imkonini beradi.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    tags: ["Fizika", "React", "Interaktiv Veb", "Canvas API", "STEAM"],
    metrics: [
      { label: "O'quvchilar qamrovi", value: "1,200+" },
      { label: "Mavzular soni", value: "18+ laboratoriya" },
      { label: "Hisoblash tezligi", value: "60 FPS" }
    ],
    schematicSummary: "Formula: T = 2 * PI * sqrt(L / g); I = U / R; P = U * I; Kinematik to'g'ri chiziqli harakat differensial tenglamalari asosida modellashtirilgan.",
    codeSnippet: {
      language: "typescript",
      code: `// Mayatnik davri hisoblash: T = 2π * sqrt(L / g)
export function calculatePendulumPeriod(lengthMeters: number, gravity = 9.80665) {
  return 2 * Math.PI * Math.sqrt(lengthMeters / gravity);
}`
    }
  },
  {
    id: "neural-vision-sorter",
    title: "Neural Vision Sorter — AI Konveyer Saralovchisi",
    category: "ai",
    categoryLabel: "Sun'iy Intellekt",
    featured: false,
    description: "Kamera orqali konveyerdan o'tayotgan turli xil detallar va ranglarni bir lahzada aniqlab, robot-qo'l orqali alohida savatlarga saralovchi AI tizim.",
    fullDescription: "Ishlab chiqarishni avtomatlashtirish uchun mo'ljallangan Computer Vision loyihasi. Python va OpenCV yordamida ob'ektlarning geometrik shakli, yuzasidagi nuqsonlar va rangi sekundiga 30 ta kadr chastotada aniqlanadi. Aniqlangan koordinatalar Serial port orqali 4 o'qli servo manipulyatorga yuboriladi va buyum kerakli qutiga joylashtiriladi.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "Robot Manipulyator", "Machine Learning", "Serial Port"],
    metrics: [
      { label: "Saralash tezligi", value: "45 dona/daqiqa" },
      { label: "Aniqlik darajasi", value: "98.4%" },
      { label: "Kamera javobi", value: "18 ms" }
    ],
    schematicSummary: "USB HD Camera -> Python OpenCV -> Contours & HSV Color Masking -> Inverse Kinematics -> PySerial -> Arduino Nano -> 4x MG996R Servos.",
    codeSnippet: {
      language: "python",
      code: `# Ob'ekt koordinatasini topish va robotga uzatish
mask = cv2.inRange(hsv_frame, lower_bound, upper_bound)
contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
for cnt in contours:
    if cv2.contourArea(cnt) > 500:
        x, y, w, h = cv2.boundingRect(cnt)
        arduino_serial.write(f"{x},{y}\\n".encode())`
    }
  },
  {
    id: "bionic-myoarm",
    title: "Bionic MyoArm — EMG Muskul Bionik Qo'li",
    category: "robotics",
    categoryLabel: "Bionika & Tibbiyot",
    featured: true,
    description: "Inson bilagi terisidagi muskul qisqarish mikro-signallarini (EMG) ushlab, barmoqlarni real vaqtda mustaqil bukish imkonini beruvchi arzon 3D bionik protez.",
    fullDescription: "Ijtimoiy ahamiyatga ega bionika loyihasi. Qimmatbaho xorijiy protezlar o'rniga, biologik mos PLA/PETG plastikdan 3D printerda chiqarilgan qo'l mexanizmi. Bilakka o'rnatilgan MyoWare EMG sensori muskul harakatini elektr kuchlanishga aylantiradi, Arduino Nano esa ushbu signallarni filtrlash algoritmidan o'tkazib, 5 ta mikro-servoni harakatga keltiradi.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    tags: ["EMG Sensor", "Arduino", "3D Modellashtirish", "Bionika", "Filtrlash"],
    metrics: [
      { label: "Qarmoq harakati", value: "5 ta mustaqil barmoq" },
      { label: "Javob berish vaqti", value: "< 70 ms" },
      { label: "Og'irligi", value: "Atigi 420 gramm" }
    ],
    schematicSummary: "MyoWare Muscle Sensor -> Arduino A0; Analog Low-Pass Filter; 5x TowerPro SG90 / MG90S Servos; External 5V 3A UBEC power supply.",
    codeSnippet: {
      language: "cpp",
      code: `// EMG signalini tozalash va filtrdan o'tkazish
int rawEMG = analogRead(EMG_PIN);
filteredEMG = (alpha * rawEMG) + ((1.0 - alpha) * filteredEMG);
if (filteredEMG > THRESHOLD_FIST) {
  closeFingers();
} else {
  openFingers();
}`
    }
  },
  {
    id: "smart-neural-home",
    title: "Quantum Smart Home Hub — Xavfsiz Aqlli Uy",
    category: "iot",
    categoryLabel: "IoT & Veb",
    featured: false,
    description: "Xonadondagi barcha chiroqlar, rozetkalar, gaz va suv sizib chiqish datchiklarini boshqaruvchi shifrlangan, mustaqil serverli ekotizim.",
    fullDescription: "Tashqi bulut xizmatlariga bog'liq bo'lmagan, xavfsiz va mahalliy Wi-Fi tarmog'ida ishlovchi aqlli uy boshqaruv tizimi. Tizimda gaz datchigi (MQ-2) xavf sezsa, avtomatik ravishda asosiy gaz klapanini yopadi va ovozli signal beradi. Chiroqlarni telefon yoki planshetdagi qulay futuristik panel orqali boshqarish mumkin.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    tags: ["ESP32", "WebSockets", "Xavfsizlik", "Smart Home", "MQ-2 Gas Sensor"],
    metrics: [
      { label: "Lokal javob vaqti", value: "5 ms" },
      { label: "Xavfsizlik", value: "Lokal shifrlangan tarmoq" },
      { label: "Boshqariladigan nuqtalar", value: "16+ kanal" }
    ],
    schematicSummary: "ESP32 Web Server -> WebSocket protocol; MQ-2 Gas sensor; Relays with optocoupler isolation; Buzzer alert; OLED status display.",
    codeSnippet: {
      language: "cpp",
      code: `// Gaz sizib chiqishi aniqlanganda darhol o'chirish
if (gasLevelPPM > SAFE_LIMIT) {
  closeMainValve();
  soundSirenAlarm();
  broadcastAlertToAllClients("FAVQURODDA HOLAT: Gaz aniqlandi!");
}`
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "physics-tutoring",
    title: "Fizika Fanidan Chuqurlashtirilgan Ta'lim",
    category: "Ta'lim & Tayyorgarlik",
    shortDesc: "DTM, Milliy sertifikat, olimpiadalar va xalqaro universitetlarga kirish uchun interaktiv fizika darslari.",
    features: [
      "Klassik mexanika, elektrodinamika, optika va termodinamika",
      "Quruq yodlash emas, fizik jarayonlar mohiyatini anglash",
      "Real laboratoriya jihozlari va raqamli 3D simulyatsiyalar",
      "Individual yondashuv va test yechishning tezkor usullari",
      "Olimpiada murakkabligidagi masalalarni tahlil qilish"
    ],
    targetAudience: "Maktab o'quvchilari, litsey/kollej talabalari, abituriyentlar",
    deliveryTime: "Haftada 3 kun / Moslashuvchan jadval",
    iconName: "Atom",
    popular: true
  },
  {
    id: "robotics-coaching",
    title: "Robototexnika va STEAM Kurslari",
    category: "Muhandislik & Amaliyot",
    shortDesc: "Noldan boshlab o'z robotini yasash, datchiklarni ulash va algoritmlar bilan mustaqil boshqarishni o'rgatish.",
    features: [
      "Robot qismlari, motorlar va shassi montaj qilish",
      "Datchiklar (masofa, harorat, yorug'lik) bilan ishlash",
      "Mantiqiy fikrlash va algoritmik dasturlash",
      "Musobaqalar va ko'rgazmalar uchun robotlar tayyorlash",
      "Jamoaviy muhandislik loyihalari"
    ],
    targetAudience: "10-18 yoshli yoshlar, iqtidorli o'quvchilar va to'garaklar",
    deliveryTime: "Amaliy kurs (1 oydan 6 oygacha)",
    iconName: "Bot"
  },
  {
    id: "arduino-custom-devices",
    title: "Arduino & ESP32 Qurilmalarni Ishlab Chiqish",
    category: "Buyurtma & Avtomatlashtirish",
    shortDesc: "Buyurtma asosida aqlli IoT qurilmalari, telemetriya stansiyalari va avtomatika sxemalarini tayyorlash.",
    features: [
      "Texnik topshiriq (TT) asosida apparat qismini tanlash",
      "C/C++ firmware yozish va xatoliklarni bartaraf etish",
      "Sensorlar, relelar va ekranlarni integratsiya qilish",
      "Wi-Fi, Bluetooth yoki GSM modul orqali masofaviy boshqaruv",
      "To'liq elektr sxemasi va foydalanish qo'llanmasi"
    ],
    targetAudience: "Startaplar, fermerlar, biznes egalari, innovatorlar",
    deliveryTime: "Loyiha murakkabligiga qarab (3 - 14 kun)",
    iconName: "Cpu",
    popular: true
  },
  {
    id: "web-development",
    title: "Veb-Saytlar va Landing Page Yaratish",
    category: "Veb-Dasturlash",
    shortDesc: "Zamonaviy dizaynga ega, yuqori tezlikda yuklanuvchi, responsiv va konversiyasi baland shaxsiy hamda korporativ saytlar.",
    features: [
      "Futuristik va unikal UI/UX dizayn (Glassmorphism, Dark/Light)",
      "React, TypeScript va Tailwind CSS eng so'nggi standartlari",
      "Barcha telefon, planshet va kompyuterlarda mukammal moslashuv",
      "Tezkor yuklanish tezligi va qidiruv tizimlari (SEO) optimizatsiyasi",
      "Telegram bot yoki email orqali arizalarni qabul qilish integratsiyasi"
    ],
    targetAudience: "Kompaniyalar, ekspertlar, brendlar, tadbirkorlar",
    deliveryTime: "3 - 10 ish kuni",
    iconName: "Globe"
  },
  {
    id: "ai-vision-consulting",
    title: "AI va Kompyuter Ko‘rishi Integratsiyasi",
    category: "Sun'iy Intellekt",
    shortDesc: "Kamera orqali buyumlarni tanish, saralash, tahlil qilish yoki avtomatlashtirilgan sun'iy intellekt skriptlari.",
    features: [
      "OpenCV orqali tasvir va videolarni real vaqtda qayta ishlash",
      "Apparat va kompyuter o'rtasida Serial port aloqasi",
      "Python algoritmlarini ishlab chiqarish uskunalariga ulash",
      "Texnik maslahat va arxitektura rejasini tuzish"
    ],
    targetAudience: "Ishlab chiqarish korxonalari, tadqiqotchilar, muhandislar",
    deliveryTime: "Loyiha asosida kelishiladi",
    iconName: "Sparkles"
  },
  {
    id: "pcb-3d-modeling",
    title: "Elektronika Sxemasi & 3D Korpus Loyihalash",
    category: "Sxemotexnika & 3D",
    shortDesc: "G'oyadagi sxemani professional bosma plata (PCB) fayllariga va qurilma uchun 3D korpusga aylantirish.",
    features: [
      "EasyEDA / Proteus platformalarida sxema va plata chizish",
      "Gerber fayllarni ishlab chiqarishga tayyorlash",
      "Qurilma o'lchamlariga mos 3D korpus modellashtirish (STL/STEP)",
      "Elektronika komponentlarini to'g'ri taqsimlash va hisoblash"
    ],
    targetAudience: "Ixtirochilar, talabalar, apparat prototip yaratuvchilari",
    deliveryTime: "2 - 7 kun",
    iconName: "Zap"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    year: "2024",
    title: "Innovatsion Ta'lim Texnologiyalari — 1-o‘rin",
    organization: "STEAM Ta'lim Festivali & Ko'rgazmasi",
    description: "Fizika fanini robototexnika va raqamli simulyatorlar orqali o'rgatish bo'yicha taqdim etilgan metodika eng yaxshi innovatsion loyiha deb topildi.",
    category: "musobaqa",
    badge: "1-o'rin sovrindori"
  },
  {
    id: "ach-2",
    year: "2023",
    title: "ESP32 & IoT Architecture Professional",
    organization: "Xalqaro Texnologiya Kursi & Sertifikat",
    description: "Sanoat darajasidagi narsalar interneti (IoT), sensor tarmoqlari va FreeRTOS ko'p tarmoqli boshqaruv bo'yicha yuqori ball bilan sertifikatlangan.",
    category: "sertifikat",
    badge: "Xalqaro Sertifikat"
  },
  {
    id: "ach-3",
    year: "2023",
    title: "Bionik Protez Muhandislik Ixtirosi",
    organization: "Yosh Olimlar & Innovatorlar Forumi",
    description: "EMG datchiklari orqali boshqariluvchi arzon 3D bionik protez qo'l modeli taqdim etilib, tibbiy-muhandislik nominatsiyasida g'oliblikni qo'lga kiritdi.",
    category: "loyiha",
    badge: "Eng yaxshi ixtiro"
  },
  {
    id: "ach-4",
    year: "2022 - Hozirgacha",
    title: "650+ Iqtidorli O'quvchilar Murabbiyi",
    organization: "STEAM & Fizika O'quv Markazlari",
    description: "Fizika, elektronika va dasturlash bo'yicha o'quvchilarni tayyorlab, ularning fan olimpiadalari va nufuzli oliygohlarga kirishiga katta hissa qo'shildi.",
    category: "pedagogika",
    badge: "Oltin Murabbiy"
  },
  {
    id: "ach-5",
    year: "2021",
    title: "Fizika Fani Olimpiadasi Respublika Bosqichi",
    organization: "Xalq Ta'limi Vazirligi",
    description: "Nazariy fizika va amaliy laboratoriya turlarida yuqori natijalar ko'rsatib, faxriy o'rin va diplom bilan taqdirlangan.",
    category: "musobaqa",
    badge: "Faxriy Diplom"
  }
];

export const FAQS = [
  {
    q: "Fizika darslari qanday formatda o‘tiladi?",
    a: "Darslar individual yoki kichik guruhlarda, ham onlayn (interaktiv platforma orqali), ham oflayn tarzda o'tkaziladi. Asosiy e'tibor quruq formulalarni yodlashga emas, balki hodisalarning fizik mohiyatini 3D simulyatsiyalar va real tajribalar orqali tushunishga qaratiladi."
  },
  {
    q: "Qurilmalar yoki robot buyurtma qilish jarayoni qanday?",
    a: "Avval sizning g'oyangiz va talablaringizni (texnik topshiriq) o'rganamiz. Kerakli detallar ro'yxati, sxemasi tuziladi, 3D korpus va kod yozilib, real sinovdan o'tkaziladi. Tayyor bo'lgach barcha hujjatlar va video qo'llanma bilan topshiriladi."
  },
  {
    q: "Sayt yoki veb-platforma buyurtma qilish mumkinmi?",
    a: "Albatta. Zamonaviy, chaqmoqdek tez ishlovchi, chiroyli dizayndagi portfolio, biznes landing page yoki IoT qurilmalarini boshqaruvchi veb-panellarni React va zamonaviy texnologiyalarda tayyorlab beraman."
  },
  {
    q: "Aloqaga chiqishning eng tezkor usuli qaysi?",
    a: "Telegram orqali bog'lanish eng tezkor usuldir (@shohrux_obbosxonov). Shuningdek, saytdagi 'Xabar qoldirish' formasini to'ldirsangiz, tez orada siz bilan bog'lanaman."
  }
];
