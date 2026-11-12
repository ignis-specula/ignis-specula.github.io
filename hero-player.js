/* IGNIS SPECULA hero banner: plays the dawn-to-dusk animation as consecutive segments (assets/hero-day-<k>.*).
 * The segments are stacked; the next one starts at its first frame when the current one ends and is shown only
 * once it is playing, so the joins are seamless. Segment 1 loads first, the others while it plays.
 * Without autoplay, or with prefers-reduced-motion, the poster image stays. */
(() => {
  const box = document.getElementById('hero-video');
  if (!box || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const N = 3;
  const mobile = matchMedia('(max-width: 600px)').matches;
  const ext = !mobile && document.createElement('video').canPlayType('video/webm; codecs="vp9"') ? 'webm' : 'mp4';
  const vids = Array.from({ length: N }, (_, k) => {
    const v = document.createElement('video');
    v.muted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true');
    v.preload = k ? 'none' : 'auto';
    v.className = 'hero-seg';
    v.src = `assets/hero-day${mobile ? '-mobile' : ''}-${k + 1}.${ext}`;
    box.appendChild(v);
    return v;
  });
  const show = (k) => vids.forEach((v, i) => { v.style.opacity = i === k ? '1' : '0'; });
  vids.forEach((v, k) => v.addEventListener('ended', () => {
    const next = vids[(k + 1) % N];
    next.currentTime = 0;
    next.play().then(() => show((k + 1) % N)).catch(() => {});
  }));
  vids[0].addEventListener('playing', () => vids.slice(1).forEach((v) => { v.preload = 'auto'; v.load(); }), { once: true });
  vids[0].play().then(() => show(0)).catch(() => {});
})();
