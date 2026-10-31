// PokéBATTLE — trabalha por trás da página: guarda o jogo no aparelho para funcionar sem internet
const VER = '1.3.1';
const ASSETS = {"sprites/b00.json": "4ee725bd98", "sprites/b01.json": "d7eed5ab23", "sprites/b02.json": "bb48e9a4f9", "sprites/b03.json": "f4c92debca", "sprites/b04.json": "be053a852f", "sprites/b05.json": "60535ee65b", "sprites/b06.json": "1b324a5c6f", "sprites/b07.json": "a71a54cfb8", "sprites/b08.json": "659acfb348", "sprites/b09.json": "eac7c087b9", "sprites/b10.json": "a7ac84d6ca", "sprites/b11.json": "aeb874e6c8", "sprites/b12.json": "91fd494081", "sprites/b13.json": "7a53a7444d", "sprites/b14.json": "da1abd65e6", "sprites/b15.json": "d5e6d8442f", "sprites/b16.json": "6aa07ae6fe", "sprites/b17.json": "cf159b2af5", "sprites/b18.json": "7e518b33c4", "sprites/b19.json": "9e31f459ad", "sprites/b20.json": "6108964d44", "sprites/b21.json": "04b86f12d1", "sprites/b22.json": "98900f0ba1", "sprites/b23.json": "923af90cfa", "sprites/b24.json": "2b30956946", "sprites/b25.json": "57b45a52cf", "sprites/bj_miraidon.json": "7b632df706", "sprites/bj_simipour.json": "b162d27753", "sprites/bm.json": "776c032df8", "sprites/bx.json": "bbe5eddf88", "sprites/index.json": "eaad086704", "sprites/jindex.json": "333c7727c3", "sprites/jscale.json": "82bfa46b5a", "sprites/report.json": "14a0dffe42", "sprites/s00.json": "0847d9c2cc", "sprites/s01.json": "94b4f72519", "sprites/s02.json": "c9574d80ad", "sprites/s03.json": "63df3caf02", "sprites/s04.json": "9711c61b40", "sprites/s05.json": "e99fb3856e", "sprites/s06.json": "4ada86ebf4", "sprites/s07.json": "1a1cd7b575", "sprites/s08.json": "9e8f18a377", "sprites/s09.json": "ac06ac8ac9", "sprites/s10.json": "8c93c36c26", "sprites/s11.json": "2cf4080f51", "sprites/s12.json": "e33516209b", "sprites/s13.json": "cb74661f79", "sprites/s14.json": "c94b46cf05", "sprites/s15.json": "72a7969678", "sprites/s16.json": "c3e55a6634", "sprites/s17.json": "8de76336c9", "sprites/s18.json": "4d8638b6bc", "sprites/s19.json": "2eed29651a", "sprites/s20.json": "728f728097", "sprites/s21.json": "02f452fc35", "sprites/s22.json": "0ad064adae", "sprites/s23.json": "d7a7886a6f", "sprites/s24.json": "c5a42727fc", "sprites/s25.json": "09d8764712", "sprites/sc.json": "653ceeef80", "sprites/shiny_index.json": "76c2e643b2", "sprites/sj_simipour.json": "6f00a8bbc5", "sprites/sm.json": "3b4b958dc5", "trainers/atlas.png": "018311b66b", "trainers/ld_alola.png": "b6186bcbee", "trainers/ld_galar.png": "d63abdb721", "trainers/ld_hoenn.png": "e66bcd3eea", "trainers/ld_index.json": "93be3173ca", "trainers/ld_kalos.png": "568ec489e2", "trainers/ld_paldea.png": "d67af051cd", "trainers/ld_sinnoh.png": "a0e925af13", "trainers/ld_unova.png": "b799a41cd5", "trainers/leaders.json": "44307b35a3", "trainers/leaders.png": "8e05d4ae99", "trainers/names.json": "662bd92fe0", "music/batalha.mp3": "d10663efe1", "music/menu.mp3": "85f66ace56", "cries/c00.json": "5585391621", "cries/c01.json": "a678f13732", "cries/c02.json": "7b24888b1d", "cries/c03.json": "949be8a9b0", "cries/c04.json": "bd3ce77ed6", "cries/c05.json": "ef616d5ae9", "cries/c06.json": "a40b15a042", "cries/c07.json": "e535c908e2", "cries/c08.json": "62f2e05a17", "cries/c09.json": "db11ec3c1c", "cries/c10.json": "4b0ef1806f", "cries/index.json": "b4a55969cc"};                       // { 'sprites/b00.json': 'impressão digital', ... }
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
const CORE_CACHE = 'pb-core-' + VER, DATA = 'pb-data';
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CORE_CACHE); await c.addAll(CORE);
    // o essencial dos dados (Líderes, treinadores) já vem junto; o resto é baixado pelo botão "Jogar offline" ou aos poucos
    const d = await caches.open(DATA); for (const p of Object.keys(ASSETS).filter(p => p.startsWith('trainers/'))) { try { const r = await fetch(p, { cache: 'reload' }); if (r.ok) await d.put(p, r); } catch (err) {} }
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('pb-core-') && k !== CORE_CACHE) await caches.delete(k);
    // apaga só os arquivos de dados que mudaram nesta versão
    const d = await caches.open(DATA), old = await d.match('__hashes'); const prev = old ? await old.json() : {};
    for (const [p, h] of Object.entries(prev)) if (ASSETS[p] !== h) await d.delete(p);
    await d.put('__hashes', new Response(JSON.stringify(Object.fromEntries(Object.entries(ASSETS).filter(([p]) => prev[p] === ASSETS[p]))))); 
    await self.clients.claim();
  })());
});
const rel = url => { const u = new URL(url); const base = new URL(self.registration.scope); return u.origin === base.origin && u.pathname.startsWith(base.pathname) ? u.pathname.slice(base.pathname.length) : null; };
async function markHash(p) { const d = await caches.open(DATA), m = await d.match('__hashes'), H = m ? await m.json() : {}; H[p] = ASSETS[p]; await d.put('__hashes', new Response(JSON.stringify(H))); }
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const p = rel(req.url);
  if (p === '' || p === 'index.html') {   // a página: tenta a internet primeiro (pega versões novas), senão usa a guardada
    e.respondWith((async () => { try { const r = await fetch(req); if (r.ok) (await caches.open(CORE_CACHE)).put('index.html', r.clone()); return r; } catch (err) { return (await caches.match('index.html')) || (await caches.match('./')); } })());
    return;
  }
  if (p !== null && ASSETS[p]) {   // dados do jogo: do aparelho primeiro; se não tiver, baixa e guarda
    e.respondWith((async () => { const d = await caches.open(DATA), hit = await d.match(p); if (hit) return hit;
      const r = await fetch(req); if (r.ok) { await d.put(p, r.clone()); markHash(p); } return r; })());
    return;
  }
  if (p !== null) { e.respondWith(caches.match(req).then(hit => hit || fetch(req))); return; }
  // fontes e bibliotecas de fora: guarda a cópia para usar sem internet
  if (/fonts\.(googleapis|gstatic)\.com|cdnjs\.cloudflare\.com/.test(req.url)) {
    e.respondWith((async () => { const c = await caches.open('pb-ext'), hit = await c.match(req); if (hit) return hit; try { const r = await fetch(req); if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; } catch (err) { return hit || Response.error(); } })());
  }
});
// "Jogar offline": baixa tudo de uma vez, contando o progresso
self.addEventListener('message', e => {
  if (!e.data) return;
  if (e.data.t === 'status') e.waitUntil(status(e.source));
  if (e.data.t === 'all') e.waitUntil(downloadAll(e.source));
  if (e.data.t === 'skip') self.skipWaiting();
});
async function missing() { const d = await caches.open(DATA), out = []; for (const p of Object.keys(ASSETS)) if (!(await d.match(p))) out.push(p); return out; }
async function status(cl) { const m = await missing(), n = Object.keys(ASSETS).length; cl.postMessage({ t: 'status', have: n - m.length, total: n, ver: VER }); }
async function downloadAll(cl) {
  const d = await caches.open(DATA), m = await missing(), n = Object.keys(ASSETS).length; let have = n - m.length, fail = 0;
  for (const p of m) { try { const r = await fetch(p, { cache: 'reload' }); if (r.ok) { await d.put(p, r); await markHash(p); have++; } else fail++; } catch (err) { fail++; } cl.postMessage({ t: 'prog', have, total: n, fail }); }
  cl.postMessage({ t: 'done', have, total: n, fail });
}
