document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();

  // Theme iOS pur
  tg.setHeaderColor("#5b37d4");
  tg.setBackgroundColor("#1c1c1d");

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  setTimeout(() => {
    if (progressBar) progressBar.style.width = "100%";
  }, 100);
  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
        loader.classList.remove("active");
      }, 200);
    }
  }, 1800);

  // --- DATA (NOUVEAU MENU CLF44) ---
  const appData = [
        // --- Catégorie 1: HASH ---
        {
            id: 'HASH',
            name: '🍪 Hash 🍪',
            farm: '',
            type: 'Hash',
            quality: ' 🍪 Hash 🍪',
            image: 'CategHash.png',
            directToProducts: false,
            farms: [
                {
                    id: 'PREMIUM',
                    name: 'TOP DRY 👩‍🌾',
                    image: '',
                    badgeText: '2 produits',
                    products: [
                        {
                            id: 'Smash Meloncini 🍈🍋‍🟩',
                            name: 'Smash Meloncini 🍈🍋‍🟩',
                            farm: 'BONNE MAMAN 120U 🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductSM.png',
                            videos: ['VideoSM.mov','VideoSM2.mov'],
                            description: 'De Retour Bonne Maman 🇲🇦 Nouvel Variété 💨🪐🍈 Goût Texture Bien Dur Et Petant 💥 Pour Les Petit Budget 💶 Top Quaite ⭐️',
                            tarifs: [
                              { weight: '5g', price: 50.00 },
                              { weight: '10g', price: 90.00 },
                              { weight: '25g', price: 200.00 },
                              { weight: '50g', price: 300.00 },
                            ]
                        },
                        {
                            id: 'Candy Fruit 🍑🍌🍬',
                            name: 'Candy Fruit 🍑🍌🍬',
                            farm: '👨‍🌾 TOP DRY 120u  👨‍🌾',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductCF.png',
                            video: 'VideoCF.mp4',
                            description: '',
                            tarifs: [
                                { weight: '50g', price: 200.00 },
                                { weight: '100g', price: 360.00 },
                                { weight: '500g', price: 1650.00 },
                                { weight: '1K', price: 2900.00 },
                            ]
                        },
                        /* {
                            id: 'Sherbidden 🍓🎇',
                            name: 'Sherbidden 🍓🎇',
                            farm: '👨‍🌾 DR CALI 73u 👨‍🌾',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductSH.png',
                            video: 'VideoSH.mov',
                            description: '',
                            tarifs: [
                                { weight: '50g', price: 180.00 },
                                { weight: '100g', price: 300.00 },
                                { weight: '500g', price: 1550.00 },
                                { weight: '1K', price: 2800.00 },
                            ]
                        }, */
                    ]
                },
                {
                    id: 'FROZEN',
                    name: 'FRESH FROZEN 🧊',
                    image: '',
                    badgeText: '1 produit',
                    products: [
                         {
                            id: 'GrapeGas x Runtz🍇🍭',
                            name: 'GrapeGas x Runtz🍇🍭',
                            farm: 'MORROCCAN REFINERY 🌪️🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductGGR.jpg',
                            video: 'VideoGGR.mov',
                            description: 'Fresh Frozen Premium 💎🧊 \n\n Totale Exclu 💎💎🌈 Produit De Haute Qualité 🌡️🧊 Glassy Sur La Video 🔬 Terps De Malade Goût Odeur De Cali 10000 🇺🇸',
                            tarifs: [
                                { weight: '3g', price: 60.00 },
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 140.00 },
                                { weight: '25g', price: 280.00 },
                                { weight: '50g', price: 450.00 },
                            ]
                        },
                         {
                            id: 'Mandarina 🍊',
                            name: 'Mandarina 🍊',
                            farm: '👨‍🌾 HaramBoyz 👨‍🌾',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductMD.png',
                            video: 'VideoMD.mov',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 450.00 },
                                { weight: '100g', price: 850.00 },
                            ]
                        },
                         {
                            id: 'KayLinePay 💳',
                            name: 'KayLinePay 💳',
                            farm: '👨‍🌾 HaramBoyz 👨‍🌾',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductKL.png',
                            video: 'VideoKL.mov',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 450.00 },
                                { weight: '100g', price: 850.00 },
                            ]
                        },
                         {
                            id: 'ForbiddenFruit 🍎',
                            name: 'ForbiddenFruit 🍎',
                            farm: '👨‍🌾 HaramBoyz 👨‍🌾',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductFF.png',
                            video: 'VideoFF.mov',
                            description: '',
                            tarifs: [
                                { weight: '5g', price: 80.00 },
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 300.00 },
                                { weight: '50g', price: 450.00 },
                                { weight: '100g', price: 850.00 },
                            ]
                        },
                       
                    ]
                },
                {
                    id: 'STATIC_1',
                    name: '⚙️ PLASMASTATIC ⚡️',
                    image: '',
                    badgeText: '1 produit',
                    products: [
                       
                    ]
                },
                {
                    id: 'STATIC_2',
                    name: '2️⃣ Double Static 🧤',
                    image: '',
                    badgeText: '1 produit',
                    products: [
                        /* {
                            id: 'Grape Gas 🦍',
                            name: 'Grape Gas ⛽',
                            farm: 'Hamdullah Farmz 🇺🇸🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductGrap.png',
                            video: 'VideoGrap.mp4',
                            description: 'New Farm Qui Fait Parler D’elle 🇲🇦 Full Seeds 🇺🇸 Qualité Premium 😱😱 Goût Visuel Texture De Taré 🥶 Fort En Thc 🧪 Pour Les Gros Poumons 🫁',
                            tarifs: [
                                { weight: '3g', price: 60.00 },
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                                { weight: '25g', price: 300.00 },
                            ]
                        },
                        {
                            id: 'Tarzamania 🦍',
                            name: 'Tarzamania 🦍',
                            farm: 'Hamdullah Farmz 🇺🇸🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductTar.png',
                            video: 'VideoTar.mp4',
                            description: 'New Farm Qui Fait Parler D’elle 🇲🇦 Full Seeds 🇺🇸 Qualité Premium 😱😱 Goût Visuel Texture De Taré 🥶 Fort En Thc 🧪 Pour Les Gros Poumons 🫁',
                            tarifs: [
                                { weight: '3g', price: 60.00 },
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                                { weight: '25g', price: 300.00 },
                            ]
                        }, */
                        {
                            id: 'South Park Chem 🍋‍🟩🥤',
                            name: 'South Park Chem 🍋‍🟩🥤',
                            farm: 'TRAFICANTE FARMLAND 🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductSP.png',
                            video: 'VideoSP.mov',
                            videos:['VideoSP1.mov','VideoSP2.mov','VideoSP3.mov'],
                            description: 'Plates 50g \n\n Ferme Connue 🇲🇦 Produit Pépite Bête De Variété+Terps Texture De Fou 🌪️🍬 Qualité Qui Parle Delle Même Pas Besoin De Vous Présenter 🥇🥇Blanc De Blanc La Folie Extrême 💨💨⛽️⛽️Prix Arranger De Tare Vu La Qualité Stratosphérique 🪐🪐',
                            tarifs: [
                                { weight: '3g', price: 60.00 },
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                                { weight: '20g', price: 300.00 },
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 600.00 },
                                { weight: '100g', price: 1050.00 }
                            ]
                        },
                        {
                            id: 'Sunset Sherbet 🎇💥💨',
                            name: 'Sunset Sherbet 🎇💥💨',
                            farm: 'TRAFICANTE FARMLAND 🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductSS.png',
                            video: 'VideoSS.mov',
                            videos:['VideoSS1.mov','VideoSS2.mov','VideoSS3.mov'],
                            description: 'Plates 50g \n\n Ferme Connue 🇲🇦 Produit Pépite Bête De Variété+Terps Texture De Fou 🌪️🍬 Qualité Qui Parle Delle Même Pas Besoin De Vous Présenter 🥇🥇Blanc De Blanc La Folie Extrême 💨💨⛽️⛽️Prix Arranger De Tare Vu La Qualité Stratosphérique 🪐🪐',
                            tarifs: [
                                { weight: '3g', price: 60.00 },
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                                { weight: '20g', price: 300.00 },
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 600.00 },
                                { weight: '100g', price: 1050.00 }
                            ]
                        },
                        {
                            id: 'Fatso x Spritzer 💎⛽️🍬',
                            name: 'Fatso x Spritzer 💎⛽️🍬',
                            farm: 'TRAFICANTE FARMLAND 🇲🇦',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductFS.png',
                            video: 'VideoFS.mov',
                            videos:['VideoFS1.mov','VideoFS2.mov','VideoFS3.mov'],
                            description: 'Plates 50g \n\n Ferme Connue 🇲🇦 Produit Pépite Bête De Variété+Terps Texture De Fou 🌪️🍬 Qualité Qui Parle Delle Même Pas Besoin De Vous Présenter 🥇🥇Blanc De Blanc La Folie Extrême 💨💨⛽️⛽️Prix Arranger De Tare Vu La Qualité Stratosphérique 🪐🪐',
                            tarifs: [
                                { weight: '3g', price: 60.00 },
                                { weight: '5g', price: 90.00 },
                                { weight: '10g', price: 160.00 },
                                { weight: '20g', price: 300.00 },
                                { weight: '25g', price: 350.00 },
                                { weight: '50g', price: 600.00 },
                                { weight: '100g', price: 1050.00 }
                            ]
                        }
                    ]
                },
                {
                    id: 'WPFF',
                    name: 'WPFF 💎',
                    image: '',
                    badgeText: '1 produit',
                    products: [
                       
                    ]
                }
            ]
        },

        // --- Catégorie 2: WEED ---
        {
            id: 'WEED',
            name: ' 🪴 Weed 🪴',
            farm: '',
            type: 'Weed',
            quality: ' 🪴 Weed 🪴',
            image: 'CategWeed.png',
            directToProducts: true,
            farms: [
                {
                    id: 'CALI_USA',
                    name: 'CALI TOP SHELF 🇺🇸',
                    image: '',
                    badgeText: '1 produit',
                    products: [
                         {
                            id: 'Tropicana 🦜🍹🥭',
                            name: 'Tropicana 🦜🍹🥭',
                            farm: 'CALI NL TOP SHELF 🇺🇸🇳🇱',
                            promoEligible: false,
                            type: '🪴 Weed 🪴',
                            image: 'ProductCHP.png',
                            video: 'VideoCHP.mp4',
                            description: 'Déjà Victime De Son Succès 🌈💥 Cali Hollandaise 🇳🇱 Du Vrai Crack 💨 Goût Incroyable 🇺🇸🍑🍓 Bien Compacte ☄️ La Fusée 🚀',
                            tarifs: [
                                { weight: '5g', price: 70.00 },
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 400.00 },
                                { weight: '100g', price: 750.00 }
                            ]
                        }
                    ]
                }
            ]
        },

       
    ];
  // Extraction de tous les produits pour "Récents" et "Tendances"
  let allProducts = [];
  appData.forEach((c) =>
    c.farms.forEach((f) => {
      f.products.forEach((p) => {
        p.category = c;
        p.farmName = f.name;
        allProducts.push(p);
      });
    }),
  );

  // --- VARIABLES GLOBALES ---
  let cart = [];
  let currentProd = null;
  let currTarif = null;
  let currVar = null;
  let currQty = 1;
  let checkoutMode = "Livraison";

  // --- TELEGRAM USER DATA ---
  const user = tg.initDataUnsafe?.user;
  if (user) {
    document.getElementById("prof-pseudo").innerText = user.username
      ? `@${user.username}`
      : user.first_name;
    document.getElementById("prof-id").innerText = user.id;
    // Optionnel: photo url si dispo
    if (user.photo_url)
      document.getElementById("prof-img").src = user.photo_url;
  }
  // --- ROUTER ---
  window.navigate = function (pageId) {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById("page-" + pageId).classList.add("active");
    window.scrollTo(0, 0);

    // Update Bottom Nav UI
    document
      .querySelectorAll(".nav-item-float")
      .forEach((i) => i.classList.remove("active"));
    if (pageId === "cart")
      document.querySelectorAll(".nav-item-float")[0].classList.add("active");
    if (pageId === "home" || pageId === "cat-list" || pageId === "product")
      document.querySelectorAll(".nav-item-float")[1].classList.add("active");
    if (pageId === "profile" || pageId === "contact" || pageId === "info")
      document.querySelectorAll(".nav-item-float")[2].classList.add("active");

    // 🔥 LIGNES AJOUTÉES : On force le calcul et l'affichage du panier quand on l'ouvre
    if (pageId === "cart") renderCart();
    if (pageId === "checkout") renderCheckout();
  };

  // --- RENDER HOME ---
  function renderHome() {
    // Catégories
    const catContainer = document.getElementById("cat-scroll");
    catContainer.innerHTML = appData
      .map(
        (c) => `
            <div class="cat-card" onclick="openCategory('${c.id}')">
                <img src="${c.image}" alt="">
                <div class="title">${c.name}</div>
                <div class="flags">🇲🇦 🇪🇸 🇺🇸</div>
            </div>
        `,
      )
      .join("");

    // Récents (Prend 3 produits)
    const recContainer = document.getElementById("recent-scroll");
    recContainer.innerHTML = allProducts
      .slice(0, 3)
      .map((p) => createCardHTML(p, true))
      .join("");

    // Tendances (Prend le reste)
    const trendContainer = document.getElementById("trend-grid");
    trendContainer.innerHTML = allProducts
      .slice(3, 7)
      .map((p) => createCardHTML(p, false))
      .join("");
  }

  function createCardHTML(p, isLarge) {
    const badge = p.farmName || p.farm || p.type || "Premium";
    const image = p.image && p.image.trim() !== "" ? p.image : "Logo.jpg";
    return `
            <div class="prod-card-lg" style="${!isLarge ? "flex:none; width:100%;" : ""}" onclick="openProduct('${p.id}')">
                <img src="${image}" alt="${p.name}">
                <div class="info">
                    <div class="badge">${badge}</div>
                    <div class="title">${p.name}</div>
                    <div class="btn-outline">Voir les détails</div>
                </div>
            </div>
        `;
  }

  window.openCategory = function (catId) {
    const cat = appData.find((c) => c.id === catId);
    document.getElementById("cat-list-title").innerText = cat.name;

        const catBannerImg = document.getElementById("cat-banner-img");
    const catBannerBg = document.getElementById("cat-banner-bg");

    if (catBannerImg && catBannerBg) {
        catBannerImg.src = cat.image || "";
        catBannerBg.src = cat.image || "";
        catBannerImg.alt = cat.name;
    }

    const selectWrapper = document.querySelector(".search-container");
    const selectEl = document.getElementById("cat-type-select");

    function displayFilteredProducts(filterValue) {
      let html = "";
      cat.farms.forEach((f) => {
        if (filterValue === "ALL" || f.id === filterValue) {
          f.products.forEach((p) => {
            html += createCardHTML(p, false);
          });
        }
      });

      if (!html) {
        html = `<p style="text-align:center; color:var(--text-muted); width:100%; grid-column:1/-1; padding-top:20px;">Aucun produit disponible.</p>`;
      }
      document.getElementById("cat-list-grid").innerHTML = html;
    }

    // Monkey.D : certaines catégories vont direct aux produits, sans sous-menu
    if (cat.directToProducts === true) {
      if (selectWrapper) selectWrapper.style.display = "none";
      displayFilteredProducts("ALL");
      navigate("cat-list");
      return;
    }

    if (selectWrapper) selectWrapper.style.display = "block";
    let selectHTML = `<option value="ALL">✨ Tout afficher (${cat.name})</option>`;
    cat.farms.forEach((f) => {
      selectHTML += `<option value="${f.id}">🔹 ${f.name}</option>`;
    });
    selectEl.innerHTML = selectHTML;

    displayFilteredProducts("ALL");

    selectEl.onchange = function (e) {
      displayFilteredProducts(e.target.value);
      if (tg.HapticFeedback) {
        tg.HapticFeedback.selectionChanged();
      }
    };

    navigate("cat-list");
  };


  function productVideoControlsHTML() {
    return `
        <div class="product-video-controls">
            <button type="button" id="video-play-pause">⏸</button>
            <button type="button" id="video-back-10">↺ 10s</button>
            <button type="button" id="video-fullscreen">⛶</button>
        </div>
    `;
}

