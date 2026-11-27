import type { Locale } from '../i18n/index';

export const lesFetesPdf = '/les-fetes-toile-blanche-2026.pdf';

/** Homepage card and menu link stay up through 6 January 2027. */
export const lesFetesPromoUntil = '2027-01-07T00:00:00+01:00';

export function lesFetesPromoVisible(now = new Date()) {
  return now.getTime() < Date.parse(lesFetesPromoUntil);
}

type Priced = { name: string; price: string };
type Course = { title: string; items: string[] };
type Table = {
  date: string;
  title: string;
  when: string;
  paragraphs?: string[];
  courses?: Course[];
  extras?: Priced[];
  priceLines: string[];
  kids?: string;
};

export type LesFetesCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  download: string;
  bar: {
    label: string;
    title: string;
    lede: string[];
    when: { label: string; detail: string }[];
    hours: string;
    drinksTitle: string;
    foodTitle: string;
    drinks: Priced[];
    food: Priced[];
    priceNote: string;
  };
  art: {
    label: string;
    title: string;
    series: string;
    artists: string;
    work: string;
    lede: string;
    venues: { name: string; when: string }[];
    nightLabel: string;
    nightLede: string;
    schedule: { when: string; detail: string }[];
    limited: string;
  };
  tablesLabel: string;
  tablesIntro: string;
  tables: Table[];
  reserveLabel: string;
  takeaway: {
    label: string;
    title: string;
    lede: string[];
    items: { name: string; serves: string; price: string }[];
    note: string;
  };
  stay: {
    label: string;
    title: string;
    offers: { title: string; lines: string[] }[];
    giftsTitle: string;
    giftsIntro: string;
    gifts: string[];
    giftLink: string;
    winterLink: string;
    bookStay: string;
  };
  promo: { eyebrow: string; title: string; text: string; cta: string };
  events: { name: string; startDate: string; description: string; price?: string }[];
};

const phone = '+33 4 93 32 74 21';
const email = 'info@toileblanche.com';

