# Uriesmooth Group Platform

The initial responsive company website and portfolio foundation for Uriesmooth Group.

## Current status

- Responsive HTML, CSS and JavaScript interface.
- Company services and preliminary Uriel product-family catalogue.
- Mobile navigation and local enquiry-draft helper.
- No backend, database, account system or production deployment yet.
- The enquiry form opens a draft in the visitor's email app; it does not send or store messages.

## Run locally

From this directory, start Python's static file server:

```bash
python -m http.server 8080 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8080` in a browser on the same device. Stop the server with `Ctrl+C`.

## Project files

- `index.html` — page content and structure.
- `styles.css` — responsive design.
- `app.js` — navigation and enquiry-draft interaction.

## Before production

Confirm company contact details, legal pages, privacy requirements, product status, accessibility, browser support, security requirements and hosting configuration. Never commit secrets or credentials.
