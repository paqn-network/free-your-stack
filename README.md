# Free Your Stack

Tick the paid software your organisation uses (Microsoft 365, Slack, Zoom, Mailchimp, Canva and so on) and get free, open-source alternatives you can actually adopt, plus a migration checklist you can copy or download as Markdown.

Live at [paqn.network/resources/free-your-stack](https://paqn.network/resources/free-your-stack).

## Privacy

Everything runs in your browser. Nothing you select is sent anywhere: no accounts, no analytics, no cookies, no third-party requests (fonts are bundled).

## Run it yourself

```bash
npm install
npm run dev      # local dev server
npm run build    # static site in dist/
```

The build output is plain static files, so it can be hosted anywhere (GitHub Pages, Netlify, your own server).

## Changing the recommendations

All categories and tools live in [`src/data/stack.ts`](src/data/stack.ts). Each tool has an effort level:

- `ready`: anyone can start using it today
- `setup`: needs some technical work
- `managed`: best run by someone who hosts it for you

Suggestions and corrections are welcome as issues or pull requests.

## Licence

Code: [GNU AGPL v3.0](LICENSE). You can use, change and share it; if you run a modified version as a public service, you must publish your changes under the same licence.

Fonts: SIL Open Font License 1.1, see [`public/fonts/OFL-NOTICE.txt`](public/fonts/OFL-NOTICE.txt).

## About

Made by [PAQN CIC](https://paqn.network), a UK community interest company (no. 17392031) building open technology for civil society. Contact: hello@paqn.network
