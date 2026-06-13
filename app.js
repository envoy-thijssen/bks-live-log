const todayLineup = [
  {
    artist: 'Hiqpy',
    subtitle: 'Hot-blooded shoegaze/alt-rock sensation',
    stage: 'TWO',
    slot: '13:15–14:00',
    timestamp: '2026-06-13T13:15:00+02:00',
    weather: 'Overcast · middag',
    seen: true,
    note: 'Amsterdam quartet with scene-stealing stage dramatics and scorching melodies. Logged today at Best Kept Secret 2026.',
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/hiqpy'
  },
  {
    artist: 'Weval (live)',
    subtitle: 'Tasteful electro-acoustic dream weavers',
    stage: 'TWO',
    slot: '14:45–15:45',
    timestamp: '2026-06-13T14:45:00+02:00',
    weather: 'Overcast · namiddag',
    seen: true,
    note: 'Dutch duo balancing studious tinkering with spontaneous live instrumentation; one of the strongest ratings of the day.',
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/weval-live'
  },
  {
    artist: 'Hayley Williams',
    subtitle: 'Paramore icon & eclectic pop star',
    stage: 'ONE',
    slot: '17:45–18:45',
    timestamp: '2026-06-13T17:45:00+02:00',
    weather: 'Koele avondstart',
    seen: true,
    note: 'Festival page frames her as both Paramore icon and singular solo artist; your score lands this as more mixed than the hype.',
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/hayley-williams'
  },
  {
    artist: 'Nation of Language',
    subtitle: 'New York synth pop torchbearers',
    stage: 'TWO',
    slot: '18:45–19:45',
    timestamp: '2026-06-13T18:45:00+02:00',
    weather: 'Avond · droog bewolkt',
    seen: true,
    note: 'Positioned by BKS as heirs to the Kraftwerk / New Order / LCD Soundsystem continuum. Clean timestamped entry for today.',
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/nation-of-language'
  }
];

const ratingLog = [
  {
    artist: 'Wolf Alice',
    rating: 8.4,
    shortReview: 'Sterke festival-set met genoeg punch en melodie om meteen in de bovenste regionen van je daglijst te landen.',
    stage: 'Best Kept Secret 2026',
    slot: 'Zelfde festival · tijd nog aanvullen',
    timestamp: '2026-06-13T20:30:00+02:00',
    fields: ['indie rock', 'energiek', 'sterk'],
    sourceUrl: 'https://www.bestkeptsecret.nl/'
  },
  {
    artist: 'Tramhaus',
    rating: 7.3,
    shortReview: 'Goede intensiteit en karakter, maar voor jou net geen absolute uitschieter binnen dezelfde festivaldag.',
    stage: 'Best Kept Secret 2026',
    slot: 'Zelfde festival · tijd nog aanvullen',
    timestamp: '2026-06-13T21:00:00+02:00',
    fields: ['post-punk', 'urgent', 'goed'],
    sourceUrl: 'https://www.bestkeptsecret.nl/'
  },
  {
    artist: 'Nick Cave',
    rating: 7.5,
    shortReview: 'Zwaar charisma en grote naam, maar in jouw ranking uiteindelijk degelijker dan transcendent.',
    stage: 'Best Kept Secret 2026',
    slot: 'Zelfde festival · tijd nog aanvullen',
    timestamp: '2026-06-13T22:30:00+02:00',
    fields: ['headliner', 'dark', 'goed'],
    sourceUrl: 'https://www.bestkeptsecret.nl/'
  },
  {
    artist: 'Hiqpy',
    rating: 6.3,
    shortReview: 'Redelijk, maar niet een set die echt boven de dag uitstak.',
    stage: 'TWO',
    slot: '13:15–14:00',
    timestamp: '2026-06-13T14:00:00+02:00',
    fields: ['alt-rock', 'shoegaze', 'vandaag'],
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/hiqpy'
  },
  {
    artist: 'Weval (live)',
    rating: 9.2,
    shortReview: 'Duidelijke dagtopper: rijk, gecontroleerd en live bijzonder sterk.',
    stage: 'TWO',
    slot: '14:45–15:45',
    timestamp: '2026-06-13T15:45:00+02:00',
    fields: ['electro-acoustic', 'dreamy', 'dagtopper'],
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/weval-live'
  },
  {
    artist: 'Hayley Williams',
    rating: 6.8,
    shortReview: 'Interessant, maar voor jou duidelijk minder overtuigend dan de status van de naam doet vermoeden.',
    stage: 'ONE',
    slot: '17:45–18:45',
    timestamp: '2026-06-13T18:45:00+02:00',
    fields: ['pop', 'Paramore', 'mixed'],
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/hayley-williams'
  },
  {
    artist: 'Nation of Language',
    rating: 7.4,
    shortReview: 'Solide set met duidelijke synth-pop identiteit, maar niet helemaal top-tier voor jou.',
    stage: 'TWO',
    slot: '18:45–19:45',
    timestamp: '2026-06-13T19:45:00+02:00',
    fields: ['synth-pop', 'new wave', 'net positief'],
    sourceUrl: 'https://www.bestkeptsecret.nl/bands/nation-of-language'
  }
];

