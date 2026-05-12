# Deal of the Day - Substack Note Generator

A web app for generating shareable Substack Notes about VC deals, tailored to the tone and audience of **South of the Cap Table** — a newsletter on European VC dynamics and African tech ecosystems.

## Features

- **Real deal fetching**: Pulls recent VC deals from news sources (mock data included)
- **Regional filters**: All / European VC / African & MENA
- **Analytical tone generation**: Non-consensus, M&A analyst perspective with data-driven questions
- **Copy-to-clipboard**: One-click note copying
- **Format compliance**: Max 120 words, no em-dashes, scannable paragraphs
- **Image suggestions**: Unsplash queries for each post
- **Disclaimer banner**: Reminds users to verify deal data before publishing
- **"New deal" button**: Regenerate for different deals

## Tone & Format Rules

- **Max 120 words** per note
- **No em-dashes** — use commas or periods only
- **No marketing language** — analytical, investor POV only
- **Scannable structure** — short paragraphs
- **Real data only** — no speculation
- **Ends with engagement question** — e.g., "What would validate this thesis?"

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure API (Optional)
Create a `.env` file:
```
PORT=3000
NEWS_API_KEY=your_newsapi_key_here
```

To use real news data, sign up at [newsapi.org](https://newsapi.org) and add your API key.

### 3. Run the Server
```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Project Structure

```
deal-of-the-day/
├── server.js           # Express backend for deal fetching
├── public/
│   └── index.html      # React app (single HTML file with inline JS)
├── package.json        # Dependencies
├── .env.example        # Environment config template
└── README.md           # This file
```

## How It Works

1. **Generate**: Click "Generate" to fetch and display a random deal
2. **Filter**: Select region (All / European VC / African & MENA)
3. **Read**: Generated note appears in the preview box
4. **Copy**: Click "Copy Note" to add to clipboard
5. **New Deal**: Click "New Deal" to show another random deal
6. **Image**: Use the suggested Unsplash search for post imagery

## Extending with Real API

To integrate with NewsAPI or Bing News:

1. Update `server.js` `/api/deals` endpoint with your API call
2. Parse results into this deal structure:
```javascript
{
  company: string,
  amount: string,
  investors: string,
  date: string (YYYY-MM-DD),
  description: string,
  region: "European VC" | "African & MENA"
}
```

3. Add filtering logic to categorize deals by region

## Deployment

### Vercel
```bash
vercel deploy
```

### Heroku
```bash
heroku create your-app-name
heroku config:set NEWS_API_KEY=your_key
git push heroku main
```

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

## Notes

- **Mock data** is included for demo — real deals require an API key
- **Frontend is a single HTML file** — can be served as-is or built with a bundler
- **CORS enabled** — API is publicly accessible from frontend
- **Word count tracking** — auto-calculated and displayed
- **Format validation** — em-dashes are removed automatically

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Failed to fetch deals" | Mock data loads automatically. Add NEWS_API_KEY to enable real data. |
| "Copy not working" | Requires HTTPS in production. Use `navigator.clipboard` API. |
| No deals after filtering | Ensure filter value matches region exactly. |

## Author Notes

Designed for the unique perspective of South of the Cap Table:
- **Market analyst lens**: Data-driven, non-consensus takes
- **M&A/VC expertise**: Spotlights deal structure, thesis validation, and execution risks
- **European & African focus**: Underestimated markets with higher signal-to-noise ratios
- **Reader is investor or founder**: Assumes familiarity with term sheets, unit economics, CAC/LTV

---

**Ready to generate?** Run `npm start` and visit `http://localhost:3000`.