function showProductVideoControls() {
    const layer = document.getElementById("product-video-controls-layer");
    if (!layer) return;

    layer.innerHTML = productVideoControlsHTML();
    bindProductVideoControls();
}

function hideProductVideoControls() {
    const layer = document.getElementById("product-video-controls-layer");
    if (!layer) return;

    layer.innerHTML = "";
}

function getActiveProductVideo() {
    const mediaZone = document.getElementById("prod-media");
    const videos = Array.from(mediaZone.querySelectorAll("video"));

    if (videos.length === 0) return null;
    if (videos.length === 1) return videos[0];

    const center = mediaZone.scrollLeft + mediaZone.clientWidth / 2;

    return videos.reduce((best, video) => {
        const slide = video.closest(".multi-video-slide");
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(slideCenter - center);

        return distance < best.distance ? { video, distance } : best;
    }, { video: videos[0], distance: Infinity }).video;
}

function bindProductVideoControls() {
    const playPauseBtn = document.getElementById("video-play-pause");
    const backBtn = document.getElementById("video-back-10");
    const fullscreenBtn = document.getElementById("video-fullscreen");

    if (!playPauseBtn || !backBtn || !fullscreenBtn) return;

    playPauseBtn.onclick = () => {
        const video = getActiveProductVideo();
        if (!video) return;

        if (video.paused) {
            video.play();
            playPauseBtn.innerText = "⏸";
        } else {
            video.pause();
            playPauseBtn.innerText = "▶";
        }
    };

    backBtn.onclick = () => {
        const video = getActiveProductVideo();
        if (!video) return;

        video.currentTime = Math.max(0, video.currentTime - 10);
    };

    fullscreenBtn.onclick = () => {
        const video = getActiveProductVideo();
        if (!video) return;

        if (video.webkitEnterFullscreen) {
            video.webkitEnterFullscreen(); // iPhone / Safari / Telegram iOS
        } else if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    };
}

  // --- RENDER PRODUCT ---
  window.openProduct = function (id) {
    currentProd = allProducts.find((p) => p.id === id);
    currQty = 1;
    currTarif = currentProd.tarifs[0];
    currVar = currentProd.jars ? currentProd.jars[0].name : null;

    // Media (Gestion des vidéos uniques ou multiples avec indicateur de swipe)
    const mediaZone = document.getElementById("prod-media");
    mediaZone.className = "prod-media-zone"; // Reset classe de base

    if (currentProd.videos && currentProd.videos.length > 0) {
    mediaZone.classList.add("multiple-media");

    let html = currentProd.videos
        .map(
            (v) => `
                <div class="multi-video-slide">
                    <video autoplay loop muted playsinline controls>
                        <source src="${v}" type="video/mp4">
                    </video>
                </div>
            `
        )
        .join("");

    if (currentProd.videos.length > 1) {
        html += `<div class="swipe-hint">Swipe ➡️</div>`;
    }

   mediaZone.innerHTML = html;
showProductVideoControls();

} else if (currentProd.video) {
    mediaZone.innerHTML = `
    <video autoplay loop muted playsinline controls>
        <source src="${currentProd.video}" type="video/mp4">
    </video>
`;

showProductVideoControls();

} else {
    mediaZone.innerHTML = `<img src="${currentProd.image}">`;
hideProductVideoControls();
}
    

    document.getElementById("p-name").innerText = currentProd.name;
    // Injection dynamique du type de produit (ex: Top90u, FrozenSift...)
    document.getElementById("p-type").innerText = currentProd.type
      ? currentProd.type
      : "Premium";
    document.getElementById("p-desc").innerHTML = currentProd.description
      ? currentProd.description.replace(/\n/g, "<br>")
      : "";

    // Variantes
    const vZone = document.getElementById("variants-zone");
    const vScroll = document.getElementById("p-variants");
    if (currentProd.jars) {
      vZone.style.display = "block";
      vScroll.innerHTML = currentProd.jars
        .map(
          (j, i) => `
                <div class="tarif-pill var-btn ${i === 0 ? "active" : ""}" data-val="${j.name}">
                    <span class="w">${j.emoji}</span>
                    <span class="p">${j.name}</span>
                </div>
            `,
        )
        .join("");

      document.querySelectorAll(".var-btn").forEach((b) => {
        b.onclick = (e) => {
          document
            .querySelectorAll(".var-btn")
            .forEach((btn) => btn.classList.remove("active"));
          e.currentTarget.classList.add("active");
          currVar = e.currentTarget.dataset.val;
          tg.HapticFeedback.selectionChanged();
        };
      });
    } else {
      vZone.style.display = "none";
    }

    // Tarifs
    const tScroll = document.getElementById("p-tarifs");
    tScroll.innerHTML = currentProd.tarifs
      .map(
        (t, i) => `
            <div class="tarif-pill tar-btn ${i === 0 ? "active" : ""}" data-idx="${i}">
                <span class="w">${t.weight}</span>
                <span class="p">${t.price}€</span>
            </div>
        `,
      )
      .join("");

    document.querySelectorAll(".tar-btn").forEach((b) => {
      b.onclick = (e) => {
        document
          .querySelectorAll(".tar-btn")
          .forEach((btn) => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");
        currTarif = currentProd.tarifs[e.currentTarget.dataset.idx];
        updateProdTotal();
        tg.HapticFeedback.selectionChanged();
      };
    });

    updateProdTotal();
    navigate("product");
  };

  function updateProdTotal() {
    document.getElementById("p-qty").innerText = currQty;
    document.getElementById("p-total").innerText =
      (currTarif.price * currQty).toFixed(2) + "€";
  }

  document.getElementById("p-minus").onclick = () => {
    if (currQty > 1) {
      currQty--;
      updateProdTotal();
    }
  };
  document.getElementById("p-plus").onclick = () => {
    currQty++;
    updateProdTotal();
  };

  document.getElementById("p-add").onclick = () => {
    const cartId = `${currentProd.id}-${currTarif.weight}-${currVar || "def"}`;
    const ext = cart.find((i) => i.id === cartId);
    let fn = currentProd.name;
    if (currVar) fn += ` (${currVar})`;

    if (ext) {
      ext.qty += currQty;
      ext.tot = ext.qty * ext.price;
    } else {
      cart.push({
        id: cartId,
        name: fn,
        img: currentProd.image,
        weight: currTarif.weight,
        price: currTarif.price,
        qty: currQty,
        tot: currTarif.price * currQty,
      });
    }

    tg.HapticFeedback.notificationOccurred("success");
    document.getElementById("success-modal").style.display = "flex";
    updateBadge();
  };

  // --- PANIER ---
  function updateBadge() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const b = document.getElementById("nav-badge");
    b.innerText = count;
    b.style.display = count > 0 ? "flex" : "none";
  }

  function renderCart() {
    const list = document.getElementById("cart-list");
    if (cart.length === 0) {
      list.innerHTML = `<p style="text-align:center;color:var(--text-muted);margin-top:40px;">Panier vide</p>`;
      document.getElementById("cart-recap-text").innerText = "Total (0)";
      document.getElementById("cart-total-display").innerText = "0€";
      return;
    }

    list.innerHTML = cart
      .map(
        (i) => `
            <div class="cart-item">
                <img src="${i.img || 'Logo.jpg'}">
                <div style="flex-grow:1">
                    <div style="font-weight:800; font-size:0.95rem;">${i.name}</div>
                    <div style="color:var(--text-muted); font-size:0.8rem; margin: 4px 0;">Grammage: ${i.weight}</div>
                    <div style="font-weight:800;">${i.tot.toFixed(2)}€</div>
                </div>
                <div style="display:flex; align-items:center; background:var(--bg-color); border-radius:10px; padding:4px;">
                    <button style="border:none;background:none;font-size:1.2rem;font-weight:bold;width:30px;" onclick="modCart('${i.id}',-1)">-</button>
                    <span style="font-weight:800; width:20px; text-align:center;">${i.qty}</span>
                    <button style="border:none;background:none;font-size:1.2rem;font-weight:bold;width:30px;" onclick="modCart('${i.id}',1)">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const sum = cart.reduce((s, i) => s + i.tot, 0);
    const count = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById("cart-recap-text").innerText =
      `Total (${count} articles)`;
    document.getElementById("cart-total-display").innerText =
      sum.toFixed(2) + "€";
  }

  window.modCart = function (id, d) {
    const item = cart.find((i) => i.id === id);
    item.qty += d;
    if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
    else item.tot = item.qty * item.price;
    renderCart();
    updateBadge();
  };

  // --- CHECKOUT & SWIPE ---
  function renderCheckout() {
    const cItems = document.getElementById("checkout-items");
    cItems.innerHTML = cart
      .map((i) => `• ${i.name} (${i.weight}) x${i.qty} — ${i.tot.toFixed(2)}€`)
      .join("<br>");
    const sum = cart.reduce((s, i) => s + i.tot, 0);
    document.getElementById("checkout-total").innerText =
      `Total: ${sum.toFixed(2)}€`;
  }

  document.querySelectorAll(".mode-btn").forEach((b) => {
    b.onclick = (e) => {
      document
        .querySelectorAll(".mode-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.currentTarget.classList.add("active");
      checkoutMode = e.currentTarget.dataset.m;

      const info = document.getElementById("info-text");
      const addr = document.getElementById("address-field");
      if (checkoutMode === "Livraison") {
        info.innerText = "L'adresse vous sera communiquée en MP.";
        addr.style.display = "block";
      }
      if (checkoutMode === "Meet-up") {
        info.innerText = "Lieu exact communiqué après validation.";
        addr.style.display = "none";
      }
      if (checkoutMode === "Envoi colis") {
        info.innerText = "Suivi d'envoi confirmé après validation.";
        addr.style.display = "block";
        addr.placeholder = "Adresse postale complète...";
      }
    };
  });

  // Slider Logique Native
  const swipeBtn = document.getElementById("swipe-btn");
  const swipeBox = document.getElementById("swipe-box");
  let isDragging = false,
    startX = 0;

  swipeBtn.addEventListener("touchstart", (e) => {
    if (cart.length === 0) return;
    isDragging = true;
    startX = e.touches[0].clientX - swipeBtn.offsetLeft;
    swipeBtn.style.transition = "none";
  });
  swipeBtn.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const max = swipeBox.offsetWidth - swipeBtn.offsetWidth - 8;
    let x = e.touches[0].clientX - startX;
    if (x < 4) x = 4;
    if (x > max) x = max;
    swipeBtn.style.left = `${x}px`;
  });
  swipeBtn.addEventListener("touchend", () => {
    isDragging = false;
    const max = swipeBox.offsetWidth - swipeBtn.offsetWidth - 8;
    const cur = parseInt(swipeBtn.style.left || 4);
    if (cur > max * 0.85) {
      swipeBtn.style.left = `${max}px`;
      swipeBtn.style.background = "var(--green)";
      swipeBtn.innerHTML = "✓";
      tg.HapticFeedback.notificationOccurred("success");

      // Envoi Message
      let msg = `*🛒 COMMANDE MONKEY.D THE DRY*\n\n`;
      cart.forEach((i) => {
        msg += `▪️ *${i.name}* (${i.weight}) x${i.qty} = ${i.tot.toFixed(2)}€\n`;
      });
      const sum = cart.reduce((s, i) => s + i.tot, 0);
      msg += `\n*💰 TOTAL: ${sum.toFixed(2)}€*\n*📦 Mode:* ${checkoutMode}\n`;
      if (document.getElementById("address-field").style.display !== "none") {
        msg += `*📍 Adresse:* ${document.getElementById("address-field").value || "Non précisée"}`;
      }
      tg.openTelegramLink(
        `https://t.me/MonkeyDieLuffy2?text=${encodeURIComponent(msg)}`,
      );

      setTimeout(() => {
        swipeBtn.style.transition = "left 0.3s ease, background 0.3s ease";
        swipeBtn.style.left = "4px";
        swipeBtn.style.background = "var(--blue)";
        swipeBtn.innerHTML =
          '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
      }, 2000);
    } else {
      swipeBtn.style.transition = "left 0.3s ease";
      swipeBtn.style.left = "4px";
    }
  });

  // --- GESTION DES CLICS SUR LA NOUVELLE NAVBAR ---
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.dataset.target;
      if (!target) return;

      // Les fameuses lignes pour l'animation de la pilule !
      document
        .querySelectorAll(".nav-item-float")
        .forEach((i) => i.classList.remove("active"));
      if (e.currentTarget.classList.contains("nav-item-float")) {
        e.currentTarget.classList.add("active");
      }

      // Redirection vers la bonne page
      const pageName = target.replace("page-", "");
      navigate(pageName);
    });
  });

  // NE TOUCHE PAS AUX DEUX LIGNES EN DESSOUS (Elles y sont déjà)
  renderHome();
});
