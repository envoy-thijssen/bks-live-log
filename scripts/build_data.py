import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data'

RECORDS = [
    {
        'path': 'festivals/best-kept-secret/2026/hiqpy.json',
        'id': 'best-kept-secret-2026-hiqpy',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Hiqpy',
            'slug': 'hiqpy',
            'description': 'Amsterdam indie rock band with a nervy shoegaze-and-post-punk edge; their official bio foregrounds a breakout Popronde 2023 run and a reputation for increasingly intense live shows.',
            'genres': ['indie rock', 'shoegaze', 'post-punk', 'alternative rock'],
            'lead': 'Abir Hamam',
            'lead_birth_year': None,
            'official_site': 'https://hiqpy.com/',
            'origin': 'Amsterdam, Netherlands',
            'vibes': ['tense', 'urgent', 'cathartic', 'brooding'],
            'recognition': 'rising',
            'source_urls': [
                'https://hiqpy.com/',
                'https://www.bestkeptsecret.nl/bands/hiqpy'
            ]
        },
        'performance': {
            'stage': 'TWO',
            'slot': '13:15–14:00',
            'timestamp': '2026-06-13T14:00:00+02:00',
            'seen': True,
            'rating': 6.3,
            'review': 'Redelijk, maar niet een set die echt boven de dag uitstak.',
            'weather': 'Overcast · middag',
            'tags': ['alt-rock', 'shoegaze', 'vandaag'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/hiqpy',
            'official_site': 'https://hiqpy.com/'
        },
        'sources': [
            {'type': 'official-site', 'label': 'Hiqpy official site', 'url': 'https://hiqpy.com/'},
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/hiqpy'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/weval-live.json',
        'id': 'best-kept-secret-2026-weval-live',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Weval (live)',
            'slug': 'weval-live',
            'description': 'Dutch electronic duo known for turning detailed studio sound design into an elastic live show with live drums, synths, and moody melodic builds.',
            'genres': ['electronic', 'indietronica', 'downtempo', 'house'],
            'lead': 'Harm Coolen & Merijn Scholte Albers',
            'lead_birth_year': None,
            'official_site': 'https://weval.bandcamp.com/',
            'origin': 'Amsterdam, Netherlands',
            'vibes': ['dreamy', 'hypnotic', 'warm', 'euphoric'],
            'recognition': 'cult',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/weval-live',
                'https://weval.bandcamp.com/'
            ]
        },
        'performance': {
            'stage': 'TWO',
            'slot': '14:45–15:45',
            'timestamp': '2026-06-13T15:45:00+02:00',
            'seen': True,
            'rating': 9.2,
            'review': 'Duidelijke dagtopper: rijk, gecontroleerd en live bijzonder sterk.',
            'weather': 'Overcast · namiddag',
            'tags': ['electro-acoustic', 'dreamy', 'dagtopper'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/weval-live',
            'official_site': 'https://weval.bandcamp.com/'
        },
        'sources': [
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/weval-live'},
            {'type': 'official-site', 'label': 'Weval Bandcamp', 'url': 'https://weval.bandcamp.com/'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/hayley-williams.json',
        'id': 'best-kept-secret-2026-hayley-williams',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Hayley Williams',
            'slug': 'hayley-williams',
            'description': 'American singer-songwriter best known as Paramore\'s frontperson, with a solo catalogue that mixes alternative pop, art-rock textures, and diaristic songwriting.',
            'genres': ['alternative pop', 'pop rock', 'art pop', 'emo pop'],
            'lead': 'Hayley Williams',
            'lead_birth_year': 1988,
            'official_site': 'https://www.hayleywilliams.com/',
            'origin': 'Meridian, Mississippi, United States',
            'vibes': ['restless', 'emotional', 'bright', 'confessional'],
            'recognition': 'headliner',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/hayley-williams',
                'https://en.wikipedia.org/wiki/Hayley_Williams',
                'https://www.hayleywilliams.com/'
            ]
        },
        'performance': {
            'stage': 'ONE',
            'slot': '17:45–18:45',
            'timestamp': '2026-06-13T18:45:00+02:00',
            'seen': True,
            'rating': 6.8,
            'review': 'Interessant, maar voor jou duidelijk minder overtuigend dan de status van de naam doet vermoeden.',
            'weather': 'Koele avondstart',
            'tags': ['pop', 'Paramore', 'mixed'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/hayley-williams',
            'official_site': 'https://www.hayleywilliams.com/',
            'wikipedia': 'https://en.wikipedia.org/wiki/Hayley_Williams'
        },
        'sources': [
            {'type': 'wikipedia', 'label': 'Wikipedia summary', 'url': 'https://en.wikipedia.org/wiki/Hayley_Williams'},
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/hayley-williams'},
            {'type': 'official-site', 'label': 'Hayley Williams official site', 'url': 'https://www.hayleywilliams.com/'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/nation-of-language.json',
        'id': 'best-kept-secret-2026-nation-of-language',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Nation of Language',
            'slug': 'nation-of-language',
            'description': 'Brooklyn trio mining the romantic end of synth-pop and minimal wave, usually built around Ian Devaney\'s melancholic vocals and clean analogue hooks.',
            'genres': ['synth-pop', 'new wave', 'indie pop', 'minimal wave'],
            'lead': 'Ian Devaney',
            'lead_birth_year': None,
            'official_site': 'https://www.nationoflanguage.com/',
            'origin': 'Brooklyn, New York, United States',
            'vibes': ['melancholic', 'cool', 'romantic', 'nostalgic'],
            'recognition': 'cult',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/nation-of-language',
                'https://en.wikipedia.org/wiki/Nation_of_Language',
                'https://www.nationoflanguage.com/'
            ]
        },
        'performance': {
            'stage': 'TWO',
            'slot': '18:45–19:45',
            'timestamp': '2026-06-13T19:45:00+02:00',
            'seen': True,
            'rating': 7.4,
            'review': 'Solide set met duidelijke synth-pop identiteit, maar niet helemaal top-tier voor jou.',
            'weather': 'Avond · droog bewolkt',
            'tags': ['synth-pop', 'new wave', 'net positief'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/nation-of-language',
            'official_site': 'https://www.nationoflanguage.com/',
            'wikipedia': 'https://en.wikipedia.org/wiki/Nation_of_Language'
        },
        'sources': [
            {'type': 'wikipedia', 'label': 'Wikipedia summary', 'url': 'https://en.wikipedia.org/wiki/Nation_of_Language'},
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/nation-of-language'},
            {'type': 'official-site', 'label': 'Nation of Language official site', 'url': 'https://www.nationoflanguage.com/'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/job-jobse.json',
        'id': 'best-kept-secret-2026-job-jobse',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Job Jobse',
            'slug': 'job-jobse',
            'description': 'Amsterdam DJ with a reputation for marathon, high-emotion house and trance sets that move from playful left turns into total hands-in-the-air release.',
            'genres': ['house', 'trance', 'electronic', 'club'],
            'lead': 'Job Jobse',
            'lead_birth_year': None,
            'official_site': None,
            'origin': 'Amsterdam, Netherlands',
            'vibes': ['euphoric', 'playful', 'ecstatic', 'communal'],
            'recognition': 'cult',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/job-jobse'
            ]
        },
        'performance': {
            'stage': 'Best Kept Secret 2026',
            'slot': 'Zelfde festival · tijd nog aanvullen',
            'timestamp': '2026-06-13T23:30:00+02:00',
            'seen': True,
            'rating': 9.7,
            'review': 'Absurd sterke set: totale controle, euforie en meteen de onbetwiste nieuwe dag- en festivaltopper.',
            'weather': 'Late night festival close',
            'tags': ['dj set', 'euforie', 'absolute topper'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/job-jobse'
        },
        'sources': [
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/job-jobse'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/wolf-alice.json',
        'id': 'best-kept-secret-2026-wolf-alice',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Wolf Alice',
            'slug': 'wolf-alice',
            'description': 'London rock band that grew from an acoustic duo into one of the UK\'s most shape-shifting guitar acts, balancing grunge force, dream-pop drift, and festival-sized choruses.',
            'genres': ['alternative rock', 'indie rock', 'dream pop', 'grunge'],
            'lead': 'Ellie Rowsell',
            'lead_birth_year': 1992,
            'official_site': 'https://www.wolfalice.co.uk/',
            'origin': 'London, England',
            'vibes': ['feral', 'melodic', 'surging', 'wistful'],
            'recognition': 'headliner',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/wolf-alice',
                'https://en.wikipedia.org/wiki/Wolf_Alice',
                'https://www.wolfalice.co.uk/'
            ]
        },
        'performance': {
            'stage': 'Best Kept Secret 2026',
            'slot': 'Zelfde festival · tijd nog aanvullen',
            'timestamp': '2026-06-13T20:30:00+02:00',
            'seen': True,
            'rating': 8.4,
            'review': 'Sterke festival-set met genoeg punch en melodie om meteen in de bovenste regionen van je daglijst te landen.',
            'weather': 'Prime-time evening',
            'tags': ['indie rock', 'energiek', 'sterk'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/wolf-alice',
            'official_site': 'https://www.wolfalice.co.uk/',
            'wikipedia': 'https://en.wikipedia.org/wiki/Wolf_Alice'
        },
        'sources': [
            {'type': 'wikipedia', 'label': 'Wikipedia summary', 'url': 'https://en.wikipedia.org/wiki/Wolf_Alice'},
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/wolf-alice'},
            {'type': 'official-site', 'label': 'Wolf Alice official site', 'url': 'https://www.wolfalice.co.uk/'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/tramhaus.json',
        'id': 'best-kept-secret-2026-tramhaus',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Tramhaus',
            'slug': 'tramhaus',
            'description': 'Rotterdam post-punk band built for velocity: wiry guitars, barked vocals, and the kind of live intensity that turns every song into a small riot.',
            'genres': ['post-punk', 'art punk', 'indie rock'],
            'lead': 'Lukas Jansen',
            'lead_birth_year': None,
            'official_site': 'https://www.tramhaus.com/',
            'origin': 'Rotterdam, Netherlands',
            'vibes': ['urgent', 'chaotic', 'wired', 'sweaty'],
            'recognition': 'rising',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/tramhaus',
                'https://www.tramhaus.com/'
            ]
        },
        'performance': {
            'stage': 'Best Kept Secret 2026',
            'slot': 'Zelfde festival · tijd nog aanvullen',
            'timestamp': '2026-06-13T21:00:00+02:00',
            'seen': True,
            'rating': 7.3,
            'review': 'Goede intensiteit en karakter, maar voor jou net geen absolute uitschieter binnen dezelfde festivaldag.',
            'weather': 'Evening rush',
            'tags': ['post-punk', 'urgent', 'goed'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/tramhaus',
            'official_site': 'https://www.tramhaus.com/'
        },
        'sources': [
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/tramhaus'},
            {'type': 'official-site', 'label': 'Tramhaus official site', 'url': 'https://www.tramhaus.com/'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'festivals/best-kept-secret/2026/nick-cave-and-the-bad-seeds.json',
        'id': 'best-kept-secret-2026-nick-cave-and-the-bad-seeds',
        'type': 'festival',
        'festival_slug': 'best-kept-secret',
        'festival_name': 'Best Kept Secret',
        'year': 2026,
        'date': '2026-06-13',
        'city': 'Hilvarenbeek',
        'country': 'Netherlands',
        'artist': {
            'name': 'Nick Cave & The Bad Seeds',
            'slug': 'nick-cave-and-the-bad-seeds',
            'description': 'Long-running Australian rock institution mixing gothic blues, scripture-grade melodrama, and slow-burning emotional grandeur around Nick Cave\'s towering presence.',
            'genres': ['art rock', 'post-punk', 'gothic rock', 'alternative rock'],
            'lead': 'Nick Cave',
            'lead_birth_year': 1957,
            'official_site': 'https://www.nickcave.com/',
            'origin': 'Melbourne, Australia',
            'vibes': ['dark', 'grave', 'intense', 'majestic'],
            'recognition': 'canon',
            'source_urls': [
                'https://www.bestkeptsecret.nl/bands/nick-cave-the-bad-seeds',
                'https://en.wikipedia.org/wiki/Nick_Cave_and_the_Bad_Seeds',
                'https://www.nickcave.com/'
            ]
        },
        'performance': {
            'stage': 'Best Kept Secret 2026',
            'slot': 'Zelfde festival · tijd nog aanvullen',
            'timestamp': '2026-06-13T22:30:00+02:00',
            'seen': True,
            'rating': 7.5,
            'review': 'Zwaar charisma en grote naam, maar in jouw ranking uiteindelijk degelijker dan transcendent.',
            'weather': 'Headliner night air',
            'tags': ['headliner', 'dark', 'goed'],
            'day_label': 'Saturday'
        },
        'links': {
            'festival_page': 'https://www.bestkeptsecret.nl/bands/nick-cave-the-bad-seeds',
            'official_site': 'https://www.nickcave.com/',
            'wikipedia': 'https://en.wikipedia.org/wiki/Nick_Cave_and_the_Bad_Seeds'
        },
        'sources': [
            {'type': 'wikipedia', 'label': 'Wikipedia summary', 'url': 'https://en.wikipedia.org/wiki/Nick_Cave_and_the_Bad_Seeds'},
            {'type': 'festival', 'label': 'Best Kept Secret artist page', 'url': 'https://www.bestkeptsecret.nl/bands/nick-cave-the-bad-seeds'},
            {'type': 'official-site', 'label': 'Nick Cave official site', 'url': 'https://www.nickcave.com/'},
            {'type': 'repo-legacy', 'label': 'Original app.js seed data', 'url': 'local:app.js'}
        ]
    },
    {
        'path': 'concerts/2026/tame-impala-duesseldorf.json',
        'id': 'concert-2026-tame-impala-duesseldorf',
        'type': 'concert',
        'festival_slug': None,
        'festival_name': None,
        'year': 2026,
        'date': '2026-05-01',
        'city': 'Düsseldorf',
        'country': 'Germany',
        'artist': {
            'name': 'Tame Impala',
            'slug': 'tame-impala',
            'description': 'Kevin Parker\'s psychedelic project, famous for turning studio maximalism into a live set of liquid grooves, huge low-end, and very expensive-sounding melancholy.',
            'genres': ['psychedelic rock', 'neo-psychedelia', 'indie rock', 'synth-pop'],
            'lead': 'Kevin Parker',
            'lead_birth_year': 1986,
            'official_site': 'https://www.tameimpala.com/',
            'origin': 'Perth, Australia',
            'vibes': ['trippy', 'lush', 'euphoric', 'melancholic'],
            'recognition': 'canon',
            'source_urls': [
                'https://en.wikipedia.org/wiki/Tame_Impala',
                'https://www.tameimpala.com/'
            ]
        },
        'performance': {
            'stage': 'Standalone concert',
            'venue': 'PSD BANK DOME',
            'doors': '18:00',
            'start_time': '19:30',
            'slot': 'Doors 18:00 · show 19:30',
            'timestamp': '2026-05-01T19:30:00+02:00',
            'seen': True,
            'rating': 9.7,
            'review': 'Huge psychedelic glow, absurdly immersive sound, and the kind of concert that immediately becomes a benchmark.',
            'weather': None,
            'tags': ['psychedelic', 'benchmark', 'euphoria'],
            'day_label': 'Friday'
        },
        'links': {
            'official_site': 'https://www.tameimpala.com/',
            'wikipedia': 'https://en.wikipedia.org/wiki/Tame_Impala',
            'venue_page': 'https://www.psd-bank-dome.de/event/tame-impala-01-05-2026'
        },
        'sources': [
            {'type': 'wikipedia', 'label': 'Wikipedia summary', 'url': 'https://en.wikipedia.org/wiki/Tame_Impala'},
            {'type': 'official-site', 'label': 'Tame Impala official site', 'url': 'https://www.tameimpala.com/'},
            {'type': 'venue', 'label': 'PSD BANK DOME event page', 'url': 'https://www.psd-bank-dome.de/event/tame-impala-01-05-2026'},
            {'type': 'user-input', 'label': 'User-provided concert metadata', 'url': 'telegram:current-session'}
        ]
    }
]


def build_index(records):
    ratings = [record['performance']['rating'] for record in records if record['performance']['rating'] is not None]
    cities = sorted({record['city'] for record in records if record['city']})
    festivals = sorted({record['festival_name'] for record in records if record['festival_name']})
    return {
        'generated_at': '2026-06-14T22:30:00+02:00',
        'record_count': len(records),
        'festival_count': len(festivals),
        'city_count': len(cities),
        'average_rating': round(sum(ratings) / len(ratings), 2),
        'records': [
            {
                'id': record['id'],
                'path': record['path'],
                'artist': record['artist']['name'],
                'date': record['date'],
                'rating': record['performance']['rating'],
                'type': record['type'],
                'city': record['city'],
                'festival_name': record['festival_name']
            }
            for record in sorted(records, key=lambda item: item['performance']['timestamp'], reverse=True)
        ]
    }


def main():
    for record in RECORDS:
        path = DATA / record['path']
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(record, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')

    readme = DATA / 'README.md'
    readme.write_text(
        '# Music archive data\n\n'
        'Each performance lives in its own JSON file.\\n\\n'
        '- `festivals/<festival-slug>/<year>/<artist-slug>.json` for festival appearances\\n'
        '- `concerts/<year>/<artist-slug>-<city-slug>.json` for standalone concerts\\n'
        '- `index.json` is a generated manifest the static frontend can fetch first\\n',
        encoding='utf-8'
    )

    index = build_index(RECORDS)
    (DATA / 'index.json').write_text(json.dumps(index, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')

    print(f'Wrote {len(RECORDS)} records to {DATA}')


if __name__ == '__main__':
    main()
