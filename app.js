function average(items) {
  if (!items.length) return 0;
  return items.reduce((sum, value) => sum + value, 0) / items.length;
}

function ratingClass(score) {
  if (score >= 9) return 'excellent';
  if (score >= 7) return 'good';
  return 'okay';
}

function formatRecordLabel(record) {
  if (record.type === 'festival') {
    return `${record.festival_name} · ${record.city}`;
  }
  return `Concert · ${record.city}`;
}

function groupAverages(records, valuesForRecord) {
  const buckets = new Map();
  records.forEach(record => {
    valuesForRecord(record).forEach(key => {
      if (!key) return;
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(record.performance.rating);
    });
  });

  return [...buckets.entries()]
    .map(([label, ratings]) => ({ label, count: ratings.length, avg: average(ratings) }))
    .sort((a, b) => b.avg - a.avg || b.count - a.count || a.label.localeCompare(b.label));
}

function renderHero(records) {
  const ratings = records.map(record => record.performance.rating);
  const top = [...records].sort((a, b) => b.performance.rating - a.performance.rating)[0];
  const cities = new Set(records.map(record => record.city));

  document.getElementById('hero-record-count').textContent = records.length;
  document.getElementById('hero-average-rating').textContent = average(ratings).toFixed(1);
  document.getElementById('hero-city-count').textContent = cities.size;
  document.getElementById('hero-top-score').textContent = `${top.performance.rating.toFixed(1)} · ${top.artist.name}`;
  document.getElementById('hero-microcopy').textContent = `Top of the archive right now: ${top.artist.name} in ${top.city}. ${records.filter(r => r.type === 'festival').length} festival logs and ${records.filter(r => r.type === 'concert').length} standalone concert log${records.filter(r => r.type === 'concert').length === 1 ? '' : 's'}.`;
}

function renderFestival(records) {
  const festivalRecords = records.filter(record => record.type === 'festival');
  const latestFestival = [...festivalRecords].sort((a, b) => b.performance.timestamp.localeCompare(a.performance.timestamp))[0];
  const key = `${latestFestival.festival_slug}-${latestFestival.year}`;
  const selected = festivalRecords.filter(record => `${record.festival_slug}-${record.year}` === key)
    .sort((a, b) => a.performance.timestamp.localeCompare(b.performance.timestamp));

  document.getElementById('festival-heading').textContent = `${latestFestival.festival_name} ${latestFestival.year}`;
  document.getElementById('festival-summary-pill').textContent = `${selected.length} seen · ${average(selected.map(item => item.performance.rating)).toFixed(1)} avg · ${selected[0].city}`;

  document.getElementById('festival-grid').innerHTML = selected.map(record => `
    <article class="artist-card">
      <div class="card-top">
        <div>
          <span class="section-tag">${record.performance.seen ? 'Seen' : 'Planned'}</span>
          <h3>${record.artist.name}</h3>
        </div>
        <div class="slot-chip">${record.performance.rating.toFixed(1)}</div>
      </div>
      <p><strong>${record.artist.description}</strong></p>
      <div class="meta-row">
        <span class="stage-chip">${record.performance.stage}</span>
        <span class="slot-chip">${record.performance.slot}</span>
      </div>
      <div class="meta-row">
        <span class="slot-chip">${record.artist.origin}</span>
        <span class="slot-chip">${record.artist.recognition}</span>
      </div>
      <div class="chip-row">
        ${record.artist.genres.map(genre => `<span class="rating-chip">${genre}</span>`).join('')}
      </div>
      <div class="chip-row">
        ${record.artist.vibes.map(vibe => `<span class="rating-chip vibe-chip">${vibe}</span>`).join('')}
      </div>
      <p>${record.performance.review}</p>
      <div class="meta-row">
        ${record.links.festival_page ? `<a class="button ghost" href="${record.links.festival_page}">Festival page</a>` : ''}
        ${record.links.official_site ? `<a class="button ghost" href="${record.links.official_site}">Official site</a>` : ''}
      </div>
    </article>
  `).join('');
}

function renderSpotlight(records) {
  const sorted = [...records].sort((a, b) => b.performance.rating - a.performance.rating);
  const top = sorted[0];
  const bottom = sorted[sorted.length - 1];
  const canon = records.filter(record => ['canon', 'headliner'].includes(record.artist.recognition)).map(record => record.performance.rating);
  const discoveries = records.filter(record => ['cult', 'rising'].includes(record.artist.recognition)).map(record => record.performance.rating);

  document.getElementById('ratings-spotlight').innerHTML = `
    <div class="spotlight-copy">
      <span class="section-tag">Archive pulse</span>
      <h3>Your personal canon is still being negotiated live</h3>
      <p><strong>${top.artist.name}</strong> currently shares the top spot at <strong>${top.performance.rating.toFixed(1)}</strong>, while <strong>${bottom.artist.name}</strong> sits at the bottom on <strong>${bottom.performance.rating.toFixed(1)}</strong>. Across ${records.length} performances, your overall average is <strong>${average(records.map(item => item.performance.rating)).toFixed(1)}</strong>.</p>
    </div>
    <div class="spotlight-metrics">
      <div>
        <span class="stat-label">Top tier</span>
        <strong>${sorted.filter(item => item.performance.rating >= 9).map(item => item.artist.name).join(' · ')}</strong>
      </div>
      <div>
        <span class="stat-label">Recognition tax</span>
        <strong>${average(discoveries).toFixed(1)} discovery vs ${average(canon).toFixed(1)} canon</strong>
      </div>
      <div>
        <span class="stat-label">Spread</span>
        <strong>${bottom.performance.rating.toFixed(1)} → ${top.performance.rating.toFixed(1)}</strong>
      </div>
    </div>
  `;
}

