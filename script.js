/* ═══════════════════════════════════════════════════════════
   BARCELONA TRIP — script.js
   ✏️  All editable data lives at the TOP of this file.
   ═══════════════════════════════════════════════════════════ */

// ─── 1. ITINERARY DATA ──────────────────────────────────────
const days = [
  {
    title: "Vertrek",
    emoji: "🚌",
    date: "27 maart",
    activities: [
      { time: "~18:30", text: "<strong>Verzamelen</strong> — aan Campus De Vesten, Herentals, Augustijnenlaan 31" },
      { time: "~19:30", text: "<strong>Vertrek</strong> — (⏱ ~13 uur) nachtrit naar Pont du Gard, Frankrijk" }
    ]
  },
  {
    title: "Frankrijk en aankomst hotel",
    emoji: "🇫🇷",
    date: "28 maart",
    activities: [
      { time: "~8:00",  text: "<strong>Pont du Gard</strong> — Ontbijt (zelf meenemen) en eten op de brug" },
      { time: "~11:30", text: "<strong>Arena van Nîmes</strong> — Bezoek aan een oud amfitheater" },
      { time: "~12:30", text: "<strong>Middagpauze</strong> — Lunchen in Nîmes" },
      { time: "~14:00", text: "<strong>Naar Barcelona</strong> — Dus terug in de bus" },
      { time: "~18:00", text: "<strong>Hotel</strong> — Check-in hotel" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — Eten in het hotel" }
    ]
  },
  {
    title: "Hospital de San Pau & Gotische Wijk",
    emoji: "🏛️",
    date: "29 maart",
    activities: [
      { time: "~8:00",  text: "<strong>Ontbijt</strong> :)" },
      { time: "~10:00", text: "<strong>Hospital de San Pau</strong>" },
      { time: "~12:00", text: "<strong>Metro</strong> — Zie 'transport' voor meer info" },
      { time: "~14:00", text: "<strong>Gotische wijk</strong> — Fotozoektocht, van Plaza Cataluña tot Plaza Reial" },
      { time: "~16:00", text: "<strong>Metro</strong> — Naar Plaza Espagña, vrije avondmaal" },
      { time: "~20:00", text: "<strong>Hotel</strong> — Terug naar het hotel" }
    ]
  },
  {
    title: "Sagrada Família & Park Güell",
    emoji: "🏰",
    date: "30 maart",
    activities: [
      { time: "~8:00",     text: "<strong>Ontbijt</strong> :]" },
      { time: "Voormiddag", text: "<strong>Verschillende bezoeken</strong> — 3 groepen, volgorde hangt af van de groep:" },
      { time: "",           text: "<strong>Sagrada Família</strong> — Binnenin of enkel buitenkant" },
      { time: "",           text: "<strong>Wandeling</strong> — Naar Casa Batlló en Casa Milà" },
      { time: "",           text: "<strong>Wandeling</strong> — Naar Plaza Cataluña" },
      { time: "~12:00",    text: "<strong>Vrije tijd</strong> — Doe wat je wilt en eet lunch" },
      { time: "~15:00",    text: "<strong>Metro</strong> — Zie 'transport' voor meer info" },
      { time: "~16:00",    text: "<strong>Park Güell</strong> — Groep 1" },
      { time: "~16:30",    text: "<strong>Park Güell</strong> — Groep 2" },
      { time: "~17:30",    text: "<strong>Bus richting hotel</strong>" },
      { time: "~19:30",    text: "<strong>Avondmaal</strong> — In het hotel" }
    ]
  },
  {
    title: "Camp Nou & Codorníu",
    emoji: "🏖️",
    date: "31 maart",
    activities: [
      { time: "~8:00",  text: "<strong>Ontbijt</strong> :>" },
      { time: "~10:00", text: "<strong>Keuze-activiteit</strong> — Camp Nou, Escape game of alternatief programma" },
      { time: "~12:00", text: "<strong>Metro</strong> — Zie 'transport' voor meer info" },
      { time: "~13:00", text: "<strong>Lunch</strong>" },
      { time: "~14:30", text: "<strong>Bus</strong> — Pikt groep aan Passeig Joseph Carner, transfer naar Codorniu" },
      { time: "~15:45", text: "<strong>Codorníu</strong>" },
      { time: "~17:00", text: "<strong>Hotel</strong> — Terug naar het hotel" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — Eten" }
    ]
  },
  {
    title: "Girona",
    emoji: "🐸",
    date: "1 april",
    activities: [
      { time: "~8:30",  text: "<strong>Vertrek naar Girona</strong> — Middagpauze in de buurt van Plaza de la Independencia" },
      { time: "~14:00", text: "<strong>Wandeling</strong> — Langs stadsomwalling en joodse wijk" },
      { time: "~16:30", text: "<strong>Hotel</strong> — Terug naar het hotel" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — Eten" }
    ]
  },
  {
    title: "Terug naar Herentals",
    emoji: "👋",
    date: "2 april",
    activities: [
      { time: "~8:45",  text: "<strong>Ontbijt</strong> =)" },
      { time: "",       text: "<strong>Check-out</strong> — Bagage verzamelen in bagageruimte" },
      { time: "~10:00", text: "<strong>Trein</strong> — Zie transport" },
      { time: "~13:00", text: "<strong>Lunch</strong> — Vrije tijd" },
      { time: "~16:30", text: "<strong>Trein</strong> — Door de klant geregeld" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — In het hotel" },
      { time: "20:00",  text: "<strong>Voorbereiding vertrek</strong> — Verzamelen en inladen bus" },
      { time: "~20:30", text: "<strong>Vertrek</strong> — Terug naar Herentals" }
    ]
  },
  {
    title: "Thuis!",
    emoji: "🏠",
    date: "3 april",
    activities: [
      { time: "~13:00", text: "<strong>Aankomst</strong> — Aangekomen in Herentals" }
    ]
  }
];

// ─── 2. MAP PINS ────────────────────────────────────────────
const mapPins = [
  {
    lat: 41.3851, lng: 2.1734,
    type: "hotel",
    label: "Hotel Aquamarina & Spa",
    desc: "Jullie verblijf voor de hele trip.",
    info: "4-sterrenhotel in Santa Susanna met zwembad, gym en spa. Ontbijt en avondmaal zijn inbegrepen als buffet.",
    mapsUrl: "https://maps.google.com/?q=Hotel+Aquamarina+Spa+Santa+Susanna"
  },
  {
    lat: 41.4036, lng: 2.1744,
    type: "activity",
    label: "Sagrada Família",
    desc: "Beroemde kathedraal van Gaudí.",
    info: "Basiliek ontworpen door Antoni Gaudí. Bouw begon in 1882 en is nog steeds niet volledig afgerond. UNESCO Werelderfgoed en het meest bezochte monument van Spanje.",
    mapsUrl: "https://maps.google.com/?q=Sagrada+Familia+Barcelona"
  },
  {
    lat: 41.4145, lng: 2.1527,
    type: "activity",
    label: "Park Güell",
    desc: "Kleurrijk park van Gaudí.",
    info: "Publiek park met tuinen en architecturale elementen van Antoni Gaudí, gebouwd tussen 1900 en 1914. Beroemd om zijn kleurrijke mozaïeken en fantastische uitzichten over Barcelona.",
    mapsUrl: "https://maps.google.com/?q=Park+Guell+Barcelona"
  },
  {
    lat: 41.3817, lng: 2.1749,
    type: "activity",
    label: "Gotische Wijk",
    desc: "Historisch stadscentrum.",
    info: "De Barri Gòtic is het oudste deel van Barcelona, met middeleeuwse straten, kerken en pleinen. Hier vind je de gotische kathedraal, Plaza Reial en vele historische gebouwen.",
    mapsUrl: "https://maps.google.com/?q=Barri+Gotic+Barcelona"
  },
  {
    lat: 41.3954, lng: 2.1519,
    type: "activity",
    label: "Casa Batlló",
    desc: "Iconisch Gaudí-gebouw op Passeig de Gràcia.",
    info: "Een van de meest iconische gebouwen van Gaudí. Het gevel is versierd met kleurrijke mozaïeken en heeft een dak dat lijkt op de schubben van een draak.",
    mapsUrl: "https://maps.google.com/?q=Casa+Batllo+Barcelona"
  },
  {
    lat: 41.3955, lng: 2.1528,
    type: "activity",
    label: "Casa Milà (La Pedrera)",
    desc: "Ander iconisch Gaudí-gebouw.",
    info: "Ook bekend als La Pedrera. Meesterwerk van Gaudí uit 1912, beroemd om zijn golvende stenen gevel en de fantasievolle schoorstenen op het dak.",
    mapsUrl: "https://maps.google.com/?q=Casa+Mila+La+Pedrera+Barcelona"
  },
  {
    lat: 41.3870, lng: 2.1699,
    type: "activity",
    label: "Plaza Catalunya",
    desc: "Centraal plein van Barcelona.",
    info: "Het geografische en symbolische centrum van Barcelona. Verbindt de oude stad met de moderne wijk Eixample. Veel fonteinen, standbeelden en terrasjes.",
    mapsUrl: "https://maps.google.com/?q=Plaza+Catalunya+Barcelona"
  },
  {
    lat: 41.3742, lng: 2.1490,
    type: "activity",
    label: "Plaza España",
    desc: "Groot plein met fonteinen.",
    info: "Een van de grootste pleinen van Barcelona, gebouwd voor de Wereldtentoonstelling van 1929. Hier vind je de Magische Fontein van Montjuïc en de toegang tot de MNAC.",
    mapsUrl: "https://maps.google.com/?q=Plaza+Espana+Barcelona"
  },
  {
    lat: 41.4027, lng: 2.1756,
    type: "activity",
    label: "Hospital de Sant Pau",
    desc: "UNESCO Werelderfgoed.",
    info: "Voormalig ziekenhuis ontworpen door Lluís Domènech i Montaner. Een van de mooiste modernistische gebouwen ter wereld en een UNESCO Werelderfgoed.",
    mapsUrl: "https://maps.google.com/?q=Hospital+de+Sant+Pau+Barcelona"
  },
  {
    lat: 41.3809, lng: 2.1228,
    type: "activity",
    label: "Camp Nou",
    desc: "Stadion van FC Barcelona.",
    info: "Het grootste voetbalstadion van Europa met meer dan 99.000 plaatsen. Het FC Barcelona Museum is een van de best bezochte musea van Spanje.",
    mapsUrl: "https://maps.google.com/?q=Camp+Nou+Barcelona"
  },
  {
    lat: 41.3787, lng: 2.1772,
    type: "transport",
    label: "Station Barcelona-Sants",
    desc: "Hoofdstation van Barcelona.",
    info: "Het grootste treinstation van Barcelona. Van hier vertrekken treinen naar Madrid, Valencia, Parijs en andere Europese steden.",
    mapsUrl: "https://maps.google.com/?q=Barcelona+Sants+Station"
  }
];

// ─── 3. SPANISH PHRASES ─────────────────────────────────────
// ✏️ EDIT: Add or remove phrases as needed
const spanishPhrases = [
  {
    category: "Basis",
    emoji: "👋",
    phrases: [
      { es: "Hola", nl: "Hallo" },
      { es: "Gracias", nl: "Dankuwel" },
      { es: "Por favor", nl: "Alstublieft" },
      { es: "De nada", nl: "Graag gedaan" },
      { es: "Lo siento", nl: "Sorry" },
      { es: "Perdona", nl: "Excuseer me" },
      { es: "Sí / No", nl: "Ja / Nee" },
      { es: "No entiendo", nl: "Ik begrijp het niet" },
      { es: "¿Hablas inglés?", nl: "Spreek je Engels?" },
      { es: "No hablo español", nl: "Ik spreek geen Spaans" },
      { es: "No soy una persona real.", nl: "Ik ben geen echt persoon." },
    ]
  },
  {
    category: "Eten & Drinken",
    emoji: "🍽️",
    phrases: [
      { es: "Una mesa para tres/cuatro/cinco", nl: "Een tafel voor drie/vier/vijf" },
      { es: "¿Qué recomienda?", nl: "Wat beveelt u aan?" },
      { es: "La cuenta, por favor", nl: "De rekening, alstublieft" },
      { es: "Está muy rico", nl: "Het is erg lekker" },
      { es: "Un vaso de agua", nl: "Een glas water" },
      { es: "Creo que hay veneno en esta comida.", nl: "Ik denk dat er gif in dit eten zit." }
    ]
  },
  {
    category: "Winkelen",
    emoji: "🛍️",
    phrases: [
      { es: "¿Cuánto cuesta?", nl: "Hoeveel kost het?" },
      { es: "Es demasiado caro", nl: "Het is te duur" },
      { es: "Me lo llevo", nl: "Ik neem het" },
      { es: "¿Puedo pagar con tarjeta?", nl: "Kan ik met kaart betalen?" },
      { es: "Solo estoy mirando", nl: "Ik kijk alleen maar" },
      { es: "Solo estoy mirando", nl: "Ik kijk alleen maar" }
      { es: "Vamos a robar un banco.", nl: "Laten we een bank beroven." }
    ]
  },
  {
    category: "Nood & Hulp",
    emoji: "🚨",
    phrases: [
      { es: "¡Ayuda!", nl: "Help!" },
      { es: "Llama a la policía", nl: "Bel de politie" },
      { es: "Necesito un médico", nl: "Ik heb een dokter nodig" },
      { es: "Me han robado", nl: "Ik ben bestolen" },
      { es: "Estoy perdido/a", nl: "Ik ben verdwaald" },
      { es: "¿Dónde está el hospital?", nl: "Waar is het ziekenhuis?" },
      { es: "Ayúdame a esconder este cuerpo.", nl: "Help me om dit lichaam te verstoppen." }
    ]
  },
  {
    category: "Transport",
    emoji: "🚇",
    phrases: [
      { es: "¿Dónde está...?", nl: "Waar is...?" },
      { es: "A la derecha / izquierda", nl: "Rechts / Links" },
      { es: "Todo recto", nl: "Rechtdoor" },
      { es: "Un billete, por favor", nl: "Een ticket, alstublieft" },
      { es: "¿A qué hora sale?", nl: "Hoe laat vertrekt het?" },
      { es: "La estación de metro", nl: "Het metrostation" },
      { es: "¿Quién conduce este avión?", nl: "Wie bestuurt deze vliegtuig?" }
    ]
  }
];

// ─── 4. CONTACT INFO ────────────────────────────────────────
// ✏️ EDIT: Fill in real contact details
const contacts = [
  {
    name: "Placeholder",
    role: "Placeholder",
    emoji: "👨‍🏫",
    phone: "Placeholder",
    note: "Placeholder"
  },
  {
    name: "Placeholder",
    role: "Placeholder",
    emoji: "👩‍🏫",
    phone: "Placeholder",
    note: "Placeholder"
  },
  {
    name: "Placeholder",
    role: "Placeholder",
    emoji: "🏫",
    phone: "+32 14 XX XX XX",
    note: "Placeholder"
  },
  {
    name: "Noodlijn",
    role: "Europees noodnummer",
    emoji: "🚨",
    phone: "112",
    note: "Gratis — werkt overal in Europa"
  },
  {
    name: "Hotel Aquamarina",
    role: "Ons hotel in Barcelona",
    emoji: "🏨",
    phone: "+34 93 767 60 00",
    note: "Carrer del Pla de la Torre 24, Santa Susanna"
  }
];

// ─── 5. CREDITS / CREW ──────────────────────────────────────
const crew = [
  { name: "Ruben",  emoji: "🌟", role: "Web design lead",  bio: "Eigenlijk alles dat je hier ziet is van mij" },
  { name: "Axel",   emoji: "🎨", role: "Morale support",   bio: "Idk" },
  { name: "Lowie",  emoji: "📍", role: "Lowie zijn",       bio: "Heeft alle frietjes opgegeten" }
];


/* ═══════════════════════════════════════════════════════════
   APP LOGIC — you generally don't need to edit below here
   ═══════════════════════════════════════════════════════════ */

// ─── ITINERARY ACCORDION ────────────────────────────────────
function renderDays() {
  const grid = document.getElementById('daysGrid');
  days.forEach((day, i) => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-header" onclick="toggleDay(${i})">
        <div class="day-number">${day.emoji}</div>
        <div class="day-title-wrap">
          <div class="day-title">Dag ${i + 1} — ${day.title}</div>
          <div class="day-date">${day.date}</div>
        </div>
        <div class="day-arrow">▼</div>
      </div>
      <div class="day-body">
        <div class="day-body-inner">
          <ul class="activity-list">
            ${day.activities.map(a => `<li><span class="time">${a.time}</span><span class="desc">${a.text}</span></li>`).join('')}
          </ul>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function toggleDay(index) {
  const cards = document.querySelectorAll('.day-card');
  cards.forEach((c, i) => { if (i !== index) c.classList.remove('open'); });
  cards[index].classList.toggle('open');
}

// ─── MAP (LEAFLET) ──────────────────────────────────────────
function initMap() {
  const map = L.map('mapContainer', { center: [41.3874, 2.1686], zoom: 13 });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map);

  const colours = { hotel: '#F0C040', activity: '#A855F7', transport: '#60A5FA' };

  mapPins.forEach(pin => {
    const colour = colours[pin.type] || '#A855F7';
    const marker = L.circleMarker([pin.lat, pin.lng], {
      radius: 10,
      color: colour,
      fillColor: colour,
      fillOpacity: 0.9,
      weight: 3,
      opacity: 1
    }).addTo(map);

    const mapsLink = pin.mapsUrl
      ? `<a href="${pin.mapsUrl}" target="_blank" style="display:inline-block;margin-top:10px;background:#A855F7;color:#fff;padding:6px 14px;border-radius:20px;font-size:.8rem;text-decoration:none;font-weight:600;">📍 Open in Google Maps</a>`
      : '';

    marker.bindPopup(`
      <div style="font-family:sans-serif;padding:2px">
        <strong style="color:#7C3AED;font-size:.95rem">${pin.label}</strong>
        <p style="font-size:.82rem;color:#888;margin:4px 0 0">${pin.desc}</p>
        <p style="font-size:.82rem;color:#555;margin:6px 0;line-height:1.45">${pin.info}</p>
        ${mapsLink}
      </div>
    `, { maxWidth: 250 });
  });
}

// ─── SPANISH PHRASES ────────────────────────────────────────
function renderSpanish() {
  const container = document.getElementById('spanishContainer');
  spanishPhrases.forEach((cat, ci) => {
    const section = document.createElement('div');
    section.className = 'phrase-category';
    section.innerHTML = `
      <div class="phrase-cat-header" onclick="togglePhraseCat(${ci})">
        <span class="phrase-cat-icon">${cat.emoji}</span>
        <span class="phrase-cat-title">${cat.category}</span>
        <span class="phrase-cat-arrow">▼</span>
      </div>
      <div class="phrase-cat-body" id="phraseCat${ci}">
        <div class="phrase-grid">
          ${cat.phrases.map(p => `
            <div class="phrase-card" onclick="speakSpanish(this, '${p.es.replace(/'/g, "\\'")}')">
              <div class="phrase-es">${p.es}</div>
              <div class="phrase-nl">${p.nl}</div>
              <div class="phrase-speak">🔊</div>
            </div>
          `).join('')}
        </div>
      </div>`;
    container.appendChild(section);
  });
}

function togglePhraseCat(index) {
  const body = document.getElementById(`phraseCat${index}`);
  const headers = document.querySelectorAll('.phrase-cat-header');
  const allBodies = document.querySelectorAll('.phrase-cat-body');
  const isOpen = body.classList.contains('open');
  allBodies.forEach(b => b.classList.remove('open'));
  headers.forEach(h => h.classList.remove('open'));
  if (!isOpen) {
    body.classList.add('open');
    headers[index].classList.add('open');
  }
}

function speakSpanish(el, text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-ES';
    utter.rate = 0.85;
    window.speechSynthesis.speak(utter);
    el.classList.add('speaking');
    setTimeout(() => el.classList.remove('speaking'), 1200);
  }
}

// ─── CONTACTS ───────────────────────────────────────────────
function renderContacts() {
  const grid = document.getElementById('contactsGrid');
  contacts.forEach(c => {
    const card = document.createElement('div');
    card.className = 'contact-card';
    card.innerHTML = `
      <div class="contact-emoji">${c.emoji}</div>
      <div class="contact-info">
        <div class="contact-name">${c.name}</div>
        <div class="contact-role">${c.role}</div>
        <a href="tel:${c.phone}" class="contact-phone">${c.phone}</a>
        <div class="contact-note">${c.note}</div>
      </div>`;
    grid.appendChild(card);
  });
}

// ─── CREDITS ────────────────────────────────────────────────
function renderCredits() {
  const grid = document.getElementById('creditsGrid');
  crew.forEach(person => {
    const card = document.createElement('div');
    card.className = 'credit-card';
    card.innerHTML = `
      <div class="credit-avatar">${person.emoji}</div>
      <h3>${person.name}</h3>
      <div class="role">${person.role}</div>
      <p>${person.bio}</p>`;
    grid.appendChild(card);
  });
}

// ─── NAVBAR SCROLL EFFECT ───────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ─── MOBILE MENU ────────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// ─── PWA INSTALL PROMPT ─────────────────────────────────────
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBanner').classList.remove('hidden');
});

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderDays();
  renderCredits();
  renderSpanish();
  renderContacts();
  initMap();

  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          document.getElementById('installBanner').classList.add('hidden');
        }
        deferredPrompt = null;
      }
    });
  }
});