const fr: LesFetesCopy = {
  metaTitle: "Les Fêtes | Toile Blanche | Saint-Paul de Vence",
  metaDescription:
    "Le bar d'hiver, Sessions 13 et les tables de fête à Toile Blanche, des week-ends de décembre au jour de l'An. Saint-Paul de Vence.",
  eyebrow: "Fin d'année 2026",
  title: 'Les Fêtes',
  subtitle: 'à Toile Blanche',
  intro: [
    "Cet hiver, quand la nuit tombe sur Saint-Paul-de-Vence, Toile Blanche change de couleur. Les bougies s'allument, le champagne est frais, les huîtres arrivent.",
    "Bienvenue à notre bar d'hiver.",
  ],
  download: 'Voir le programme (PDF)',
  bar: {
    label: 'Chapitre I',
    title: "Le bar d'hiver",
    lede: [
      "À la tombée de la nuit, Toile Blanche ouvre le bar d'hiver.",
      "Le bar du Restaurant s'habille pour l'hiver : bougies, couvertures, vin chaud et champagne. Huîtres, foie gras maison, et la nuit qui tombe sur les collines.",
    ],
    when: [
      { label: 'Décembre', detail: 'Vendredis et samedis, 4, 5, 11, 12, 18 et 19' },
      { label: 'Entre les fêtes', detail: 'Tous les soirs, du 25 décembre au 1er janvier' },
    ],
    hours: 'Dès le 4 décembre, de 17h à 21h, sans réservation.',
    drinksTitle: 'À boire',
    foodTitle: 'À manger',
    drinks: [
      { name: 'Champagne Maison Telmont, brut blanc, verre 15 cl ou bouteille 75 cl', price: '16 € · 85 €' },
      { name: 'Vin chaud maison', price: '7 €' },
      { name: 'Vins de Provence du moment, verre ou bouteille', price: '9 € · 39 €' },
    ],
    food: [
      { name: 'Tasse de potage du jour', price: '8 €' },
      { name: 'Escargots du Var à la bourguignonne, les 6', price: '16 €' },
      { name: 'Huîtres fines de claire n°3, les 6 ou les 12', price: '20 € · 40 €' },
      { name: 'Foie gras maison, brioche toastée, chutney de poire', price: '22 €' },
      { name: 'Assiette de fromages de la Maison Mons', price: '16 €' },
      { name: 'Assiette de charcuterie', price: '19 €' },
      { name: 'La planche à partager, fromages et charcuterie', price: '26 €' },
      { name: 'Marrons glacés, les 4', price: '8 €' },
    ],
    priceNote: 'Prix en euros, nets, service compris. Carte des vins sur demande.',
  },
  art: {
    label: 'Chapitre II',
    title: "L'art à Toile Blanche",
    series: 'Toile Blanche Sessions 13',
    artists: 'Leroy Brothers',
    work: 'Generative Institutional Derivatives',
    lede: "Pour clore la saison, nous passons nous-mêmes de l'autre côté de la toile : notre dernier travail, en une exposition en deux lieux à Saint-Paul-de-Vence.",
    venues: [
      { name: 'Galerie Podgorny', when: '15 au 20 décembre' },
      { name: 'Toile Blanche Contemporary', when: '19 décembre à fin février 2027' },
    ],
    nightLabel: 'Samedi 19 décembre · RAD/ART Tour',
    nightLede: "Toute l'exposition, un seul soir.",
    schedule: [
      { when: '16h à 18h', detail: 'Présentation à la Galerie Podgorny' },
      { when: '18h à 20h', detail: 'Présentation à Toile Blanche Contemporary' },
      { when: '19h à 21h', detail: "RAD/ART After-Show au bar d'hiver" },
      { when: '20h à minuit', detail: 'Toile Blanche Sessions 13, en plein air : couvrez-vous !' },
    ],
    limited: 'Places limitées pour les Sessions.',
  },
  tablesLabel: 'Chapitre III',
  tablesIntro: 'Les tables de fête. Sur réservation.',
  tables: [
    {
      date: '24.12',
      title: 'Réveillon de Noël',
      when: 'Jeudi 24 décembre, le soir',
      courses: [
        {
          title: 'Pour commencer',
          items: [
            "Cromesquis d'escargot du Var, condiment noix et piment d'Espelette",
            'Cappuccino de champignon, mousse de lait, poudre de cèpe',
            'Foie gras en fine gelée de cerise griotte, hibiscus, gomasio sésame',
          ],
        },
        {
          title: 'Entrée',
          items: [
            'Noix de Saint-Jacques à la nage de Champagne, harenga fumé, poireaux, cresson et citron confit',
          ],
        },
        {
          title: 'Plat',
          items: [
            'Poularde de Bresse farcie aux écrevisses, trompettes de la mort, fine mousseline de pommes de terre, jus de volaille',
          ],
        },
        {
          title: 'Fromage',
          items: ['La belle tranche de brie de Meaux truffé, salade de mâche, condiment pomme-coing'],
        },
        {
          title: 'Dessert',
          items: ['Bûche de Noël Toile Blanche, poire, caramel, Gavottes, tonka', 'Mignardises'],
        },
      ],
      priceLines: ['125 € par personne', 'Accord mets et vins, 55 €, quatre verres'],
      kids: "Menu enfant jusqu'à 12 ans, 45 € : tortellini ricotta, épinards, butternut, suprême de volaille ou filet de loup, purée, bûche de Noël.",
    },
    {
      date: '25.12',
      title: 'Déjeuner de Noël',
      when: 'Vendredi 25 décembre, le midi',
      paragraphs: [
        "La Guinguette d'hiver vous accueille.",
        'Notre carte habituelle, ses poissons, ses viandes et ses plats à partager, servie autour de la piscine si le temps le permet.',
        "Et pour l'occasion, nous vous proposons aussi :",
      ],
      extras: [
        { name: "L'assiette de l'écailler : huîtres fines de claire, langoustines, truite en gravlax, crevettes roses, bulots, rillettes de la mer", price: '34 €' },
        { name: 'Brie de Meaux truffé, salade de mâche', price: '14 €' },
        { name: 'La bûche de Noël Toile Blanche', price: '12 €' },
      ],
      priceLines: ['Le midi uniquement. Prix nets, service compris.'],
      kids: "Menu enfant jusqu'à 12 ans, 25 € : suprême de volaille, jus de volaille, ou filet de loup, beurre citron, purée, et la bûche de Noël.",
    },
    {
      date: '31.12',
      title: 'Réveillon du Nouvel An',
      when: 'Jeudi 31 décembre, le soir',
      courses: [
        {
          title: 'Mise en bouche',
          items: [
            'Médaillon de poulpe grillé, rouille, bisque, chips de socca',
            "Cromesquis d'escargot du Var, fenouil, noix et piment d'Espelette",
            "Foie gras de canard fumé au genévrier, crumble pain d'épices",
          ],
        },
        {
          title: 'Entrée',
          items: [
            'Tortellini maison de courge spaghetti et butternut, beurre de sauge, écume chaude de châtaigne, râpée de poutargue',
          ],
        },
        {
          title: 'Poisson',
          items: [
            "Filet de Saint-Pierre en nage de caviar osciètre, citron confit, tombée d'épinards et salicornes, noisette grillée",
          ],
        },
        {
          title: 'Viande',
          items: [
            'Filet de bœuf charolais, feuille à feuille de pommes de terre, oignons et truffe melanosporum',
          ],
        },
        {
          title: 'Fromage',
          items: ['Mont d’Or, olive noire, chutney de poire, salade de mâche'],
        },
        {
          title: 'Pré-dessert',
          items: ['Fraîcheur de citron bergamote'],
        },
        {
          title: 'Dessert',
          items: ['Intensément choco, fine génoise cacao, Griottines et crème légère vanille'],
        },
      ],
      priceLines: [
        '175 € par personne',
        'Coupe de champagne à minuit incluse',
        'Accord mets et vins, 65 €, cinq verres',
      ],
      kids: "Menu enfant jusqu'à 12 ans, 45 € : tortellini ricotta, épinards, butternut, suprême de volaille ou filet de loup, purée, forêt noire revisitée.",
    },
    {
      date: '01.01',
      title: "Déjeuner du Jour de l'An",
      when: 'Vendredi 1er janvier 2027, le midi',
      paragraphs: [
        "La Guinguette d'hiver vous accueille.",
        'Notre carte habituelle, ses poissons, ses viandes et ses plats à partager, servie autour de la piscine si le temps le permet.',
        "Et pour l'occasion, nous vous proposons aussi :",
      ],
      extras: [
        { name: "L'assiette de l'écailler : huîtres fines de claire, langoustines, truite en gravlax, crevettes roses, bulots, rillettes de la mer", price: '34 €' },
        { name: 'Brie de Meaux truffé, salade de mâche', price: '14 €' },
        { name: 'Forêt noire revisitée', price: '12 €' },
      ],
      priceLines: ['Le midi uniquement. Prix nets, service compris.'],
      kids: "Menu enfant jusqu'à 12 ans, 25 € : suprême de volaille, jus de volaille, ou filet de loup, beurre citron, purée, et la forêt noire revisitée.",
    },
  ],
  reserveLabel: 'Réservation',
  takeaway: {
    label: 'Chapitre IV',
    title: 'À emporter',
    lede: [
      'Le foie gras au torchon, maison.',
      'Préparé dans notre cuisine, pour votre table de fête.',
    ],
    items: [
      { name: 'Torchon 250 g', serves: '4 à 5 personnes', price: '40 €' },
      { name: 'Torchon 500 g', serves: '8 à 10 personnes', price: '80 €' },
    ],
    note: 'Sur commande, à retirer du 18 au 24 décembre.',
  },
  stay: {
    label: 'Chapitre V',
    title: 'Séjourner, offrir',
    offers: [
      {
        title: 'Un week-end de décembre, dès 720 € pour deux',
        lines: [
          'Deux nuits en suite, petit-déjeuner inclus.',
          'Un dîner au Restaurant, jusqu’à 80 € par personne, hors boissons.',
          "Au bar d'hiver, une coupe de champagne et six huîtres par personne.",
        ],
      },
      {
        title: 'Le Nouvel An, dès 990 € pour deux',
        lines: [
          'Deux nuits du 30 décembre au 1er janvier, petit-déjeuner inclus.',
          'Le dîner du Réveillon.',
          "Le 1er janvier, l'assiette de l'écailler et un plat de la Guinguette.",
        ],
      },
      {
        title: "L'hiver à Toile Blanche, dès 236 € la nuit",
        lines: [
          'Nos suites, petit-déjeuner inclus.',
          '4 nuits achetées, la 5e offerte.',
        ],
      },
    ],
    giftsTitle: 'Offrir',
    giftsIntro: "Une nuit, un dîner, une soirée au bar d'hiver. Cartes cadeaux valables un an.",
    gifts: [
      'Montant libre, dès 50 €',
      'Dîner pour deux au Restaurant, dès 150 €',
      'Une nuit pour deux, petit-déjeuner inclus, dès 236 €',
    ],
    giftLink: 'Offrir un bon cadeau',
    winterLink: "Découvrir L'Hiver",
    bookStay: 'Réserver un séjour',
  },
  promo: {
    eyebrow: "Fin d'année 2026",
    title: 'Les Fêtes',
    text: "Le bar d'hiver dès le 4 décembre, Sessions 13, et quatre tables entre le réveillon de Noël et le jour de l'An.",
    cta: 'Voir le programme',
  },
  events: [
    {
      name: 'Toile Blanche Sessions 13',
      startDate: '2026-12-19',
      description:
        "RAD/ART Tour le 19 décembre : Galerie Podgorny de 16h à 18h, Toile Blanche Contemporary de 18h à 20h, after-show au bar d'hiver de 19h à 21h, puis Sessions 13 en plein air de 20h à minuit. Exposition Leroy Brothers, Generative Institutional Derivatives : Galerie Podgorny du 15 au 20 décembre, Toile Blanche Contemporary du 19 décembre à fin février 2027. Places limitées.",
    },
    {
      name: 'Réveillon de Noël à Toile Blanche',
      startDate: '2026-12-24',
      description: 'Dîner du 24 décembre, 125 € par personne. Accord mets et vins 55 €, quatre verres.',
      price: '125',
    },
    {
      name: 'Déjeuner de Noël à La Guinguette',
      startDate: '2026-12-25',
      description: "Déjeuner du 25 décembre à La Guinguette, carte habituelle et assiette de l'écailler.",
    },
    {
      name: 'Réveillon du Nouvel An à Toile Blanche',
      startDate: '2026-12-31',
      description: 'Dîner du 31 décembre, 175 € par personne, coupe de champagne à minuit incluse. Accord mets et vins 65 €, cinq verres.',
      price: '175',
    },
    {
      name: "Déjeuner du Jour de l'An à La Guinguette",
      startDate: '2027-01-01',
      description: "Déjeuner du 1er janvier à La Guinguette, carte habituelle et assiette de l'écailler.",
    },
  ],
};