function renderArchive(records) {
  const sorted = [...records].sort((a, b) => b.performance.timestamp.localeCompare(a.performance.timestamp));

  document.getElementById('ratings-grid').innerHTML = sorted.map((record, index) => `
    <article class="rating-card ${index < 2 ? 'rating-card-top' : ''}">
      <div class="rating-top">
        <div>
          <span class="section-tag">#${index + 1} · ${record.type}</span>
          <h3>${record.artist.name}</h3>
          <p>${formatRecordLabel(record)} · ${record.date}</p>
          <p>${record.performance.stage} · ${record.performance.slot}</p>
        </div>
        <div class="rating-badge ${ratingClass(record.performance.rating)}">${record.performance.rating.toFixed(1)}</div>
      </div>
      <p>${record.performance.review}</p>
      <div class="meta-stack">
        <div><strong>Lead:</strong> ${record.artist.lead}${record.artist.lead_birth_year ? ` (${record.artist.lead_birth_year})` : ''}</div>
        <div><strong>Origin:</strong> ${record.artist.origin}</div>
      </div>
      <div class="chip-row">
        ${record.artist.genres.map(field => `<span class="rating-chip">${field}</span>`).join('')}
      </div>
      <div class="chip-row">
        ${record.artist.vibes.map(field => `<span class="rating-chip vibe-chip">${field}</span>`).join('')}
      </div>
      <div class="meta-row">
        ${record.links.official_site ? `<a class="button ghost" href="${record.links.official_site}">official</a>` : ''}
        ${record.links.wikipedia ? `<a class="button ghost" href="${record.links.wikipedia}">wiki</a>` : ''}
        ${record.links.festival_page ? `<a class="button ghost" href="${record.links.festival_page}">festival</a>` : ''}
      </div>
    </article>
  `).join('');
}

function renderMiniList(targetId, items, formatter) {
  document.getElementById(targetId).innerHTML = items.map(formatter).join('');
}

function renderStats(records) {
  const genres = groupAverages(records, record => record.artist.genres).slice(0, 6);
  const vibes = groupAverages(records, record => record.artist.vibes).slice(0, 6);
  const recognition = groupAverages(records, record => [record.artist.recognition]);
  const cities = groupAverages(records, record => [record.city]);

  const generationBuckets = {};
  records.forEach(record => {
    const year = record.artist.lead_birth_year;
    const label = year ? `${Math.floor(year / 10) * 10}s` : 'unknown';
    generationBuckets[label] = generationBuckets[label] || [];
    generationBuckets[label].push(record.performance.rating);
  });
  const generations = Object.entries(generationBuckets)
    .map(([label, ratings]) => ({ label, count: ratings.length, avg: average(ratings) }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const contrarian = [...records]
    .sort((a, b) => {
      const obscureA = ['cult', 'rising'].includes(a.artist.recognition) ? 1 : 0;
      const obscureB = ['cult', 'rising'].includes(b.artist.recognition) ? 1 : 0;
      return (b.performance.rating + obscureB) - (a.performance.rating + obscureA);
    })
    .slice(0, 5);

  renderMiniList('genre-leaderboard', genres, item => `
    <div class="mini-list-item">
      <strong>${item.label}</strong>
      <span>${item.avg.toFixed(1)} avg · ${item.count} log${item.count === 1 ? '' : 's'}</span>
    </div>
  `);

  renderMiniList('vibe-leaderboard', vibes, item => `
    <div class="mini-list-item">
      <strong>${item.label}</strong>
      <span>${item.avg.toFixed(1)} avg · ${item.count} appearance${item.count === 1 ? '' : 's'}</span>
    </div>
  `);

  renderMiniList('recognition-breakdown', recognition, item => `
    <div class="mini-list-item">
      <strong>${item.label}</strong>
      <span>${item.avg.toFixed(1)} avg · ${item.count} record${item.count === 1 ? '' : 's'}</span>
    </div>
  `);

  renderMiniList('city-breakdown', cities, item => `
    <div class="mini-list-item">
      <strong>${item.label}</strong>
      <span>${item.avg.toFixed(1)} avg · ${item.count} performance${item.count === 1 ? '' : 's'}</span>
    </div>
  `);

  renderMiniList('generation-breakdown', generations, item => `
    <div class="mini-list-item">
      <strong>${item.label}</strong>
      <span>${item.avg.toFixed(1)} avg · ${item.count} lead${item.count === 1 ? '' : 's'}</span>
    </div>
  `);

  renderMiniList('contrarian-picks', contrarian, record => `
    <div class="mini-list-item">
      <strong>${record.artist.name}</strong>
      <span>${record.performance.rating.toFixed(1)} · ${record.artist.recognition} · ${record.artist.genres[0]}</span>
    </div>
  `);
}

function renderJsonPreview(records) {
  document.getElementById('json-preview').textContent = JSON.stringify(records[0], null, 2);
}

async function loadArchive() {
  const manifest = await fetch('data/index.json').then(response => response.json());
  const records = await Promise.all(
    manifest.records.map(entry => fetch(`data/${entry.path}`).then(response => response.json()))
  );
  return records;
}

async function main() {
  try {
    const records = await loadArchive();
    renderHero(records);
    renderFestival(records);
    renderSpotlight(records);
    renderArchive(records);
    renderStats(records);
    renderJsonPreview(records);
  } catch (error) {
    console.error(error);
    document.getElementById('hero-microcopy').textContent = 'Could not load archive data. Check data/index.json and static hosting paths.';
  }
}

main();
