/**
 * Adsterra configuration — kanik.shop
 *
 * Aapke units (popunder, social bar aur smart link intentionally skip hain —
 * wo download button cover karte hain aur referral conversion kharab karte hain).
 *
 * SETUP:
 * 1. `ADS_ENABLED` ko `true` karein.
 * 2. Ads.txt line Adsterra dashboard se copy karke `public/ads.txt` me paste karein.
 * 3. `npm run build` → `dist/` upload.
 *
 * Preview: https://kanik.shop/?ads=preview
 */

export const ADS_ENABLED = true;

/** Preview mode me placeholder boxes dikhayein. */
export const AD_PREVIEW_PLACEHOLDER = true;

/** "Preview only" query value. */
export const ADS_PREVIEW_QUERY = "preview";

export type BannerUnit = {
  /** atOptions ka 'key' */
  key: string;
  /** invoke.js ka host, e.g. "www.highrevenueformat.com" */
  host: string;
  /** atOptions ka 'format' — normally "iframe" */
  format: string;
  width: number;
  height: number;
  /**
   * Agar Adsterra ka URL standard `host/key/invoke.js` se alag ho (jaise
   * `https://bauval.org/22/KEY`), to poora URL yahan paste karein.
   */
  fullInvokeSrc?: string;
};

/* -------------------------------------------------------------------------- */
/*                              BANNER 468 x 60                               */
/* -------------------------------------------------------------------------- */

export const BANNER_DESKTOP: BannerUnit = {
  key: "65688742a2be7b133612df751adcefad",
  host: "www.highrevenueformat.com",
  format: "iframe",
  width: 468,
  height: 60,
};

/* -------------------------------------------------------------------------- */
/*                             BANNER 160 x 600                               */
/* -------------------------------------------------------------------------- */

/** Tall sidebar unit — only rendered on wide screens beside the guide. */
export const BANNER_SIDEBAR: BannerUnit = {
  key: "73ac9d1a8325f4db324e6cb27b714b4b",
  host: "bauval.org",
  format: "iframe",
  width: 160,
  height: 600,
  // Adsterra ka diya gaya URL bilkul yahi hai (is unit par /invoke.js nahi hai)
  fullInvokeSrc: "https://bauval.org/22/73ac9d1a8325f4db324e6cb27b714b4b",
};

/* -------------------------------------------------------------------------- */
/*                                NATIVE BAR                                  */
/* -------------------------------------------------------------------------- */

export const NATIVE_AD: {
  key: string;
  /** invoke.js host (host ke bina bhi chalta hai — poora URL bhi chalega) */
  host: string;
  /** Agar aapke paas poora invoke.js URL ho to yahan paste karein */
  fullInvokeSrc?: string;
} = {
  key: "d58728d2d732d4de3d39f260a3bc0f1b",
  host: "pl32220109.profitableratecpmnetwork.com",
  fullInvokeSrc:
    "https://pl32220109.profitableratecpmnetwork.com/d58728d2d732d4de3d39f260a3bc0f1b/invoke.js",
};

/* -------------------------------------------------------------------------- */
/*                          POPUNDER / SOCIAL BAR                             */
/* -------------------------------------------------------------------------- */
/**
 * Aapne popunder aur social bar ke codes diye hain, lekin ye is page par
 * NAHI lagaye:
 *  - Social bar page par floating icons lata hai jo download button cover
 *    karta hai → misclick, referral loss, aur Adsterra policy risk.
 *  - Popunder har click par naya tab kholta hai → visitors bhaag jate hain.
 *  - Smart link ek redirect link hai — button se skip karne ke liye hi
 *    rakha hai, kyunki aap chahte hain button seedha referral par jaye.
 *
 * Agar aage lagana ho to sirf popunder ka script `public/popunder.html` jaisi
 * alag jagah rakhein — main page se hataye.
 */

export const POPUNDER_SRC =
  "https://pl32220106.profitableratecpmnetwork.com/e0/40/0e/e0400e7d2265acc2dda9cb305ecd450d.js";

export const SOCIAL_BAR_SRC =
  "https://pl32220108.profitableratecpmnetwork.com/c5/33/51/c5335141ffea22cdc734b92226183c07.js";

export const SMART_LINK_URL =
  "https://www.profitableratecpmnetwork.com/s37024bj4?key=8d4644dca1ba2860f058bb7e7ad141de";

/** Optional static fallback HTML if the network ad does not load. */
export const AD_FALLBACK_HTML = "";

/** Builds the complete ad HTML for an Adsterra banner unit. */
export function buildBannerCode(unit: BannerUnit): string {
  const src = unit.fullInvokeSrc ?? `https://${unit.host}/${unit.key}/invoke.js`;
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:transparent;display:flex;align-items:center;justify-content:center;overflow:hidden">
<script type="text/javascript">atOptions={key:${JSON.stringify(unit.key)},format:${JSON.stringify(
    unit.format,
  )},height:${unit.height},width:${unit.width},params:{}};</script>
<script type="text/javascript" src="${src}"></script>
</body></html>`;
}

/** Builds the complete ad HTML for the Adsterra Native Banner unit. */
export function buildNativeCode(unit: {
  key: string;
  host: string;
  fullInvokeSrc?: string;
}): string {
  const container = `container-${unit.key}`;
  const src =
    unit.fullInvokeSrc ?? `https://${unit.host}/${unit.key}/invoke.js`;
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:transparent">
<div id="${container}"></div>
<script type="text/javascript">atOptions={key:${JSON.stringify(
    unit.key,
  )},format:'iframe',container:${JSON.stringify(container)},params:{}};</script>
<script type="text/javascript" src="${src}"></script>
</body></html>`;
}
