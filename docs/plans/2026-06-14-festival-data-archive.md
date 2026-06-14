# Festival/Concert Data Archive + Stats Page Implementation Plan

> **For Hermes:** implement directly in this repo using the static-site path; no backend required.

**Goal:** Convert the current hardcoded festival dashboard into a file-backed music archive with one enriched JSON file per performance, migrate the existing Best Kept Secret 2026 entries, add the Tame Impala Düsseldorf 2026-05-01 concert, and ship a new statistics page/music-snob view.

**Architecture:** Keep the site fully static. Store each performance as its own JSON file under a deterministic folder structure, add a generated manifest so the browser can load records without directory listing, and refactor `app.js` into a data-loading/rendering app that powers both the main dashboard and a new statistics surface.

**Tech stack:** Static HTML/CSS/JS, JSON data files, small Python generation script for manifest + scraped enrichment, GitHub Pages-compatible fetch flow.

---

## Requested structure

- Festivals: `data/festivals/<festival-slug>/<year>/<artist-slug>.json`
- Standalone concerts: `data/concerts/<year>/<artist-slug>-<city-slug>.json`
- Generated manifest: `data/index.json`

Each record should contain both:
- performance metadata (festival/concert/date/city/stage/slot/rating/review)
- embedded artist metadata (description/genres/lead birth year/official site/vibe categories/source links)

## Execution tasks

### Task 1: Inventory the current hardcoded dataset
**Files:**
- Read: `app.js`
- Read: `index.html`
- Read: `styles.css`

**Output:** exact list of current unique artists/performances, current UI sections, and fields to preserve.

### Task 2: Define the normalized JSON schema
**Files:**
- Create: `data/README.md`
- Create: `data/index.json` (generated later)
- Create examples in final destination folders

**Schema needs:**
- `id`, `type`, `festival_slug`, `festival_name`, `year`, `date`, `city`, `country`
- `artist` object with `name`, `slug`, `description`, `genres`, `lead`, `lead_birth_year`, `official_site`, `origin`, `vibes`, `source_urls`
- `performance` object with `stage`, `slot`, `timestamp`, `seen`, `rating`, `review`, `weather`, `tags`
- `links` object for official/festival/wiki/etc.

### Task 3: Scrape/enrich source data
**Files:**
- Create: `scripts/build_data.py`

**Work:**
- Use festival artist pages, MusicBrainz, Wikipedia/Wikidata, and carefully curated manual overrides where APIs are weak.
- Preserve provenance in each JSON record with `sources` arrays.
- Add the new standalone concert record for Tame Impala in Düsseldorf on 2026-05-01 with rating 9.7.

### Task 4: Materialize the repo data files
**Files:**
- Create: `data/festivals/best-kept-secret/2026/*.json`
- Create: `data/concerts/2026/*.json`
- Create/update: `data/index.json`

**Work:**
- Migrate all existing items from the current dashboard.
- Ensure records are self-contained and do not depend on the festival site remaining stable.

### Task 5: Refactor the frontend to load from data files
**Files:**
- Modify: `index.html`
- Replace: `app.js`

**Work:**
- Fetch `data/index.json`, then fetch each JSON record.
- Rebuild today/archive/rating components from loaded records.
- Update copy so the app is no longer BKS-only and reflects the new archive model.

### Task 6: Add a music-snob statistics page/section
**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `app.js`

**Work:**
- Add a stats navigation target.
- Surface more interesting analytics than simple averages, e.g.:
  - highest-rated genres and vibes
  - mood distribution
  - “canon vs personal score” framing / veteran tax
  - strongest cities/festivals
  - artists by lead generation / era
  - top-tier list and contrarian picks

### Task 7: Verify locally
**Files:**
- Run local static server
- Open in browser
- Confirm data renders, stats render, and JSON fetches work from static hosting assumptions.

### Task 8: Summarize exact changes and blockers
**Deliverables:**
- paths created/updated
- what was scraped vs curated manually
- any missing/low-confidence artist facts still worth revisiting later
