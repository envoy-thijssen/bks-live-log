const todayLineup = [
  {
    artist: 'WWEO',
    stage: 'TWO',
    slot: '16:30–17:15',
    weather: 'Licht bewolkt',
    seen: true,
    note: 'Vroege set met sterke energie; goed voorbeeld van hoe timetable-context en beoordeling samenkomen.'
  },
  {
    artist: 'Khruangbin',
    stage: 'ONE',
    slot: '18:45–19:45',
    weather: 'Droog',
    seen: true,
    note: 'Publiek zat er volledig in; dit is precies het soort act waarbij sfeer + live-ervaring belangrijk is.'
  },
  {
    artist: 'Jamie xx',
    stage: 'ONE',
    slot: '21:30–22:45',
    weather: 'Zachte avondlucht',
    seen: false,
    note: 'Nog op het programma; klaar om later via Telegram als gezien + rating binnen te komen.'
  },
  {
    artist: 'Eefje de Visser',
    stage: 'TWO',
    slot: '23:00–23:55',
    weather: 'Avond',
    seen: false,
    note: 'Mooie kandidaat om later te verrijken met korte review, score en persoonlijk hoogtepunt.'
  }
];

const ratingLog = [
  {
    artist: 'WWEO',
    rating: 8.2,
    shortReview: 'Sterke live energie, goede spanningsopbouw en verrassend strak.',
    stage: 'TWO',
    slot: '16:30–17:15',
    fields: ['energie 8.7', 'muzikaliteit 7.8', 'crowd 8.1']
  },
  {
    artist: 'Khruangbin',
    rating: 9.1,
    shortReview: 'Super gecontroleerd, hypnotiserend en live nóg beter dan verwacht.',
    stage: 'ONE',
    slot: '18:45–19:45',
    fields: ['muzikaliteit 9.4', 'sfeer 9.0', 'originaliteit 8.7']
  },
  {
    artist: 'Big Thief',
    rating: 8.6,
    shortReview: 'Intiem en sterk, meer emotionele impact dan spektakel.',
    stage: 'ONE',
    slot: 'archief 2023',
    fields: ['songkeuze 8.8', 'vocals 8.7', 'presence 8.3']
  },
  {
    artist: 'Aphex Twin',
    rating: 7.8,
    shortReview: 'Visueel en sonisch indrukwekkend, maar minder direct emotioneel dan gehoopt.',
    stage: 'ONE',
    slot: 'archief 2024',
    fields: ['impact 8.8', 'toegankelijkheid 6.5', 'originaliteit 9.3']
  }
];

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
          <span class="section-tag">${item.seen ? 'Gezien' : 'Nog te zien'}</span>
          <h3>${item.artist}</h3>
        </div>
        <div class="slot-chip">${item.weather}</div>
      </div>
      <div class="meta-row">
        <span class="stage-chip">Podium · ${item.stage}</span>
        <span class="slot-chip">${item.slot}</span>
      </div>
      <p>${item.note}</p>
    </article>
  `).join('');
}

function renderRatings() {
  const root = document.getElementById('ratings-grid');
  root.innerHTML = ratingLog.map(item => `
    <article class="rating-card">
      <div class="rating-top">
        <div>
          <span class="section-tag">Live log</span>
          <h3>${item.artist}</h3>
          <p>${item.stage} · ${item.slot}</p>
        </div>
        <div class="rating-badge ${ratingClass(item.rating)}">${item.rating.toFixed(1)}</div>
      </div>
      <p>${item.shortReview}</p>
      <div class="chip-row">
        ${item.fields.map(field => `<span class="rating-chip">${field}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderSummary() {
  const seen = todayLineup.filter(item => item.seen).length;
  const avg = ratingLog.reduce((sum, item) => sum + item.rating, 0) / ratingLog.length;
  document.getElementById('seen-count').textContent = `${seen} acts`;
  document.getElementById('avg-rating').textContent = avg.toFixed(1);

  const sample = {
    festival: 'Best Kept Secret',
    date: '2026-06-13',
    artist_name: 'Khruangbin',
    stage: 'ONE',
    scheduled_start: '18:45',
    scheduled_end: '19:45',
    seen_confirmed: true,
    rating_overall: 9.1,
    ratings: {
      muzikaliteit: 9.4,
      sfeer: 9.0,
      originaliteit: 8.7
    },
    review_short: 'Super gecontroleerd, hypnotiserend en live nóg beter dan verwacht.',
    weather: 'Droog, milde avond',
    source: 'telegram',
    match_confidence: 'high',
    years_seen: [2026]
  };

  document.getElementById('json-preview').textContent = JSON.stringify(sample, null, 2);
}

renderToday();
renderRatings();
renderSummary();
