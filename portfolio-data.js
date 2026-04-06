// ─────────────────────────────────────────────
// PORTFOLIO DATA — edit this file to add/remove
// images and videos. Both index.html and
// credits.html read from this single source.
// ─────────────────────────────────────────────

const PORTFOLIO = {

  // ── VIMEO VIDEOS ──────────────────────────
  // These appear in the Selected Work grid AND
  // in the credits lightbox when project matches
  videos: [
    {
      vimeoId: "307915485",
      title: "VFX Reel",
      project: null,           // no linked credit
      category: "Visual Effects"
    },
    {
      vimeoId: "764291962",
      title: "Top Gun: Maverick — VFX",
      project: "Top Gun: Maverick",
      category: "Visual Effects"
    },
    {
      vimeoId: "1180511248",
      title: "Deadpool — VFX",
      project: "Deadpool",
      category: "Visual Effects"
    }
  ],

  // ── PORTFOLIO IMAGES ──────────────────────
  // Files must exist in images/portfolio/ in the felixbl-portfolio GitHub repo.
  // Paths are relative to the HTML files (i.e. from the repo root).
  // category: "Visual Effects" | "Photography" | "Painting" | "Drawing"
  // project: must match the data-project / title on a credit card (or null)
  images: [
    { src: "images/portfolio/Pan_1.jpg",                       title: "Pan",                                    project: null,                                    category: "Visual Effects" },
    { src: "images/portfolio/avengers-infinity-war_1.jpg",     title: "Avengers: Infinity War",                 project: "Avengers: Infinity War",                category: "Visual Effects" },
    { src: "images/portfolio/blade-runner-2049_1.jpg",         title: "Blade Runner 2049",                      project: "Blade Runner 2049",                     category: "Visual Effects" },
    { src: "images/portfolio/cinderella_1.jpg",                title: "Cinderella",                             project: "Cinderella",                            category: "Visual Effects" },
    { src: "images/portfolio/ghost-in-the-shell_1.jpg",        title: "Ghost in the Shell",                     project: "Ghost in the Shell",                    category: "Visual Effects" },
    { src: "images/portfolio/gilded-age_1.jpg",                title: "The Gilded Age",                         project: "The Gilded Age",                        category: "Visual Effects" },
    { src: "images/portfolio/loki_1.jpg",                      title: "Loki",                                   project: "Loki",                                  category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_1.jpg",                 title: "Mickey 17",                              project: "Mickey 17",                             category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_2.jpg",                 title: "Mickey 17 — II",                         project: "Mickey 17",                             category: "Visual Effects" },
    { src: "images/portfolio/night-at-the-museum_1.jpg",       title: "Night at the Museum",                    project: "Night at the Museum: Secret of the Tomb", category: "Visual Effects" },
    { src: "images/portfolio/predator_1.jpg",                  title: "The Predator",                           project: "The Predator",                          category: "Visual Effects" },
    { src: "images/portfolio/rings-of-power_1.jpg",            title: "The Rings of Power",                     project: "The Rings of Power",                    category: "Visual Effects" },
    { src: "images/portfolio/rogue-one_1.jpg",                 title: "Rogue One: A Star Wars Story",           project: "Rogue One: A Star Wars Story",          category: "Visual Effects" },
    { src: "images/portfolio/thor-love-and-thunder_1.jpg",     title: "Thor: Love and Thunder",                 project: "Thor: Love and Thunder",                category: "Visual Effects" },
    { src: "images/portfolio/thor-ragnarok_1.jpg",             title: "Thor: Ragnarok",                         project: "Thor: Ragnarok",                        category: "Visual Effects" },
    { src: "images/portfolio/transformers_thelastknight_1.jpg",title: "Transformers: The Last Knight",          project: null,                                    category: "Visual Effects" },
    { src: "images/portfolio/x-men-apocalypse_1.jpg",          title: "X-Men: Apocalypse",                      project: "X-Men: Apocalypse",                     category: "Visual Effects" },
  ]

};
