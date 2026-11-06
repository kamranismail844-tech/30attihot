# Adsterra setup — kanik.shop

Ad slots already added hain. Jab tak aap apni key nahi dete, visitors ko **kuch nahi dikhta** (0 ads). Aap `?ads=preview` se placement dekh sakte hain.

## 1. Adsterra me kya unit banayein

Dashboard → **Publisher** → apni site `kanik.shop` add karein → **Ad Units** → **Create Unit**.

### Unit 1 — Banner (zaroori)
- Type: **Banner**
- Size: **728 × 90** (desktop leaderboard)
- (Optional) ek aur banao **320 × 50** mobile ke liye

Aisa code milega:

```
atOptions = {
    'key' : 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
};
document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') +
  '://www.effectivecreativeformat.com/a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6/invoke.js"></scr' + 'ipt>');
```

Us code se **sirf 2 cheezein copy karni hain**:

| Kya | Kahan se | Example |
|---|---|---|
| **key** | `'key' : '...'` wali value | `a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6` |
| **host** | invoke.js URL ka domain | `www.effectivecreativeformat.com` |

> Host har unit ke hisaab se badalta hai — `effectivecreativeformat`, `highperformanceformat`, `topcreativeformat`, `profitablecreativeformat` etc. Jo aapke code me ho, wahi copy karein.

### Unit 2 — Native Banner (optional, behtar earning)
- Type: **Native Banner**
- Code me `<div id="container-a1b2c3..."></div>` hoga — usi `key` ko copy karein
- Host usually `www.profitablecpmgate.com` hota hai

## 2. Kahan paste karein

File: **`src/config/ads.ts`**

```ts
export const ADS_ENABLED = true;   // <-- false se true karein

export const BANNER_DESKTOP = {
  key: "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6",   // apni key
  host: "www.effectivecreativeformat.com",      // apna host
  format: "iframe",
  width: 728,
  height: 90,
};

// Mobile (optional)
export const BANNER_MOBILE = {
  key: "apni_mobile_key",
  host: "www.effectivecreativeformat.com",
  format: "iframe",
  width: 320,
  height: 50,
};

// Native (optional)
export const NATIVE_AD = {
  key: "apni_native_key",
  host: "www.profitablecpmgate.com",
};
```

Phir:

```bash
npm run build
```

`dist/` upload kar dein. Ads live hone me kuch ghante lag sakte hain.

## 3. ads.txt (zaroori)

Adsterra dashboard → **Sites** → apni site → **ads.txt** ka line copy karein.
Usse **`public/ads.txt`** me paste karein (placeholder comment replace karein), phir rebuild.

Format aisa hota hai:

```
google.com, pub-XXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
adsterra.com, pub-XXXXXXXXXXXXXX, DIRECT
```

## 4. Placement (already set)

| Slot | Kahan | Type |
|---|---|---|
| 1 | Download section ke baad, Guide se pehle | Banner |
| 2 | Guide ke baad, FAQ se pehle | Native banner |
| 3 | FAQ ke baad, footer se pehle | Banner |

- Har slot par **"ADVERTISEMENT"** label hai
- Koi bhi slot download button ke paas nahi (minimum 1 section ka gap)
- Slot ki height fix hai — page shift nahi hota (Core Web Vitals safe)
- Ads **sandboxed iframe** me chalte hain, isliye Adsterra ka `document.write` aapke React page ko wipe nahi kar sakta

## 5. Kya NAHI banayein

❌ **Popunder** — click par naya tab kholta hai, referral conversion kharab karta hai
❌ **Social Bar** — page par floating icons, buttons cover karta hai
❌ **Direct Link / Push** — domain flag ka sabse bada risk
❌ **Interstitial** — download button block karta hai

Sirf **Banner** + **Native Banner** use karein. Safe hai, earning bhi hoti hai.

## 6. Preview

```
https://kanik.shop/?ads=preview
```

Labelled placeholder boxes dikh jaayenge — bilkul wahi jagah jahan asli ads aayenge. Normal visitors ko kuch nahi dikhega jab tak key na ho.

## Note

Adsterra ke ads.txt, payment aur policy unke dashboard me hain. Ye guide sirf `src/config/ads.ts` bharne ke liye hai.
