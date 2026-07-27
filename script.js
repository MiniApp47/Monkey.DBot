// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

   // --- CONFIGURATION DES LIENS DE CONTACT ---
const contactLinks = [
    {
        name: 'TELEGRAM 🌐',
        url: 'https://t.me/MonkeyDieLuffy',
        icon: '#icon-telegram',
        id: 'telegram-main',
        className: 'telegram-main',
        text: "TELEGRAM 🌐"
    },
    {
        name: 'PAGE INSTAGRAM 🟣',
        url: 'https://www.instagram.com/realuffythedry.31?igsh=MWNsenVrdncwcmswdA%3D%3D&utm_source=qr',
        icon: '#icon-instagram',
        id: 'insta-main',
        className: 'insta-main',
        text: "INSTAGRAM 🟣"
    },
    {
        name: 'POTATO 🥔',
        url: 'https://tatokdym.org/joinchat/HjXuEMdY2hj94aLmMabCrg',
        icon: '#icon-potato',
        id: 'potato-main',
        className: 'potato-main',
        text: "POTATO 🥔"
    }
];

   // --- DONNÉES DE L'APPLICATION (NOUVELLE STRUCTURE CALITERPS33) ---
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
                            id: 'Candy Fruit 🍑🍌🍬',
                            name: 'Candy Fruit 🍑🍌🍬',
                            farm: '👨‍🌾 TOP DRY 120u  👨‍🌾',
                            promoEligible: false,
                            type: 'Hash',
                            image: 'ProductCF.png',
                            video: 'VideoCF.mov',
                            description: '',
                            tarifs: [
                                { weight: '50g', price: 200.00 },
                                { weight: '100g', price: 360.00 },
                                { weight: '500g', price: 1650.00 },
                                { weight: '1K', price: 2900.00 },
                            ]
                        },
                        {
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
                        },
                    ]
                },
                {
                    id: 'FROZEN',
                    name: 'FRESH FROZEN 🧊',
                    image: '',
                    badgeText: '1 produit',
                    products: [
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
                        {
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
                        },
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
                    name: '🇺🇸 RÉAL CALI USA 📦',
                    image: '',
                    badgeText: '1 produit',
                    products: [
                    ]
                }
            ]
        },

       
    ];

    // --- VARIABLES D'ÉTAT ---
    let cart = [];
    let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    };
    let currentView = 'categories';
    let currentCategoryId = null;
    let currentFarmId = null;
    let appliedPromo = null;
    let paymentMethod = 'Espèce';

    // --- DÉFINIS TES CODES PROMO ICI ---
    const validPromoCodes = {
        "ACTUPLUG33": {
            type: 'fixed',
            value: 10,
            appliesTo: 'eligible'
        }
    };


    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');
    const filterContainer = document.querySelector('.filters');
    const searchFilterWrapper = document.getElementById('search-filter').parentElement;
    const qualityFilterWrapper = document.getElementById('quality-filter').parentElement;
    const farmFilterWrapper = document.getElementById('farm-filter').parentElement;

    // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
    function getProductById(productId) {
        for (const category of appData) {
            for (const farm of category.farms) {
                const product = farm.products.find(p => p.id === productId);
                if (product) {
                    return product;
                }
            }
        }
        return undefined;
    }

    // --- NAVIGATION ---
    function showPage(pageId) {
        // Coupe toutes les vidéos instantanément au changement de page
        document.querySelectorAll('video').forEach(video => {
            video.pause();
        });
            
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        }

        const homeNav = document.getElementById('nav-menu');
        const infoNav = document.getElementById('nav-info');
        const contactNav = document.getElementById('nav-contact');

        homeNav.classList.remove('active');
        infoNav.classList.remove('active');
        contactNav.classList.remove('active');

        if (pageId === 'page-contact') {
            contactNav.classList.add('active');
        } else if (pageId === 'page-info') {
            infoNav.classList.add('active');
        } else {
            homeNav.classList.add('active');
        }
    }

    function renderFarmList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        const farms = category.farms;

        productListContainer.innerHTML = '';
        if (farms.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune sous-catégorie disponible.</p>';
            return;
        }

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'sub-categories-container';

        farms.forEach(farm => {
            const button = document.createElement('button');
            button.className = 'sub-category-btn';
            button.dataset.farmId = farm.id;

            if (farm.clickable === false) {
                button.style.opacity = '0.6';
                button.style.cursor = 'not-allowed';
            }

            const productCount = farm.products.length;
            const badgeTextContent = productCount > 0 ? `${productCount} produit${productCount > 1 ? 's' : ''}` : (farm.badgeText || '');

            button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ''}
        `;
            buttonsContainer.appendChild(button);
        });

        productListContainer.appendChild(buttonsContainer);
    }

    function renderHomePage() {
        filterContainer.style.display = 'flex';

        const existingBackBtnCat = filterContainer.querySelector('.back-to-categories-btn');
        if (existingBackBtnCat) existingBackBtnCat.remove();
        const existingBackBtnFarm = filterContainer.querySelector('.back-to-farms-btn');
        if (existingBackBtnFarm) existingBackBtnFarm.remove();


        if (currentView === 'categories') {
            renderCategoryList();
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'flex';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

        } else if (currentView === 'farms') {
            renderFarmList(currentCategoryId);
            searchFilterWrapper.style.display = 'none';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';

            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
            backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #5b37d4;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);

        } else if (currentView === 'products') {
            renderProductList(currentCategoryId);
            searchFilterWrapper.style.display = 'flex';
            farmFilterWrapper.style.display = 'none';
            qualityFilterWrapper.style.display = 'none';
            
            // LIGNE AJOUTÉE ICI : On met les packs sur 1 colonne, le reste sur 2
            if (currentCategoryId === 'PackPromo') {
                productListContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
            } else {
                productListContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
            }

            const category = appData.find(c => c.id === currentCategoryId);
            const backButton = document.createElement('button');
            backButton.className = 'back-to-categories-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>  ${category.name}`;
            backButton.style.cssText = ` background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid #5b37d4;
            border-top: none;
            border-left: none;
            border-right: none;
        color: white; padding: 10px 15px; 
        border-radius: 10px; font-size: 1.1rem; 
        font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh;    font-family: Copperplate;
        `;
            filterContainer.prepend(backButton);
        }
    }

    function renderCategoryList() {
        const filteredCategories = appData.filter(category => {
            const searchMatch = category.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const qualityMatch = currentFilters.quality === 'all' || category.quality === currentFilters.quality;
            return searchMatch && qualityMatch;
        });

        productListContainer.innerHTML = '';
        if (filteredCategories.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
            return;
        }

        filteredCategories.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id;

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
            `;
            productListContainer.appendChild(card);
        });
    }

    function renderProductList(categoryId) {
        const category = appData.find(c => c.id === categoryId);
        if (!category) {
            productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
            return;
        }

        let allProducts = [];

        if (currentFarmId) {
            const selectedFarm = category.farms.find(f => f.id === currentFarmId);
            if (selectedFarm) {
                allProducts = selectedFarm.products;
            }
            const backButton = document.createElement('button');
            backButton.className = 'back-to-farms-btn';
            backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> Retour aux choix`;
            backButton.style.cssText = `background: linear-gradient(180deg, black, transparent); border-bottom: 2px solid #5b37d4; border-top: none; border-left: none; border-right: none; color: white; padding: 10px 15px; border-radius: 10px; font-size: 1.1rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; margin-top: 3vh; font-family: Copperplate;`;

            const existingBtn = filterContainer.querySelector('.back-to-farms-btn');
            if (!existingBtn) filterContainer.prepend(backButton);
        }
        else {
            allProducts = category.farms.flatMap(farm => farm.products);
            // On ne met pas le bouton retour ici car il est géré dans renderHomePage
        }

        if (!allProducts || allProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
            return;
        }

        const filteredProducts = allProducts.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm.toLowerCase());
            const farmMatch = currentFarmId ? true : (currentFilters.farm === 'all' || product.farm === currentFilters.farm);
            return searchMatch && farmMatch;
        });

        productListContainer.innerHTML = '';

        filteredProducts.forEach(product => {
            const card = document.createElement('div');

            if (product.type === 'Promo') {
                card.className = 'product-card promo-card';
                card.innerHTML = `
                <div class="info">
                    <div class="promo-icon">🎄</div>
                    <div class="name">${product.name}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
            }
            else {
                card.className = 'product-card product-item-card';
                card.dataset.productId = product.id;

                if (product.clickable === false) {
                    card.classList.add('unclickable');
                }

                let flagHTML = product.flag ? `<span class="product-flag">${product.flag}</span>` : '';
                
                // LIGNE AJOUTÉE ICI : On affiche l'image QUE si elle n'est pas vide
                let imgHTML = product.image ? `<img src="${product.image}" alt="${product.name}">` : '';

                card.innerHTML = `
                ${imgHTML}
                <div class="info" style="${!product.image ? '' : ''}">
                    <div class="name" style="${!product.image ? 'font-size: 1.2rem;' : ''}">${product.name} ${flagHTML}</div>
                    <div class="farm" style="${!product.image ? 'font-size: 1rem; margin-bottom: 10px;' : ''}">${product.farm}</div>
                    <div class="price" style="${!product.image ? 'font-size: 1.2rem; color: #ca351d;' : ''}">${typeof product.tarifs[0].price === 'number' ? product.tarifs[0].price.toFixed(2) + '€' : product.tarifs[0].price}</div>
                </div>
            `;
            }

            productListContainer.appendChild(card);
        });
    }

    // --- FONCTION MODIFIÉE POUR GÉRER LE PRIX TEXTE, LES CARROUSELS ET LE BADGE PROMO ---
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        let mediaHTML = '';

        if (product.videos && product.videos.length > 0) {
            const slides = product.videos.map((vid, index) => `
            <div class="carousel-slide">
                <video class="product-video" src="${vid}" controls playsinline ${index === 0 && product.image ? `poster="${product.image}"` : ''}></video>
            </div>
        `).join('');

            mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les vidéos</div>
        `;
        } else if (product.images && product.images.length > 0) {
            const slides = product.images.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `).join('');

            mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les photos</div>
        `;
        } else if (product.video || product.image) {
            mediaHTML = `
            <video class="product-video" poster="${product.image || ''}" src="${product.video || ''}" ${product.video ? 'controls playsinline' : ''}></video>
        `;
        }

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');

        const weightStyle = product.useSmallText ? 'font-size: 1.8vh; line-height: 1.2;' : '';

        let tarifsHTML = product.tarifs.map(tarif => {
            const isPriceNumber = typeof tarif.price === 'number';
            const priceDisplay = isPriceNumber ? tarif.price.toFixed(2) + '€' : tarif.price;

            const actionButton = isPriceNumber
                ? `<button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                     <svg width="20" height="20"><use href="#icon-cart"/></svg>
                   </button>`
                : `<button class="contact-btn-small" style="background: none; border: 1px solid black; width: 5vh; border-radius: 20px;" onclick="window.Telegram.WebApp.openLink('https://t.me/THEGAZCOMMANDE')">
                     <svg width="20" height="20" style="fill:white"><use href="#icon-telegram"/></svg>
                   </button>`;

            // --- NOUVEAUTÉ : GÉNÉRATION DU BADGE PROMO ---
            let promoBadge = '';
            // On vérifie si le type du produit contient le mot "FROZEN" (ça marche pour "FRESH FROZEN", "FROZEN SIFT", "💎 Fresh Frozen 💎", etc.)
          /*   if (product.type && product.type.toUpperCase().includes('FROZEN')) {
                promoBadge = `<div style="position: absolute; top: -8px; left: -8px; background: linear-gradient(45deg, #ff0000, #ff8c00); color: white; padding: 3px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 900; font-family: 'Impact', sans-serif; border: 1px solid white; box-shadow: 0px 0px 8px rgba(255,0,0,0.8); transform: rotate(-5deg); z-index: 10;">🔥 PROMO</div>`;
            } */

            // On ajoute "position: relative;" sur la div principale pour que le badge se positionne bien par rapport à la case
            return `
        <div class="tarif-item" style="position: relative;">
            ${promoBadge}
            <div class="box-tarif">
                <div class="tarif-wieght" style="${weightStyle}">${tarif.weight}</div>
                <div class="tarif-price">${priceDisplay}</div>
            </div>
            ${actionButton}
        </div>
        `;
        }).join('');

        let descriptionHTML = '';
        if (product.description) {
            descriptionHTML = `<div class="product-description">${product.description}</div>`;
        }

        const pageContent = document.querySelector('#page-product .page-content');

        pageContent.innerHTML = `
        ${mediaHTML}
        <div id="product-details-content" class="product-details">
            <div class="name" style="text-align: center;">${product.name}</div>
            <div class="farm" style="text-align: center;">${product.farm}</div>
            ${descriptionHTML} 
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">
                ${tarifsHTML}
            </div>
        </div>
    `;

        showPage('page-product');
    }

    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }

        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image || ''}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }

    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        let discountableAmount = 0;

        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];

            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }

            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else { // 'fixed'
                discount = promo.value;
            }
        }

        if (discount > subTotal) {
            discount = subTotal;
        }

        const totalPrice = subTotal - discount;

        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;

        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item">
                <img src="${item.image || ''}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');

        const promoInputContainer = document.getElementById('promo-input-container');
        const promoAppliedContainer = document.getElementById('promo-applied-container');
        if (appliedPromo) {
            promoInputContainer.style.display = 'none';
            promoAppliedContainer.style.display = 'flex';
            document.getElementById('promo-applied-text').innerText = `Code "${appliedPromo}" appliqué !`;
        } else {
            promoInputContainer.style.display = 'flex';
            promoAppliedContainer.style.display = 'none';
            document.getElementById('promo-code-input').value = '';
        }

        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.method === paymentMethod);
        });

        const summaryContainer = document.getElementById('confirmation-summary');
        let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
        if (discount > 0) {
            summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
        }
        summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
        summaryContainer.innerHTML = summaryHTML;

        showPage('page-confirmation');
    }

    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

        const allNestedProducts = appData.flatMap(category => category.farms.flatMap(farm => farm.products));

        const categoryQualities = appData.map(c => c.quality);
        const qualities = ['all', ...new Set(categoryQualities)];

        const productFarms = allNestedProducts.map(p => p.farm);
        const farms = ['all', ...new Set(productFarms)];

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'CATEGORIE' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'LES FARM' : farm}</option>`).join('');

        searchFilter.addEventListener('input', (e) => {
            currentFilters.searchTerm = e.target.value;
            renderHomePage();
        });

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderHomePage();
        });

        farmFilter.addEventListener('change', (e) => {
            currentFilters.farm = e.target.value;
            renderHomePage();
        });
    }

    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;

        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;

        notification.innerText = message;
        notification.classList.add('show');

        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);

        const product = getProductById(productId);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
        renderCart();
    }

    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        let discount = 0;
        if (appliedPromo) {
            const promo = validPromoCodes[appliedPromo];
            let discountableAmount = 0;
            if (promo.appliesTo === 'eligible') {
                cart.forEach(item => {
                    const product = getProductById(item.productId);
                    if (product && product.promoEligible) {
                        discountableAmount += item.totalPrice;
                    }
                });
            } else {
                discountableAmount = subTotal;
            }
            if (promo.type === 'percent') {
                discount = (discountableAmount * promo.value) / 100;
            } else {
                discount = promo.value;
            }
        }
        if (discount > subTotal) discount = subTotal;
        const totalPrice = subTotal - discount;

        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Méthode de paiement: ${paymentMethod}\n`;
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;

        cart.forEach((item) => {
            message += `\n- ${item.id}`;
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });

        message += `\n\n====================\n`;
        message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
        if (discount > 0) {
            message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`;
        }
        message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += " \n-LIVRAISON: A convenir\n";
        message += " \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;
        return message;
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;

            if (pageId === 'page-contact') {
                renderContactPage();
            }

            if (pageId === 'page-home') {
                currentView = 'categories';
                currentCategoryId = null;
                currentFilters.searchTerm = '';
                currentFilters.quality = 'all';
                currentFilters.farm = 'all';
                document.getElementById('search-filter').value = '';
                document.getElementById('quality-filter').value = 'all';
                document.getElementById('farm-filter').value = 'all';

                renderHomePage();
            }

            showPage(pageId);
        });
    });

    document.body.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('#copy-order-btn')) {
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');

            const copyBtn = document.getElementById('copy-order-btn');
            const contactBtn = document.getElementById('confirm-order-button');

            copyBtn.classList.remove('main-action-btn');
            copyBtn.classList.add('secondary-action-btn');

            contactBtn.classList.remove('secondary-action-btn');
            contactBtn.classList.add('main-action-btn');
            contactBtn.disabled = false;
            return;
        }

        // LIGNE MODIFIÉE ICI : Le cœur de l'interception des packs
       const categoryCard = target.closest('.category-card');
if (categoryCard) {
    currentCategoryId = categoryCard.dataset.categoryId;

    const category = appData.find(c => c.id === currentCategoryId);

    if (!category) {
        console.error('Catégorie introuvable :', currentCategoryId);
        return;
    }

    if (category.directToProducts === true) {
        currentView = 'products';
        currentFarmId = null;
    } else {
        currentView = 'farms';
        currentFarmId = null;
    }

    currentFilters.searchTerm = '';
    document.getElementById('search-filter').value = '';
    renderHomePage();
    return;
}
        const accordionHeader = target.closest('.accordion-header');
        if (accordionHeader) {
            const accordionItem = accordionHeader.parentElement;

            document.querySelectorAll('#page-info .accordion-item.active').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });

            accordionItem.classList.toggle('active');
            return;
        }

        const subCategoryBtn = target.closest('.sub-category-btn');

        if (subCategoryBtn) {
            if (subCategoryBtn.style.cursor === 'not-allowed') return;

            currentView = 'products';
            currentFarmId = subCategoryBtn.dataset.farmId;

            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        const productCard = target.closest('.product-item-card');
        if (productCard) {

            if (productCard.classList.contains('unclickable')) {
                return;
            }
            renderProductPage(productCard.dataset.productId);
            return;
        }

        if (target.closest('.back-to-categories-btn')) {
            currentView = 'categories';
            currentCategoryId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        if (target.closest('.back-to-farms-btn')) {
            currentView = 'farms';
            currentFarmId = null;
            currentFilters.searchTerm = '';
            document.getElementById('search-filter').value = '';
            renderHomePage();
            return;
        }

        if (target.closest('#apply-promo-btn')) {
            const input = document.getElementById('promo-code-input');
            const code = input.value.toUpperCase();

            if (validPromoCodes[code]) {
                appliedPromo = code;
                tg.HapticFeedback.notificationOccurred('success');
                showNotification('✅ Code promo appliqué !');
            } else {
                appliedPromo = null;
                tg.HapticFeedback.notificationOccurred('error');
                showNotification('❌ Code promo invalide.');
            }
            renderConfirmation();
        }

        if (target.closest('#remove-promo-btn')) {
            appliedPromo = null;
            showNotification('Code promo retiré.');
            renderConfirmation();
        }

        if (target.closest('.payment-btn')) {
            paymentMethod = target.closest('.payment-btn').dataset.method;
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.method === paymentMethod);
            });
        }

        if (target.closest('.add-to-cart-btn')) {
            const btn = target.closest('.add-to-cart-btn');
            addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
        }

        if (target.closest('.quantity-btn')) {
            const btn = target.closest('.quantity-btn');
            updateQuantity(btn.dataset.id, btn.dataset.action);
        }

        if (target.closest('.close-button')) {
            showPage('page-home');
        }

        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
        }

        if (target.closest('.back-button')) {
            showPage('page-home');
        }

        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
        }

        if (target.closest('#checkout-button')) {
            renderConfirmation();
        }

        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
        }

       if (target.closest('#confirm-order-button')) {
            // Remplace l'ancien identifiant par le bon compte de réception
            const targetUsername = 'TERPSCOMMANDE33'; 
            
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;
            tg.openLink(telegramUrl);
        }
    });

    function init() {
        setTimeout(() => {
            populateFilters();
            renderHomePage();
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});