const sortedRatings = [...ratingLog].sort((a, b) => b.rating - a.rating);

function ratingClass(score) {
  if (score >= 9) return 'excellent';
  if (score >= 7) return 'good';
  return 'okay';
}

function renderToday() {
  const root = document.getElementById('today-grid');
  root.innerHTML = todayLineup.map(item => `
    <article class="artist-card">
      <div class="card-top">
        <div>
          <span class="section-tag">${item.seen ? 'Gezien vandaag' : 'Nog te zien'}</span>
          <h3>${item.artist}</h3>
        </div>
        <div class="slot-chip">${item.weather}</div>
      </div>
      <p><strong>${item.subtitle}</strong></p>
      <div class="meta-row">
        <span class="stage-chip">Podium · ${item.stage}</span>
        <span class="slot-chip">${item.slot}</span>
      </div>
      <div class="meta-row">
        <span class="slot-chip">timestamp · ${item.timestamp}</span>
      </div>
      <p>${item.note}</p>
      <div class="meta-row">
        <a class="button ghost" href="${item.sourceUrl}">BKS artist page</a>
      </div>
    </article>
  `).join('');
}

function renderSpotlight() {
  const root = document.getElementById('ratings-spotlight');
  const top = sortedRatings[0];
  const bottom = sortedRatings[sortedRatings.length - 1];
  const average = sortedRatings.reduce((sum, item) => sum + item.rating, 0) / sortedRatings.length;

  root.innerHTML = `
    <div class="spotlight-copy">
      <span class="section-tag">Dagbeeld</span>
      <h3>Cooler snapshot van je festivaldag</h3>
      <p><strong>${top.artist}</strong> voert nu je ranking aan met <strong>${top.rating.toFixed(1)}</strong>, terwijl <strong>${bottom.artist}</strong> de onderkant markeert op <strong>${bottom.rating.toFixed(1)}</strong>. Gemiddeld zit je op <strong>${average.toFixed(1)}</strong> over ${sortedRatings.length} gelogde sets.</p>
    </div>
    <div class="spotlight-metrics">
      <div>
        <span class="stat-label">Top pick</span>
        <strong>${top.artist}</strong>
      </div>
      <div>
        <span class="stat-label">Nieuwe toevoegingen</span>
        <strong>Wolf Alice · Tramhaus · Nick Cave</strong>
      </div>
      <div>
        <span class="stat-label">Score range</span>
        <strong>${bottom.rating.toFixed(1)} → ${top.rating.toFixed(1)}</strong>
      </div>
    </div>
  `;
}

function renderRatings() {
  const root = document.getElementById('ratings-grid');
  root.innerHTML = sortedRatings.map((item, index) => `
    <article class="rating-card ${index === 0 ? 'rating-card-top' : ''}">
      <div class="rating-top">
        <div>
          <span class="section-tag">#${index + 1} · Live log · vandaag</span>
          <h3>${item.artist}</h3>
          <p>${item.stage} · ${item.slot}</p>
          <p>timestamp · ${item.timestamp}</p>
        </div>
        <div class="rating-badge ${ratingClass(item.rating)}">${item.rating.toFixed(1)}</div>
      </div>
      <p>${item.shortReview}</p>
      <div class="chip-row">
        ${item.fields.map(field => `<span class="rating-chip">${field}</span>`).join('')}
      </div>
      <div class="meta-row">
        <a class="button ghost" href="${item.sourceUrl}">bron</a>
      </div>
    </article>
  `).join('');
}

function renderSummary() {
  const seen = todayLineup.filter(item => item.seen).length;
  const avg = sortedRatings.reduce((sum, item) => sum + item.rating, 0) / sortedRatings.length;
  document.getElementById('seen-count').textContent = `${seen} acts`;
  document.getElementById('avg-rating').textContent = avg.toFixed(1);

  const sample = {
    festival: 'Best Kept Secret 2026',
    date: '2026-06-13',
    artist_name: 'Weval (live)',
    stage: 'TWO',
    scheduled_start: '14:45',
    scheduled_end: '15:45',
    seen_confirmed: true,
    rating_overall: 9.2,
    review_short: 'Duidelijke dagtopper: rijk, gecontroleerd en live bijzonder sterk.',
    weather: 'Overcast, 16°C, wind 20 km/h',
    source: 'telegram',
    match_confidence: 'high',
    bks_source_url: 'https://www.bestkeptsecret.nl/bands/weval-live',
    captured_at: '2026-06-13T15:45:00+02:00',
    years_seen: [2026]
  };

  document.getElementById('json-preview').textContent = JSON.stringify(sample, null, 2);
}

renderToday();
renderSpotlight();
renderRatings();
renderSummary();