const en: LesFetesCopy = {
  metaTitle: 'Les Fêtes | Toile Blanche | Saint-Paul de Vence',
  metaDescription:
    'The winter bar, Sessions 13 and the festive tables at Toile Blanche, from the December weekends through New Year’s Day. Saint-Paul de Vence.',
  eyebrow: 'Year’s end 2026',
  title: 'Les Fêtes',
  subtitle: 'at Toile Blanche',
  intro: [
    'This winter, when night falls over Saint-Paul-de-Vence, Toile Blanche changes colour. The candles are lit, the champagne is cold, the oysters are in.',
    'Welcome to our winter bar.',
  ],
  download: 'View the programme (PDF)',
  bar: {
    label: 'Chapter I',
    title: 'The winter bar',
    lede: [
      'After dark, Toile Blanche opens its winter bar.',
      'Our restaurant bar dressed for winter: candlelight, blankets, mulled wine and champagne. Oysters, homemade foie gras, and night falling over the hills.',
    ],
    when: [
      { label: 'December', detail: 'Fridays and Saturdays, 4, 5, 11, 12, 18 and 19' },
      { label: 'Between the holidays', detail: 'Every evening, from 25 December to 1 January' },
    ],
    hours: 'From 4 December, 5 pm to 9 pm. No reservation.',
    drinksTitle: 'To drink',
    foodTitle: 'To eat',
    drinks: [
      { name: 'Maison Telmont champagne, brut blanc, 15 cl glass or 75 cl bottle', price: '16 € · 85 €' },
      { name: 'Homemade mulled wine', price: '7 €' },
      { name: 'Provence wines of the moment, glass or bottle', price: '9 € · 39 €' },
    ],
    food: [
      { name: 'Cup of soup of the day', price: '8 €' },
      { name: 'Six Var snails, garlic and parsley butter', price: '16 €' },
      { name: 'Fines de claire oysters no. 3, 6 or 12', price: '20 € · 40 €' },
      { name: 'Homemade foie gras, toasted brioche, pear chutney', price: '22 €' },
      { name: 'Cheese plate from Maison Mons', price: '16 €' },
      { name: 'Charcuterie plate', price: '19 €' },
      { name: 'Sharing board, cheese and charcuterie', price: '26 €' },
      { name: 'Candied chestnuts, 4 pieces', price: '8 €' },
    ],
    priceNote: 'Prices in euros, service included. Wine list on request.',
  },
  art: {
    label: 'Chapter II',
    title: 'Art at Toile Blanche',
    series: 'Toile Blanche Sessions 13',
    artists: 'Leroy Brothers',
    work: 'Generative Institutional Derivatives',
    lede: 'To close the season, we step into the spotlight ourselves: our latest work, in a two-part exhibition across two venues in Saint-Paul-de-Vence.',
    venues: [
      { name: 'Galerie Podgorny', when: '15 to 20 December' },
      { name: 'Toile Blanche Contemporary', when: '19 December to the end of February 2027' },
    ],
    nightLabel: 'Saturday 19 December · RAD/ART Tour',
    nightLede: 'The whole show, one night only.',
    schedule: [
      { when: '4 pm to 6 pm', detail: 'Presentation at Galerie Podgorny' },
      { when: '6 pm to 8 pm', detail: 'Presentation at Toile Blanche Contemporary' },
      { when: '7 pm to 9 pm', detail: 'RAD/ART After-Show at the winter bar' },
      { when: '8 pm to midnight', detail: 'Toile Blanche Sessions 13, outdoors: dress warmly' },
    ],
    limited: 'Limited places for the Sessions.',
  },
  tablesLabel: 'Chapter III',
  tablesIntro: 'Festive tables. By reservation.',
  tables: [
    {
      date: '24.12',
      title: 'Christmas Eve dinner',
      when: 'Thursday 24 December, evening',
      courses: [
        {
          title: 'To begin',
          items: [
            'Var snail croquette, walnut and Espelette pepper',
            'Mushroom cappuccino, milk foam, cep powder',
            'Foie gras in a fine morello cherry jelly, hibiscus, sesame gomasio',
          ],
        },
        {
          title: 'Starter',
          items: ['Scallops in a champagne broth, smoked harenga, leeks, watercress and preserved lemon'],
        },
        {
          title: 'Main',
          items: [
            'Bresse chicken stuffed with crayfish, black trumpet mushrooms, fine potato mousseline, poultry jus',
          ],
        },
        {
          title: 'Cheese',
          items: ['A fine slice of truffled brie de Meaux, lamb’s lettuce, apple and quince'],
        },
        {
          title: 'Dessert',
          items: ['Toile Blanche yule log, pear, caramel, Gavottes, tonka', 'Petits fours'],
        },
      ],
      priceLines: ['125 € per person', 'Wine pairing, 55 €, four glasses'],
      kids: 'Children’s menu up to 12, 45 €: ricotta tortellini, spinach, butternut, chicken supreme or sea bass fillet, mash, and the yule log.',
    },
    {
      date: '25.12',
      title: 'Christmas Day lunch',
      when: 'Friday 25 December, lunch',
      paragraphs: [
        'La Guinguette d’hiver welcomes you.',
        'Our usual Guinguette menu, its fish, its meat and its plates to share, served around the pool, weather permitting.',
        'For the occasion, we also serve:',
      ],
      extras: [
        { name: 'Seafood plate: fines de claire oysters, langoustines, trout gravlax, prawns, whelks, seafood rillettes', price: '34 €' },
        { name: 'Truffled brie de Meaux, lamb’s lettuce', price: '14 €' },
        { name: 'Toile Blanche yule log', price: '12 €' },
      ],
      priceLines: ['Lunch only. Net prices, service included.'],
      kids: 'Children’s menu up to 12, 25 €: chicken supreme with poultry jus, or sea bass fillet with lemon butter, mash, and the yule log.',
    },
    {
      date: '31.12',
      title: 'New Year’s Eve dinner',
      when: 'Thursday 31 December, evening',
      courses: [
        {
          title: 'To begin',
          items: [
            'Grilled octopus medallion, rouille, bisque, socca chips',
            'Var snail croquette, fennel, walnut and Espelette pepper',
            'Juniper-smoked duck foie gras, gingerbread crumble',
          ],
        },
        {
          title: 'Starter',
          items: ['Homemade spaghetti-squash and butternut tortellini, sage butter, warm chestnut foam, grated bottarga'],
        },
        {
          title: 'Fish',
          items: ['John Dory in an Oscietra caviar broth, preserved lemon, spinach, samphire, toasted hazelnut'],
        },
        {
          title: 'Meat',
          items: ['Charolais beef fillet, potato mille-feuille, onions and black truffle'],
        },
        {
          title: 'Cheese',
          items: ['Mont d’Or, black olive, pear chutney, lamb’s lettuce'],
        },
        {
          title: 'Pre-dessert',
          items: ['Bergamot lemon'],
        },
        {
          title: 'Dessert',
          items: ['Intense chocolate, fine cocoa sponge, Griottines and light vanilla cream'],
        },
      ],
      priceLines: ['175 € per person', 'A glass of champagne at midnight included', 'Wine pairing, 65 €, five glasses'],
      kids: 'Children’s menu up to 12, 45 €: ricotta tortellini, spinach, butternut, chicken supreme or sea bass fillet, mash, and a revisited Black Forest.',
    },
    {
      date: '01.01',
      title: 'New Year’s Day lunch',
      when: 'Friday 1 January 2027, lunch',
      paragraphs: [
        'La Guinguette d’hiver welcomes you.',
        'Our usual Guinguette menu, its fish, its meat and its plates to share, served around the pool, weather permitting.',
        'For the occasion, we also serve:',
      ],
      extras: [
        { name: 'Seafood plate: fines de claire oysters, langoustines, trout gravlax, prawns, whelks, seafood rillettes', price: '34 €' },
        { name: 'Truffled brie de Meaux, lamb’s lettuce', price: '14 €' },
        { name: 'Black Forest cake, revisited', price: '12 €' },
      ],
      priceLines: ['Lunch only. Net prices, service included.'],
      kids: 'Children’s menu up to 12, 25 €: chicken supreme with poultry jus, or sea bass fillet with lemon butter, mash, and a revisited Black Forest.',
    },
  ],
  reserveLabel: 'Reservation',
  takeaway: {
    label: 'Chapter IV',
    title: 'To take home',
    lede: [
      'Homemade foie gras au torchon.',
      'Made in our kitchen, for your festive table.',
    ],
    items: [
      { name: 'Torchon, 250 g', serves: 'Serves 4 to 5', price: '40 €' },
      { name: 'Torchon, 500 g', serves: 'Serves 8 to 10', price: '80 €' },
    ],
    note: 'Order in advance. Collection from 18 to 24 December.',
  },
  stay: {
    label: 'Chapter V',
    title: 'Stays and gifts',
    offers: [
      {
        title: 'A December weekend, from 720 € for two',
        lines: [
          'Two nights in a suite, breakfast included.',
          'Dinner at Le Restaurant, up to 80 € per person, excluding drinks.',
          'At the winter bar, a glass of champagne and six oysters per person.',
        ],
      },
      {
        title: 'New Year, from 990 € for two',
        lines: [
          'Two nights from 30 December to 1 January, breakfast included.',
          'New Year’s Eve dinner.',
          'On 1 January, the seafood plate and a dish from La Guinguette.',
        ],
      },
      {
        title: 'Winter at Toile Blanche, from 236 € a night',
        lines: [
          'Suites with breakfast.',
          'Stay 4 nights, the 5th is on us.',
        ],
      },
    ],
    giftsTitle: 'Gifts',
    giftsIntro: 'A night, a dinner, an evening at the winter bar. Gift cards valid for one year.',
    gifts: [
      'Any amount, from 50 €',
      'Dinner for two at Le Restaurant, from 150 €',
      'A night for two, breakfast included, from 236 €',
    ],
    giftLink: 'Give a gift voucher',
    winterLink: 'Discover L’Hiver',
    bookStay: 'Reserve a stay',
  },
  promo: {
    eyebrow: 'Year’s end 2026',
    title: 'Les Fêtes',
    text: 'The winter bar from 4 December, Sessions 13, and four tables between Christmas Eve and New Year’s Day.',
    cta: 'See the programme',
  },
  events: [
    {
      name: 'Toile Blanche Sessions 13',
      startDate: '2026-12-19',
      description:
        'RAD/ART Tour on 19 December: Galerie Podgorny from 4 pm to 6 pm, Toile Blanche Contemporary from 6 pm to 8 pm, after-show at the winter bar from 7 pm to 9 pm, then Sessions 13 outdoors from 8 pm to midnight. Leroy Brothers exhibition, Generative Institutional Derivatives: Galerie Podgorny from 15 to 20 December, Toile Blanche Contemporary from 19 December to the end of February 2027. Limited places.',
    },
    {
      name: 'Christmas Eve dinner at Toile Blanche',
      startDate: '2026-12-24',
      description: 'Dinner on 24 December, 125 € per person. Wine pairing 55 €, four glasses.',
      price: '125',
    },
    {
      name: 'Christmas Day lunch at La Guinguette',
      startDate: '2026-12-25',
      description: 'Lunch on 25 December at La Guinguette, the usual menu and the seafood plate.',
    },
    {
      name: 'New Year’s Eve dinner at Toile Blanche',
      startDate: '2026-12-31',
      description:
        'Dinner on 31 December, 175 € per person, a glass of champagne at midnight included. Wine pairing 65 €, five glasses.',
      price: '175',
    },
    {
      name: 'New Year’s Day lunch at La Guinguette',
      startDate: '2027-01-01',
      description: 'Lunch on 1 January at La Guinguette, the usual menu and the seafood plate.',
    },
  ],
};

export function getLesFetesCopy(locale: Locale): LesFetesCopy {
  return locale === 'fr' ? fr : en;
}

export const lesFetesContact = { phone, email, tel: '+33493327421' };
