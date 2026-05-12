import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Mock deal generator for when API is not available
const mockDeals = [
  {
    company: "Stripe Climate",
    amount: "$500M",
    investors: "Stripe",
    date: "2024-05-10",
    description: "Carbon removal marketplace funding",
    region: "European VC"
  },
  {
    company: "Deel",
    amount: "$30M Series C",
    investors: "Accel, Sapphire Ventures",
    date: "2024-05-08",
    description: "Global payroll and HR platform",
    region: "European VC"
  },
  {
    company: "Flutterwave",
    amount: "$25M Series C",
    investors: "TCV, Blockstream",
    date: "2024-05-09",
    description: "African payments infrastructure",
    region: "African & MENA"
  },
  {
    company: "Andela",
    amount: "$200M+ Series C",
    investors: "Goodwin, Sapphire Ventures",
    date: "2024-05-07",
    description: "African tech talent platform",
    region: "African & MENA"
  },
  {
    company: "Verifone",
    amount: "$150M growth",
    investors: "Apollo Global",
    date: "2024-05-06",
    description: "Payment processing acquisition",
    region: "European VC"
  }
];

app.get('/api/deals', async (req, res) => {
  try {
    const { filter } = req.query;

    // For demo purposes, return mock deals
    // In production, would use NewsAPI or other service
    let deals = mockDeals;

    if (filter && filter !== 'all') {
      deals = deals.filter(d => d.region.toLowerCase() === filter.toLowerCase());
    }

    res.json(deals);
  } catch (error) {
    console.error('Error fetching deals:', error);
    res.status(500).json({ error: 'Failed to fetch deals' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
