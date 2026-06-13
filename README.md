# Best Kept Secret Live Log Dashboard

Static GitHub Pages prototype for tracking festival artists, ratings, timetable context, and personal notes.

## Files
- `index.html` — dashboard shell
- `styles.css` — visual system
- `app.js` — sample festival/timetable/rating data

## Intended future flow
1. Telegram/Hermes captures a rating message.
2. Hermes matches artist + stage + time slot.
3. Hermes writes a JSON record.
4. GitHub Pages dashboard reads those records and shows the archive.

## Deployment
This project is static and can be published directly with GitHub Pages from the root branch.
