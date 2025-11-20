
# Wild Destinations — HTTP JSON API

A minimal Node.js HTTP server that serves a small in-memory dataset of interesting places and provides simple filtering endpoints. Ready to push to GitHub.

## Repository layout
- server.js — main HTTP server wiring routes and handlers.
- database/db.js — loads and returns the dataset.
- data/data.js — in-memory dataset (array of destinations).
- utility/sendJSON.js — helper to send JSON responses with CORS headers.
- utility/QueryParamsFilter.js — query-string filtering helper.
- utility/placeFilter.js — location-based filter helper.

## What it does
- Serves JSON responses with CORS enabled for GET.
- Routes:
  - GET /api — returns full dataset or filtered by query parameters.
  - GET /api/continent/:continentName — returns places matching continent.
  - GET /api/country/:countryName — returns places matching country.

Utilities are small helpers used by server.js to filter data and send responses.

## API / Examples
Fetch all items:
```sh
curl -sS http://localhost:8000/api
```

Filter by query (e.g., continent=Asia):
```sh
curl -sS "http://localhost:8000/api?continent=Asia"
```

Filter by path (continent):
```sh
curl -sS http://localhost:8000/api/continent/Asia
```

Filter by path (country with space encoded):
```sh
curl -sS http://localhost:8000/api/country/United%20States
```

## Run locally
1. Clone the repo and open in terminal (macOS):
```sh
cd "/Users/roshan/Desktop/web dev/NodeJs"
npm install   # if you add deps; not required for this minimal setup
npm start     # or: node server.js
```
2. Server listens on port 8000 by default.

## Notes before pushing to GitHub
- Dataset is in-memory (data/data.js). For persistence, replace database/db.js to load from file or DB.
- CORS currently allows all origins and only GET. Adjust sendJSON.js headers for other methods or stricter policies.
- Validate and sanitize inputs for production use.
- Add tests and CI before publishing.

## Contributing & License
- Open PRs or issues for improvements.
- Add a license file before publishing if required.

