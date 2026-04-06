// ─────────────────────────────────────────────
// PORTFOLIO DATA — edit this file to add/remove
// images and videos. Both index.html and
// credits.html read from this single source.
// ─────────────────────────────────────────────

const PORTFOLIO = {

  // ── HERO VIDEOS ───────────────────────────
  // These rotate in the hero reel on index.html
  heroVideos: [
    { vimeoId: "764291962",  title: "Top Gun: Maverick" },
    { vimeoId: "1180575867", title: "Rogue One: A Star Wars Story" },
    { vimeoId: "1180576612", title: "Thor: Ragnarok" },
  ],

  // ── VIMEO VIDEOS ──────────────────────────
  videos: [
    { vimeoId: "307915485",  title: "VFX Reel",                          project: null,                           category: "Visual Effects" },
    { vimeoId: "764291962",  title: "Top Gun: Maverick — VFX",           project: "Top Gun: Maverick",            category: "Visual Effects" },
    { vimeoId: "1180511248", title: "Deadpool — VFX",                    project: "Deadpool",                     category: "Visual Effects" },
    { vimeoId: "1180575867", title: "Rogue One: A Star Wars Story — VFX",project: "Rogue One: A Star Wars Story", category: "Visual Effects" },
    { vimeoId: "1180576323", title: "The Predator — VFX",                project: "The Predator",                 category: "Visual Effects" },
    { vimeoId: "1180576612", title: "Thor: Ragnarok — VFX",              project: "Thor: Ragnarok",               category: "Visual Effects" },
  ],

  // ── PORTFOLIO IMAGES ──────────────────────
  images: [
    { src: "images/portfolio/Pan_1.jpg",                          title: "Pan",                               project: null,                                      category: "Visual Effects" },
    { src: "images/portfolio/Pan_2.jpg",                          title: "Pan — II",                          project: null,                                      category: "Visual Effects" },
    { src: "images/portfolio/avengers-infinity-war_1.jpg",        title: "Avengers: Infinity War",            project: "Avengers: Infinity War",                  category: "Visual Effects" },
    { src: "images/portfolio/avengers-infinity-war_2.jpg",        title: "Avengers: Infinity War — II",       project: "Avengers: Infinity War",                  category: "Visual Effects" },
    { src: "images/portfolio/blade-runner-2049_1.jpg",            title: "Blade Runner 2049",                 project: "Blade Runner 2049",                       category: "Visual Effects" },
    { src: "images/portfolio/blade-runner-2049_2.jpg",            title: "Blade Runner 2049 — II",            project: "Blade Runner 2049",                       category: "Visual Effects" },
    { src: "images/portfolio/cinderella_1.jpg",                   title: "Cinderella",                        project: "Cinderella",                              category: "Visual Effects" },
    { src: "images/portfolio/cinderella_2.jpg",                   title: "Cinderella — II",                   project: "Cinderella",                              category: "Visual Effects" },
    { src: "images/portfolio/deadpool_2.jpg",                     title: "Deadpool",                          project: "Deadpool",                                category: "Visual Effects" },
    { src: "images/portfolio/deadpool_3.jpg",                     title: "Deadpool — II",                     project: "Deadpool",                                category: "Visual Effects" },
    { src: "images/portfolio/deadpool_4.jpg",                     title: "Deadpool — III",                    project: "Deadpool",                                category: "Visual Effects" },
    { src: "images/portfolio/deadpool_5.jpg",                     title: "Deadpool — IV",                     project: "Deadpool",                                category: "Visual Effects" },
    { src: "images/portfolio/ghost-in-the-shell_1.jpg",           title: "Ghost in the Shell",                project: "Ghost in the Shell",                      category: "Visual Effects" },
    { src: "images/portfolio/gilded-age_1.jpg",                   title: "The Gilded Age",                    project: "The Gilded Age",                          category: "Visual Effects" },
    { src: "images/portfolio/gilded-age_2.jpg",                   title: "The Gilded Age — II",               project: "The Gilded Age",                          category: "Visual Effects" },
    { src: "images/portfolio/loki_1.jpg",                         title: "Loki",                              project: "Loki",                                    category: "Visual Effects" },
    { src: "images/portfolio/loki_2.jpg",                         title: "Loki — II",                         project: "Loki",                                    category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_1.jpg",                    title: "Mickey 17",                         project: "Mickey 17",                               category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_2.jpg",                    title: "Mickey 17 — II",                    project: "Mickey 17",                               category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_3.jpg",                    title: "Mickey 17 — III",                   project: "Mickey 17",                               category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_4.jpg",                    title: "Mickey 17 — IV",                    project: "Mickey 17",                               category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_5.jpg",                    title: "Mickey 17 — V",                     project: "Mickey 17",                               category: "Visual Effects" },
    { src: "images/portfolio/mickey-17_6.jpg",                    title: "Mickey 17 — VI",                    project: "Mickey 17",                               category: "Visual Effects" },
    { src: "images/portfolio/night-at-the-museum_1.jpg",          title: "Night at the Museum",               project: "Night at the Museum: Secret of the Tomb", category: "Visual Effects" },
    { src: "images/portfolio/night-at-the-museum_2.jpg",          title: "Night at the Museum — II",          project: "Night at the Museum: Secret of the Tomb", category: "Visual Effects" },
    { src: "images/portfolio/predator_3.jpg",                     title: "The Predator",                      project: "The Predator",                            category: "Visual Effects" },
    { src: "images/portfolio/predator_6.jpg",                     title: "The Predator — II",                 project: "The Predator",                            category: "Visual Effects" },
    { src: "images/portfolio/rings-of-power_1.jpg",               title: "The Rings of Power",                project: "The Rings of Power",                      category: "Visual Effects" },
    { src: "images/portfolio/rings-of-power_2.jpg",               title: "The Rings of Power — II",           project: "The Rings of Power",                      category: "Visual Effects" },
    { src: "images/portfolio/rings-of-power_5.jpg",               title: "The Rings of Power — III",          project: "The Rings of Power",                      category: "Visual Effects" },
    { src: "images/portfolio/rings-of-power_8.jpg",               title: "The Rings of Power — IV",           project: "The Rings of Power",                      category: "Visual Effects" },
    { src: "images/portfolio/rogue-one_1.jpg",                    title: "Rogue One: A Star Wars Story",      project: "Rogue One: A Star Wars Story",            category: "Visual Effects" },
    { src: "images/portfolio/rogue-one_2.jpg",                    title: "Rogue One — II",                    project: "Rogue One: A Star Wars Story",            category: "Visual Effects" },
    { src: "images/portfolio/rogue-one_3.jpg",                    title: "Rogue One — III",                   project: "Rogue One: A Star Wars Story",            category: "Visual Effects" },
    { src: "images/portfolio/thor-love-and-thunder_1.jpg",        title: "Thor: Love and Thunder",            project: "Thor: Love and Thunder",                  category: "Visual Effects" },
    { src: "images/portfolio/thor-love-and-thunder_2.jpg",        title: "Thor: Love and Thunder — II",       project: "Thor: Love and Thunder",                  category: "Visual Effects" },
    { src: "images/portfolio/thor-love-and-thunder_3.jpg",        title: "Thor: Love and Thunder — III",      project: "Thor: Love and Thunder",                  category: "Visual Effects" },
    { src: "images/portfolio/thor-love-and-thunder_6.jpg",        title: "Thor: Love and Thunder — IV",       project: "Thor: Love and Thunder",                  category: "Visual Effects" },
    { src: "images/portfolio/thor-ragnarok_1.jpg",                title: "Thor: Ragnarok",                    project: "Thor: Ragnarok",                          category: "Visual Effects" },
    { src: "images/portfolio/transformers_thelastknight_1.jpg",   title: "Transformers: The Last Knight",     project: null,                                      category: "Visual Effects" },
    { src: "images/portfolio/transformers_thelastknight_3.jpg",   title: "Transformers: The Last Knight — II",project: null,                                      category: "Visual Effects" },
    { src: "images/portfolio/transformersthelastknight_2.jpg",    title: "Transformers: The Last Knight — III",project: null,                                     category: "Visual Effects" },
    { src: "images/portfolio/x-men-apocalypse_1.jpg",             title: "X-Men: Apocalypse",                 project: "X-Men: Apocalypse",                       category: "Visual Effects" },
  ]

};
