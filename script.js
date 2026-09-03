document.addEventListener("DOMContentLoaded", function () {
 const tg = window.Telegram?.WebApp || {
  ready() {}, expand() {}, setHeaderColor() {}, setBackgroundColor() {},
  HapticFeedback: { impactOccurred() {}, selectionChanged() {}, notificationOccurred() {} },
  initDataUnsafe: { user: null },
  sendData() {}, showAlert(msg) { alert(msg); }
 };
 tg.ready();
 tg.expand();
 try { tg.setHeaderColor("#5b37d4"); tg.setBackgroundColor("#101014"); } catch(e) {}

 const loader = document.getElementById("page-loader");
 setTimeout(() => loader?.classList.add("hide"), 1250);

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
              id: 'Coche Runtz 🍭🍬',
              name: 'Coche Runtz 🍭🍬',
              farm: 'STICKY FINGERS 73U 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductHB.png',
              video: 'VideoHB.mov',
              description: 'Produit 100% 🇲🇦 Full Seeds 🇺🇸 Rapport Qualite Prix 😱 Premium Quality Certified⭐️Goût Odeur Texture 💥💥Quantité Limite ⏳⌛️',
              tarifs: [
               { weight: '5g', price: 50.00 },
               { weight: '10g', price: 90.00 },
               { weight: '25g', price: 200.00 },
               { weight: '50g', price: 320.00 },
              ]
            },
            {
              id: 'Electic Lemonade ⚡️🍋',
              name: 'Electic Lemonade ⚡️🍋',
              farm: 'STICKY FINGERS 73U 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductEL.png',
              video: 'VideoEL.mov',
              description: 'Produit 100% 🇲🇦 Full Seeds 🇺🇸 Rapport Qualite Prix 😱 Premium Quality Certified⭐️Goût Odeur Texture 💥💥Quantité Limite ⏳⌛️',
              tarifs: [
               { weight: '5g', price: 50.00 },
               { weight: '10g', price: 90.00 },
               { weight: '25g', price: 200.00 },
               { weight: '50g', price: 320.00 },
              ]
            },
            {
              id: 'Super Bowl ⚾️',
              name: 'Super Bowl ⚾️',
              farm: 'STICKY FINGERS 73U 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductSB.png',
              video: 'VideoSB.mov',
              description: 'Produit 100% 🇲🇦 Full Seeds 🇺🇸 Rapport Qualite Prix 😱 Premium Quality Certified⭐️Goût Odeur Texture 💥💥Quantité Limite ⏳⌛️',
              tarifs: [
               { weight: '5g', price: 50.00 },
               { weight: '10g', price: 90.00 },
               { weight: '25g', price: 200.00 },
               { weight: '50g', price: 320.00 },
              ]
            },
            /* {
              id: 'Prickly Pearlz 🍇',
              name: 'Prickly Pearlz 🍇',
              farm: 'MOUNTAIN GIANT x ONE PIECE FARM ☠️🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductLR.jpg',
              video: 'VideoPP.mov',
              description: 'Farm Reconnu + Collab One Pièce 🇲🇦☠️ Best Quality Vous Trouverez Pas Mieux Ailleurs 🏆 Goût Bien Fort 🌡️Qualité Frozen Texture Conservation 🇺🇸🧊',
              tarifs: [
               { weight: '5g', price: 50.00 },
               { weight: '10g', price: 80.00 },
               { weight: '25g', price: 150.00 },
               { weight: '50g', price: 200.00 },
               { weight: '100g', price: 360.00 },
               { weight: '500g', price: 1600.00 },
               { weight: '1Kg', price: 2900.00 },
              ]
            }, */
            /* {
              id: 'Lemon Rain 🍋',
              name: 'Lemon Rain 🍋',
              farm: 'MOUNTAIN GIANT x ONE PIECE FARM ☠️🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductLR.jpg',
              video: 'VideoLR.mov',
              description: 'Farm Reconnu + Collab One Pièce 🇲🇦☠️ Best Quality Vous Trouverez Pas Mieux Ailleurs 🏆 Goût Bien Fort 🌡️Qualité Frozen Texture Conservation 🇺🇸🧊',
              tarifs: [
               { weight: '5g', price: 50.00 },
               { weight: '10g', price: 80.00 },
               { weight: '25g', price: 150.00 },
               { weight: '50g', price: 200.00 },
               { weight: '100g', price: 360.00 },
               { weight: '500g', price: 1600.00 },
               { weight: '1Kg', price: 2900.00 },
              ]
            }, */
            /* {
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
               { weight: '25g', price: 170.00 },
               { weight: '50g', price: 280.00 },
              ]
            }, */
            /* {
              id: 'Candy Fruit 🍑🍌🍬',
              name: 'Candy Fruit 🍑🍌🍬',
              farm: '👨‍🌾 TOP DRY 120u 👨‍🌾',
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
            }, */
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
              id: 'Mandarina 🍊',
              name: 'Mandarina 🍊',
              farm: '👨‍🌾 HaramBoyz 👨‍🌾',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductMD.png',
              video: 'VideoMD.mov',
              description: '',
              tarifs: [
                { weight: '3g', price: 50.00 },
                { weight: '5g', price: 70.00 },
                { weight: '10g', price: 120.00 },
                { weight: '25g', price: 270.00 },
                { weight: '50g', price: 380.00 },
                { weight: '100g', price: 700.00 },
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
                { weight: '3g', price: 50.00 },
                { weight: '5g', price: 70.00 },
                { weight: '10g', price: 120.00 },
                { weight: '25g', price: 270.00 },
                { weight: '50g', price: 380.00 },
                { weight: '100g', price: 700.00 },
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
                { weight: '3g', price: 50.00 },
                { weight: '5g', price: 70.00 },
                { weight: '10g', price: 120.00 },
                { weight: '25g', price: 270.00 },
                { weight: '50g', price: 380.00 },
                { weight: '100g', price: 700.00 },
              ]
            },
             {
              id: 'Diez Lemon 🍋⛽️',
              name: 'Diez Lemon 🍋⛽️',
              farm: 'PACO FARMZ 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductDL.png',
              video: 'VideoDL.mp4',
              description: 'Produit Full Handmade 🧤Travail au Gants 🇲🇦 Qualité Aspect Texture Odeur Terps De Fdp 😱😱🇺🇸 Meilleur Hash Du Moment 🔥🔥',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 80.00 },
                { weight: '10g', price: 140.00 },
                { weight: '25g', price: 300.00 },
                { weight: '50g', price: 500.00 },
                { weight: '100g', price: 900.00 },
                            ]
            },
             {
              id: 'Jardin Fruit 🍑🍇🍒🍋',
              name: 'Jardin Fruit 🍑🍇🍒🍋',
              farm: 'PACO FARMZ 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductJF.png',
              video: 'VideoJF.mp4',
              description: 'Produit Full Handmade 🧤Travail au Gants 🇲🇦 Qualité Aspect Texture Odeur Terps De Fdp 😱😱🇺🇸 Meilleur Hash Du Moment 🔥🔥',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 80.00 },
                { weight: '10g', price: 140.00 },
                { weight: '25g', price: 300.00 },
                { weight: '50g', price: 500.00 },
                { weight: '100g', price: 900.00 },
                            ]
            },
             {
              id: 'AnaZookies 🍍🍪',
              name: 'AnaZookies 🍍🍪',
              farm: 'PACO FARMZ 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductAZ.png',
              video: 'VideoAZ.mp4',
              description: 'Produit Full Handmade 🧤Travail au Gants 🇲🇦 Qualité Aspect Texture Odeur Terps De Fdp 😱😱🇺🇸 Meilleur Hash Du Moment 🔥🔥',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 80.00 },
                { weight: '10g', price: 140.00 },
                { weight: '25g', price: 300.00 },
                { weight: '50g', price: 500.00 },
                { weight: '100g', price: 900.00 },
                            ]
            },
             {
              id: 'GMO ⛽️',
              name: 'GMO ⛽️',
              farm: 'PACO FARMZ 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductGMO.png',
              video: 'VideoGMO.mp4',
              description: 'Produit Full Handmade 🧤Travail au Gants 🇲🇦 Qualité Aspect Texture Odeur Terps De Fdp 😱😱🇺🇸 Meilleur Hash Du Moment 🔥🔥',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 80.00 },
                { weight: '10g', price: 140.00 },
                { weight: '25g', price: 300.00 },
                { weight: '50g', price: 500.00 },
                { weight: '100g', price: 900.00 },
                            ]
            },
             {
              id: 'Lem Mandarina 🍋🍊',
              name: 'Lem Mandarina 🍋🍊',
              farm: 'PACO FARMZ 🇲🇦',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductLM.png',
              video: 'VideoLM.mp4',
              description: 'Produit Full Handmade 🧤Travail au Gants 🇲🇦 Qualité Aspect Texture Odeur Terps De Fdp 😱😱🇺🇸 Meilleur Hash Du Moment 🔥🔥',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 80.00 },
                { weight: '10g', price: 140.00 },
                { weight: '25g', price: 300.00 },
                { weight: '50g', price: 500.00 },
                { weight: '100g', price: 900.00 },
                            ]
            },
             /* {
              id: 'White Walker 💎❄️',
              name: 'White Walker 💎❄️',
              farm: 'By EXOTICS ❄️',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductWW.jpg',
              video: 'VideoWW.mov',
              videos: ['VideoWW.mov','VideoWW2.mov'],
              description: 'Fresh Frozen Premium 💎🧊 \n\n Pur Produit Des USA 🇺🇸 Fresh Frozen Full Melt Full Terps 🇺🇸🍯 Pour Les Adeptes De La Fume Forte 🌡️🫁 Produit De Folie 🤯🧠 Très Limité 💥💥',
              tarifs: [
                { weight: '1g', price: 30.00 },
                { weight: '3g', price: 90.00 },
                { weight: '5g', price: 120.00 },
                { weight: '10g', price: 220.00 },
                { weight: '20g', price: 420.00 },
                            ]
            }, */
             /* {
              id: 'Blue Cookies 🔵🍪',
              name: 'Blue Cookies 🔵🍪',
              farm: 'FEDERALSIFT RESERVE 🇺🇸⭐️',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductBC.png',
              video: 'VideoBC.mp4',
              description: 'Fresh Frozen Premium 💎🧊 \n\n Pur Produit 🇺🇸 Terps De Folie 🥇💥🧙🏼 Full Melt 🍯 Pour Les Gros Pecs 🫁 Qui Aime Les Produit Bien Fort 🌡️ Le Prix C’est Cadeau 🎁',
              tarifs: [
               { weight: '5g', price: 100.00 },
                { weight: '10g', price: 180.00 },
                { weight: '25g', price: 370.00 },
                { weight: '50g', price: 750.00 },
                { weight: '100g', price: 1400.00 },
              ]
            }, */
            /*  {
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
            }, */

            
          ]
        },
        {
          id: 'STATIC_1',
          name: 'STATIC USA 🇺🇸',
          image: '',
          badgeText: '1 produit',
          products: [
           /*  {
              id: 'Papaya x Zangria 🥭🥤',
              name: 'Papaya x Zangria 🥭🥤',
              farm: 'Wizard Treez x Golden Warriors 🇺🇸',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductPZ.png',
              video: 'VideoPZ.mov',
              description: 'Static Sift Whole Plante Full Melt 🍯🧤\n Collab Wizard Treez x Golden Head Warriors 🇺🇸 Produit Des Ténèbres 🔥Parmis Les Meilleurs Hash Du Monde 🌍 2 Strains De Folie Full MELT 🍯🍯Tu Pete Ta Tête 🤯🤯🧠',
              tarifs: [
                { weight: '1g', price: 40.00 },
                { weight: '5g', price: 200.00 },
                { weight: '10g', price: 340.00 },
              ]
            }, */
            /* {
              id: 'Limelight 🍋‍🟩☀️',
              name: 'Limelight 🍋‍🟩☀️',
              farm: 'Wizard Treez x Golden Warriors 🇺🇸',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductLL.png',
              video: 'VideoLL.mov',
              description: 'Static Sift Whole Plante Full Melt 🍯🧤\n Collab Wizard Treez x Golden Head Warriors 🇺🇸 Produit Des Ténèbres 🔥Parmis Les Meilleurs Hash Du Monde 🌍 2 Strains De Folie Full MELT 🍯🍯Tu Pete Ta Tête 🤯🤯🧠',
              tarifs: [
                { weight: '1g', price: 40.00 },
                { weight: '5g', price: 200.00 },
                { weight: '10g', price: 340.00 },
              ]
            }, */
          ]
        },
        {
          id: 'STATIC_2',
          name: '2️⃣ Double Static 🧤',
          image: '',
          badgeText: '1 produit',
          products: [
            {
              id: '4Fruitz 🍓🥝🍒🍋',
              name: '4Fruitz 🍓🥝🍒🍋',
              farm: 'MOUNTAINS GIANT x OASIS 51 🇲🇦🌎',
              promoEligible: false,
              type: 'Hash',
              image: 'Product4.png',
              video: 'Video4.mov',
              description: 'Collab MG x Oasis 51 🇲🇦 2 Strains De Folie 🇺🇸 Qualité Phénoménale 🧠 Vrai Plasma Static Full Terps 🍌🍑🍒🍋⛽️ Quantité Limite Que Détail 📰📰',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 90.00 },
                { weight: '10g', price: 160.00 },
                { weight: '20g', price: 300.00 },
              ]
            }, 
            {
              id: 'RottenPear 🍐⛽️',
              name: 'RottenPear 🍐⛽️',
              farm: 'MOUNTAINS GIANT x OASIS 51 🇲🇦🌎',
              promoEligible: false,
              type: 'Hash',
              image: 'ProductRP.png',
              video: 'VideoRP.mov',
              description: 'Collab MG x Oasis 51 🇲🇦 2 Strains De Folie 🇺🇸 Qualité Phénoménale 🧠 Vrai Plasma Static Full Terps 🍌🍑🍒🍋⛽️ Quantité Limite Que Détail 📰📰',
              tarifs: [
                { weight: '3g', price: 60.00 },
                { weight: '5g', price: 90.00 },
                { weight: '10g', price: 160.00 },
                { weight: '20g', price: 300.00 },
              ]
            }, 
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
            /* {
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
            }, */
            /* {
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
            }, */
            /* {
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
            } */
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
            /* {
              id: 'Peach Oz',
              name: 'Peach Oz 🍑',
              farm: 'CALI NL TOP SHELF 🇺🇸🇳🇱',
              promoEligible: false,
              type: '🪴 Weed 🪴',
              image: 'ProductPZZ.png',
              video: 'VideoPZZ.mp4',
              description: 'Déjà Victime De Son Succès 🌈💥 Cali Hollandaise 🇳🇱 Du Vrai Crack 💨 Goût Incroyable 🇺🇸🍑🍓 Bien Compacte ☄️ La Fusée 🚀',
              tarifs: [
                { weight: '5g', price: 70.00 },
                { weight: '10g', price: 130.00 },
                { weight: '25g', price: 250.00 },
                { weight: '50g', price: 400.00 },
                { weight: '100g', price: 750.00 }
              ]
            } */
          ]
        }
      ]
    },

    
  ];

 let allProducts = [];
 appData.forEach((category) => {
  category.farms.forEach((farm) => {
   farm.products.forEach((product) => {
    product.category = category;
    product.farmName = farm.name;
    product.farmId = farm.id;
    allProducts.push(product);
   });
  });
 });

 let favorites = new Set();
 let cart = [];
 let currentProd = null;
 let currTarif = null;
 let currVar = null;
 let currQty = 1;
 let checkoutMode = "Livraison";
 let currentCategory = null;
 let selectedReviewRating = 5;
 let approvedReviews = [];
 window.lastListPage = "home";

 const contactUrl = "https://t.me/MonkeyDieLuffy2";
 const reviewApiBase = String(window.REVIEW_API_BASE || "").replace(/\/$/, "");
 const reviewApiUrl = reviewApiBase ? reviewApiBase + "/api/reviews" : "/api/reviews";

 function money(n) {
  return Number(n || 0).toFixed(2).replace(".00", "") + "€";
 }

 function firstPrice(product) {
  const prices = (product.tarifs || []).map(t => Number(t.price)).filter(n => !Number.isNaN(n));
  return prices.length ? Math.min(...prices) : 0;
 }

 function mediaCount(product) {
  if (product.videos && product.videos.length) return product.videos.length;
  if (product.video) return 1;
  return product.image ? 1 : 0;
 }

 function hasVideo(product) {
  return Boolean((product.videos && product.videos.length) || product.video);
 }

 function productImage(product) {
  return product.image && String(product.image).trim() !== "" ? product.image : "Logo.jpg";
 }

 function safeText(value, fallback = "-") {
  return value && String(value).trim() !== "" ? value : fallback;
 }

 function shortText(value, max = 46) {
  const txt = safeText(value, "");
  return txt.length > max ? txt.slice(0, max - 1) + "…" : txt;
 }

 function escapeHTML(value) {
  return String(value ?? "")
   .replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#039;");
 }

 function publicAuthorFallback() {
  const u = tg.initDataUnsafe?.user;
  if (!u) return "Membre";
  return u.username ? `@${u.username}` : (u.first_name || "Membre");
 }

 function haptic(type = "light") {
  try { tg.HapticFeedback?.impactOccurred(type); } catch(e) {}
 }

 function productMatches(product, query) {
  if (!query) return true;
  const q = query.toLowerCase().trim();
  const haystack = [product.name, product.farm, product.farmName, product.type, product.category?.name, product.description]
   .join(" ").toLowerCase();
  return haystack.includes(q);
 }

 function setStats() {
  const cats = appData.filter(c => c.farms.some(f => f.products.length)).length;
  document.getElementById("stat-products").innerText = allProducts.length;
  document.getElementById("stat-cats").innerText = cats;
  document.getElementById("new-count").innerText = `${Math.min(6, allProducts.length)} produits`;
 }

 window.navigate = function(pageId) {
  const normalized = pageId.replace("page-", "");
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const page = document.getElementById("page-" + normalized);
  if (page) page.classList.add("active");
  window.scrollTo(0, 0);

  document.querySelectorAll(".nav-item-float").forEach(i => i.classList.remove("active"));
  const nav = document.querySelector(`.nav-btn[data-target="page-${normalized}"]`);
  if (nav) nav.classList.add("active");
  else if (["cat-list", "product"].includes(normalized)) document.querySelector('.nav-btn[data-target="page-home"]')?.classList.add("active");
  else if (normalized === "checkout") document.querySelector('.nav-btn[data-target="page-cart"]')?.classList.add("active");

  if (normalized === "cart") renderCart();
  if (normalized === "favorites") renderFavorites();
  if (normalized === "checkout") renderCheckout();
  if (normalized === "reviews") renderReviews();
 };

 function createCategoryCard(category) {
  const total = category.farms.reduce((sum, farm) => sum + farm.products.length, 0);
  return `
   <div class="cat-card" onclick="openCategory('${category.id}')">
    <span class="open-badge">›</span>
    <img src="${category.image || 'Logo.jpg'}" alt="${category.name}">
    <div class="title">${category.name}</div>
    <div class="meta">${total} produit${total > 1 ? 's' : ''} · ${category.directToProducts ? 'direct' : 'sous-catégories'}</div>
   </div>`;
 }

 function favoriteIconHTML(active) {
  return `<svg aria-hidden="true"><use href="#${active ? 'ic-heart' : 'ic-heart-outline'}"></use></svg>`;
 }

 function syncProductFavoriteButton() {
  const btn = document.getElementById("p-like");
  if (!btn || !currentProd) return;
  const active = favorites.has(currentProd.id);
  btn.innerHTML = favoriteIconHTML(active);
  btn.classList.toggle("active", active);
 }

 function createCardHTML(product, isLarge = false) {
  const from = firstPrice(product);
  const count = mediaCount(product);
  const isFav = favorites.has(product.id);
  const badge = safeText(product.farmName || product.type || product.category?.name, "Premium");
  const safeId = encodeURIComponent(product.id);
  return `
   <div class="prod-card ${isLarge ? 'large' : ''}" onclick="openProduct(decodeURIComponent('${safeId}'))">
    <div class="prod-img-wrap">
     <img src="${productImage(product)}" alt="${product.name}">
     <div class="media-chip">${hasVideo(product) ? '▶ ' + count + ' média' : 'IMAGE'}</div>
     <button class="fav-chip ${isFav ? 'active' : ''}" aria-label="Favori" onclick="event.stopPropagation(); toggleFavorite(decodeURIComponent('${safeId}'))">${favoriteIconHTML(isFav)}</button>
    </div>
    <div class="prod-info">
     <div class="prod-badge">${shortText(badge, 30)}</div>
     <div class="prod-title">${product.name}</div>
     <div class="prod-farm">Farm : ${shortText(product.farm || product.farmName, 42)}</div>
     <div class="prod-card-bottom">
      <div class="from-price"><span>À partir de</span><b>${money(from)}</b></div>
      <div class="details-pill">Détails</div>
     </div>
    </div>
   </div>`;
 }

 function renderHome(products = allProducts) {
  const catContainer = document.getElementById("cat-scroll");
  catContainer.innerHTML = appData.map(createCategoryCard).join("");

  const filtered = products.length ? products : allProducts;
  document.getElementById("recent-scroll").innerHTML = filtered.slice(0, 6).map(p => createCardHTML(p, true)).join("");
  document.getElementById("trend-grid").innerHTML = filtered.slice(0, 12).map(p => createCardHTML(p, false)).join("") || emptyState("Aucun produit trouvé");
  setStats();
 }

 function emptyState(text) {
  return `<div class="empty-state" style="grid-column:1/-1">${text}</div>`;
 }

 document.getElementById("home-search")?.addEventListener("input", (e) => {
  const q = e.target.value;
  const results = allProducts.filter(p => productMatches(p, q));
  renderHome(results);
 });

 window.openCategory = function(catId) {
  currentCategory = appData.find(c => c.id === catId);
  if (!currentCategory) return;
  window.lastListPage = "cat-list";

  document.getElementById("cat-list-title").innerText = currentCategory.name;
  document.getElementById("cat-banner-img").src = currentCategory.image || "Logo.jpg";
  document.getElementById("cat-banner-bg").src = currentCategory.image || "Logo.jpg";

  const select = document.getElementById("cat-type-select");
  const activeFarms = currentCategory.farms.filter(f => f.products.length || !currentCategory.directToProducts);
  select.innerHTML = `<option value="ALL">✨ Tout afficher</option>` + activeFarms.map(f => `<option value="${f.id}">${f.name} (${f.products.length})</option>`).join("");
  select.style.display = currentCategory.directToProducts ? "none" : "block";
  document.getElementById("cat-search").value = "";
  renderCategoryProducts();
  navigate("cat-list");
 };

 function renderCategoryProducts() {
  if (!currentCategory) return;
  const selectedFarm = document.getElementById("cat-type-select").value || "ALL";
  const query = document.getElementById("cat-search").value || "";
  let products = [];
  currentCategory.farms.forEach(farm => {
   if (selectedFarm === "ALL" || farm.id === selectedFarm) products.push(...farm.products);
  });
  products = products.filter(p => productMatches(p, query));
  document.getElementById("cat-list-grid").innerHTML = products.map(p => createCardHTML(p, false)).join("") || emptyState("Aucun produit disponible.");
 }

 document.getElementById("cat-type-select")?.addEventListener("change", () => { renderCategoryProducts(); haptic(); });
 document.getElementById("cat-search")?.addEventListener("input", renderCategoryProducts);

 function productVideoControlsHTML() {
  return `
   <div class="product-video-controls">
    <button type="button" id="video-play-pause">⏸</button>
    <button type="button" id="video-back-10">↺ 10s</button>
    <button type="button" id="video-fullscreen">⛶</button>
   </div>`;
 }

 function showProductVideoControls() {
  const layer = document.getElementById("product-video-controls-layer");
  if (!layer) return;
  layer.innerHTML = productVideoControlsHTML();
  bindProductVideoControls();
 }

 function hideProductVideoControls() {
  const layer = document.getElementById("product-video-controls-layer");
  if (layer) layer.innerHTML = "";
 }

 function getActiveProductVideo() {
  const mediaZone = document.getElementById("prod-media");
  const videos = Array.from(mediaZone.querySelectorAll("video"));
  if (!videos.length) return null;
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
   if (video.paused) { video.play(); playPauseBtn.innerText = "⏸"; }
   else { video.pause(); playPauseBtn.innerText = "▶"; }
   haptic();
  };
  backBtn.onclick = () => { const v = getActiveProductVideo(); if (v) v.currentTime = Math.max(0, v.currentTime - 10); haptic(); };
  fullscreenBtn.onclick = () => {
   const v = getActiveProductVideo(); if (!v) return;
   if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
   else if (v.requestFullscreen) v.requestFullscreen();
   else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
   haptic();
  };
 }

 window.openProduct = function(id) {
  currentProd = allProducts.find(p => p.id === id);
  if (!currentProd) return;
  currQty = 1;
  currTarif = currentProd.tarifs?.[0] || { weight: "-", price: 0 };
  currVar = currentProd.jars ? currentProd.jars[0].name : null;
  window.lastListPage = document.getElementById("page-cat-list").classList.contains("active") ? "cat-list" : "home";

  const mediaZone = document.getElementById("prod-media");
  mediaZone.className = "prod-media-zone";
  if (currentProd.videos && currentProd.videos.length > 0) {
   mediaZone.classList.add("multiple-media");
   let html = currentProd.videos.map(v => `<div class="multi-video-slide"><video autoplay loop muted playsinline controls><source src="${v}" type="video/mp4"></video></div>`).join("");
   if (currentProd.videos.length > 1) html += `<div class="swipe-hint">Swipe ➜</div>`;
   mediaZone.innerHTML = html;
   showProductVideoControls();
  } else if (currentProd.video) {
   mediaZone.innerHTML = `<video autoplay loop muted playsinline controls><source src="${currentProd.video}" type="video/mp4"></video>`;
   showProductVideoControls();
  } else {
   mediaZone.innerHTML = `<img src="${productImage(currentProd)}" alt="${currentProd.name}">`;
   hideProductVideoControls();
  }

  document.getElementById("p-type").innerText = safeText(currentProd.type, "Premium");
  document.getElementById("p-name").innerText = currentProd.name;
  document.getElementById("p-farm").innerText = "Farm : " + safeText(currentProd.farm || currentProd.farmName, "Non renseignée");
  document.getElementById("p-subtype").innerText = safeText(currentProd.farmName, "-");
  document.getElementById("p-from").innerText = money(firstPrice(currentProd));
  document.getElementById("p-media-count").innerText = `${mediaCount(currentProd)} média${mediaCount(currentProd) > 1 ? 's' : ''}`;
  document.getElementById("p-format-count").innerText = `${currentProd.tarifs?.length || 0} format${(currentProd.tarifs?.length || 0) > 1 ? 's' : ''}`;
  document.getElementById("p-desc").innerHTML = currentProd.description ? currentProd.description.split("\\n").join("<br>") : "Fiche catalogue avec visuel, farm, formats disponibles et médias associés.";
  syncProductFavoriteButton();

  const vZone = document.getElementById("variants-zone");
  const vScroll = document.getElementById("p-variants");
  if (currentProd.jars && currentProd.jars.length) {
   vZone.style.display = "block";
   vScroll.innerHTML = currentProd.jars.map((j, i) => `<div class="tarif-pill var-btn ${i === 0 ? 'active' : ''}" data-val="${j.name}"><span class="w">${j.emoji || '•'}</span><span class="p">${j.name}</span></div>`).join("");
   document.querySelectorAll(".var-btn").forEach(btn => btn.onclick = e => {
    document.querySelectorAll(".var-btn").forEach(x => x.classList.remove("active"));
    e.currentTarget.classList.add("active"); currVar = e.currentTarget.dataset.val; haptic();
   });
  } else vZone.style.display = "none";

  const tScroll = document.getElementById("p-tarifs");
  tScroll.innerHTML = (currentProd.tarifs || []).map((t, i) => `<div class="tarif-pill tar-btn ${i === 0 ? 'active' : ''}" data-idx="${i}"><span class="w">${t.weight}</span><span class="p">${money(t.price)}</span></div>`).join("");
  document.querySelectorAll(".tar-btn").forEach(btn => btn.onclick = e => {
   document.querySelectorAll(".tar-btn").forEach(x => x.classList.remove("active"));
   e.currentTarget.classList.add("active"); currTarif = currentProd.tarifs[e.currentTarget.dataset.idx]; updateProdTotal(); haptic();
  });

  renderSimilarProducts();
  updateProdTotal();
  navigate("product");
 };

 function renderSimilarProducts() {
  const similar = allProducts
   .filter(p => p.id !== currentProd.id && (p.category?.id === currentProd.category?.id || p.farmName === currentProd.farmName))
   .slice(0, 8);
  document.getElementById("p-similar").innerHTML = similar.map(p => createCardHTML(p, false)).join("") || `<div class="tiny">Aucun produit similaire.</div>`;
 }

 function updateProdTotal() {
  document.getElementById("p-qty").innerText = currQty;
  document.getElementById("p-total").innerText = money((currTarif?.price || 0) * currQty);
 }
 document.getElementById("p-minus").onclick = () => { if (currQty > 1) { currQty--; updateProdTotal(); haptic(); } };
 document.getElementById("p-plus").onclick = () => { currQty++; updateProdTotal(); haptic(); };
 document.getElementById("p-like").onclick = () => toggleFavorite(currentProd.id);

 window.toggleFavorite = function(id) {
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  syncProductFavoriteButton();
  renderHome();
  renderCategoryProducts();
  renderFavorites();
  haptic("medium");
 };

 document.getElementById("p-add").onclick = () => {
  if (!currentProd || !currTarif) return;
  const cartId = `${currentProd.id}-${currTarif.weight}-${currVar || 'def'}`;
  const found = cart.find(i => i.id === cartId);
  let name = currentProd.name + (currVar ? ` (${currVar})` : "");
  if (found) { found.qty += currQty; found.tot = found.qty * found.price; }
  else cart.push({ id: cartId, productId: currentProd.id, name, img: productImage(currentProd), farm: currentProd.farm || currentProd.farmName, weight: currTarif.weight, price: currTarif.price, qty: currQty, tot: currTarif.price * currQty });
  updateBadge(); document.getElementById("success-modal").style.display = "flex"; haptic("heavy");
 };

 function updateBadge() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("nav-badge");
  badge.innerText = count;
  badge.style.display = count ? "flex" : "none";
 }

 function renderCart() {
  const list = document.getElementById("cart-list");
  if (!cart.length) {
   list.innerHTML = emptyState("Ta sélection est vide.");
   document.getElementById("cart-recap-text").innerText = "Total (0)";
   document.getElementById("cart-total-display").innerText = "0€";
   return;
  }
  list.innerHTML = cart.map((i, index) => `
   <div class="cart-item">
    <img src="${i.img}" alt="${i.name}">
    <div style="flex:1;min-width:0">
     <div style="font-weight:1000;line-height:1.2">${i.name}</div>
     <div class="tiny">Farm : ${shortText(i.farm, 34)}</div>
     <div class="tiny">${i.weight} · x${i.qty} · ${money(i.tot)}</div>
    </div>
    <button class="cart-trash" onclick="removeCartItem(${index})">×</button>
   </div>`).join("");
  const total = cart.reduce((s, i) => s + i.tot, 0);
  document.getElementById("cart-recap-text").innerText = `Total (${cart.reduce((s,i)=>s+i.qty,0)})`;
  document.getElementById("cart-total-display").innerText = money(total);
 }

 window.removeCartItem = function(index) { cart.splice(index, 1); renderCart(); updateBadge(); haptic(); };

 function renderFavorites() {
  const favs = allProducts.filter(p => favorites.has(p.id));
  document.getElementById("fav-grid").innerHTML = favs.map(p => createCardHTML(p, false)).join("") || emptyState("Aucun favori pour le moment.");
 }

 document.querySelectorAll(".mode-btn").forEach(btn => btn.addEventListener("click", e => {
  document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
  e.currentTarget.classList.add("active");
  checkoutMode = e.currentTarget.dataset.m;
  haptic();
 }));

 function renderCheckout() {
  const items = document.getElementById("checkout-items");
  if (!cart.length) { items.innerHTML = "Aucun produit dans la sélection."; document.getElementById("checkout-total").innerText = "Total indicatif : 0€"; return; }
  items.innerHTML = cart.map(i => `• ${i.name} — ${i.weight} x${i.qty} — ${money(i.tot)}`).join("<br>");
  document.getElementById("checkout-total").innerText = "Total indicatif : " + money(cart.reduce((s,i)=>s+i.tot,0));
 }

 document.getElementById("send-request-btn")?.addEventListener("click", () => {
  const note = document.getElementById("address-field").value.trim();
  const lines = cart.map(i => `- ${i.name} | ${i.weight} x${i.qty} | ${money(i.tot)}`).join("\n");
  const total = money(cart.reduce((s,i)=>s+i.tot,0));
  const msg = `Salut, je voudrais des infos sur ma sélection catalogue.\n\nMode : ${checkoutMode}\n${lines}\n\nTotal indicatif : ${total}${note ? "\n\nNote : " + note : ""}`;
  window.open(contactUrl + "?text=" + encodeURIComponent(msg), "_blank");
 });

 function renderReviewStars() {
  document.querySelectorAll("#review-stars button").forEach(btn => {
   const rating = Number(btn.dataset.rating);
   btn.classList.toggle("active", rating <= selectedReviewRating);
  });
 }

 function starsText(rating) {
  const r = Math.max(1, Math.min(5, Number(rating) || 5));
  return "★".repeat(r) + "☆".repeat(5 - r);
 }

 function reviewDateLabel(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
 }

 function createReviewHTML(review) {
  const author = escapeHTML(review.author || "Membre");
  const text = escapeHTML(review.text || review.message || "Avis validé.");
  const rating = Math.max(1, Math.min(5, Number(review.rating) || 5));
  const initial = author.replace("@", "").trim().charAt(0).toUpperCase() || "M";
  const date = reviewDateLabel(review.approved_at || review.created_at);
  return `
   <div class="review-item approved">
    <div class="review-avatar">${escapeHTML(initial)}</div>
    <div style="flex:1;min-width:0">
     <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">
      <b>${author}</b>
      ${date ? `<span class="review-date">${escapeHTML(date)}</span>` : ""}
      <span class="review-approved-chip">✓ Validé</span>
     </div>
     <div style="color:var(--green);font-size:.78rem;margin-top:4px">${starsText(rating)}</div>
     <p class="tiny" style="margin:7px 0 0;line-height:1.55">${text}</p>
    </div>
   </div>`;
 }

 function updateReviewSummary(reviews) {
  const scoreEl = document.getElementById("rating-score");
  const starsEl = document.getElementById("rating-stars");
  const countEl = document.getElementById("review-count-label");
  const bars = [document.getElementById("bar-service"), document.getElementById("bar-quality"), document.getElementById("bar-response")];
  if (!scoreEl || !starsEl || !countEl) return;

  if (!reviews.length) {
   scoreEl.innerText = "5.0";
   starsEl.innerText = "★★★★★";
   countEl.innerText = "Avis validés";
   bars.forEach((bar, i) => { if (bar) bar.style.width = [98,96,94][i] + "%"; });
   return;
  }

  const avg = reviews.reduce((sum, r) => sum + (Number(r.rating) || 5), 0) / reviews.length;
  const rounded = Math.max(1, Math.min(5, Math.round(avg)));
  scoreEl.innerText = avg.toFixed(1);
  starsEl.innerText = starsText(rounded);
  countEl.innerText = `${reviews.length} avis validé${reviews.length > 1 ? "s" : ""}`;
  const pct = Math.max(20, Math.min(100, (avg / 5) * 100));
  bars.forEach((bar, i) => { if (bar) bar.style.width = Math.max(20, pct - i * 3) + "%"; });
 }

 async function loadApprovedReviews() {
  try {
   const res = await fetch(reviewApiUrl, { cache: "no-store" });
   if (!res.ok) throw new Error("API avis indisponible");
   const data = await res.json();
   const list = Array.isArray(data) ? data : (Array.isArray(data.reviews) ? data.reviews : []);
   approvedReviews = list;
  } catch (e) {
   approvedReviews = [];
  }
  return approvedReviews;
 }

 async function renderReviews() {
  const listEl = document.getElementById("reviews-list");
  if (!listEl) return;
  listEl.innerHTML = `<div class="empty-state" style="padding:28px 0">Chargement des avis...</div>`;
  const reviews = await loadApprovedReviews();
  updateReviewSummary(reviews);
  if (!reviews.length) {
   listEl.innerHTML = `<div class="empty-state" style="padding:28px 0">Aucun avis validé pour le moment.</div>`;
   return;
  }
  listEl.innerHTML = reviews.map(createReviewHTML).join("");
 }

 function sendReviewToTelegramPanel(payload) {
  const status = document.getElementById("review-send-status");
  const messageInput = document.getElementById("review-message");

  if (window.Telegram?.WebApp?.sendData) {
   try {
    window.Telegram.WebApp.sendData(JSON.stringify(payload));
    if (status) {
     status.className = "tiny ok";
     status.innerText = "Avis envoyé au panel Telegram. Il apparaîtra après validation.";
    }
    if (messageInput) messageInput.value = "";
    try { window.Telegram.WebApp.showAlert("Avis envoyé au panel ✅"); } catch(e) {}
    haptic("medium");
    return true;
   } catch(e) {}
  }

  const msg = `Salut, je veux laisser un avis.

Note : ${starsText(payload.rating)}
Pseudo : ${payload.author}
Avis : ${payload.text}`;
  window.open(contactUrl + "?text=" + encodeURIComponent(msg), "_blank");
  if (status) {
   status.className = "tiny err";
   status.innerText = "Ouverture Telegram en secours. Pour validation automatique, ouvre le catalogue depuis le bouton du bot.";
  }
  return false;
 }

 document.querySelectorAll("#review-stars button").forEach(btn => btn.addEventListener("click", (e) => {
  selectedReviewRating = Number(e.currentTarget.dataset.rating) || 5;
  renderReviewStars();
  haptic();
 }));

 document.getElementById("send-review-btn")?.addEventListener("click", () => {
  const text = document.getElementById("review-message")?.value.trim() || "Je suis satisfait du catalogue.";
  const authorInput = document.getElementById("review-author")?.value.trim();
  const user = tg.initDataUnsafe?.user;
  const payload = {
   action: "submit_review",
   rating: selectedReviewRating,
   text,
   author: authorInput || publicAuthorFallback(),
   username: user?.username || "",
   user_id: user?.id || null,
   created_from: "webapp"
  };
  sendReviewToTelegramPanel(payload);
 });

 document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => {
  const page = btn.dataset.target.replace("page-", "");
  navigate(page);
  haptic();
 }));

 const user = tg.initDataUnsafe?.user;
 if (user) {
  document.getElementById("prof-pseudo").innerText = user.username ? `@${user.username}` : (user.first_name || "Membre");
  document.getElementById("prof-id").innerText = user.id || "-";
  if (user.photo_url) document.getElementById("prof-img").src = user.photo_url;
 }

 renderHome();
 renderReviewStars();
 renderReviews();
 updateBadge();
});
