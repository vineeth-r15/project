# Global Festivals Calendar 2026

A lightweight calendar web app that helps you stay updated with major festivals happening across the world in 2026.

## Features
- Global 2026 festival list with key details.
- Search festivals by name, location, category, and notes.
- Filter by month, region, and category.
- Static front-end (easy to host anywhere).

## Run locally
```bash
python3 -m http.server 8080
```
Then open <http://localhost:8080>.

## Deploy
Use the Bash deployment script:

```bash
./deploy.sh --target-dir /path/to/web/root
```

Remote deploy via rsync:

```bash
./deploy.sh --host user@server --remote-dir /var/www/festival-calendar
```
