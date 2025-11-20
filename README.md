
# Wild Destinations — HTTP JSON API

A small, minimal Node.js HTTP server that serves an in-memory dataset of interesting travel destinations and provides simple filtering endpoints. This repository is intended as a learning/demo project and is ready to be pushed to GitHub.

## Quick overview

- Server: minimal HTTP server in `server.js`.
- Data: an in-memory array of destination objects in `data/data.js` (loaded via `database/db.js`).
- Utilities: small helpers live in the `utility/` folder (`sendJSON.js`, `QueryParamsFilter.js`, `placeFilter.js`).

The API returns JSON and includes basic CORS headers for GET requests.

## Features

- GET /api — return the full dataset or filtered results using query parameters.
- GET /api?continent=Asia&country=Japan — filter with query string keys handled by `utility/QueryParamsFilter.js`.
- GET /api/continent/:continentName — return places for a given continent (uses `utility/placeFilter.js`).
- GET /api/country/:countryName — return places for a given country (URL-encoded names supported).

## API Examples

Fetch all items:

```sh
curl -sS http://localhost:8000/api
```

Filter by query (example: continent=Asia):

```sh
curl -sS "http://localhost:8000/api?continent=Asia"
```

Filter by path (continent):

```sh
curl -sS http://localhost:8000/api/continent/Asia
```

Filter by path (country, space encoded):

```sh
curl -sS http://localhost:8000/api/country/United%20States
```

Responses are JSON arrays of destination objects. Each object typically includes fields such as `name`, `country`, `continent`, and optional metadata.

## Run locally

1. Open the project directory in your terminal (example path on macOS shown):

```sh
cd "/Users/roshan/Desktop/web dev/NodeJs"
```

2. Install dependencies (this project is minimal and may not have external dependencies):

```sh
npm install
```

3. Start the server:

```sh
npm start
# or
node server.js
```

4. Open a separate terminal and try the examples in the API Examples section. By default the server listens on port 8000.

## Files of interest

- `server.js` — main HTTP server and route handlers.
- `database/db.js` — module that returns the dataset to the server.
- `data/data.js` — the in-memory dataset (array of objects).
- `utility/sendJSON.js` — helper that sets CORS headers and sends JSON responses.
- `utility/QueryParamsFilter.js` — helper to apply query-string filters.
- `utility/placeFilter.js` — helper to filter by continent/country path parameters.

## Notes & recommendations before publishing

- Persistence: the dataset is in-memory. For real usage, switch `database/db.js` to load/store from a file or a proper database.
- Security: inputs are currently used for filtering without strict validation. Sanitize and validate query and path inputs before using in production.
- CORS: `sendJSON.js` allows all origins and only GET. Harden CORS and enable other methods if needed.
- Tests & CI: add unit tests and a GitHub Actions workflow before publishing to npm/GitHub.

## Suggested next steps (optional)

- Add a `LICENSE` file (MIT/Apache/Unlicense) depending on how you want to license the project.
- Add a small test suite (e.g., using Jest or Mocha) and a CI workflow.
- Improve error handling and return JSON error responses for invalid requests.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with changes. If you make breaking changes, update this README accordingly.



