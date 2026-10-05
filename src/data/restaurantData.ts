import { GalleryItem, MenuItem, Review } from '../types/restaurant';

export const RESTAURANT_INFO = {
  name: 'SAFFRON & EMBER',
  shortName: 'Saffron & Ember',
  tagline: 'Where Ancient Charcoal Hearths Meet Modern Culinary Artistry',
  subheading: 'An elevated dining salon celebrating hand-ground heirloom spices, open wood-fired embers, and slow-dum gastronomy in an intimate, contemporary sanctuary.',
  phone: '+1 (415) 890-4420',
  reservationPhone: '+1 (415) 890-4421',
  email: 'reservations@saffronandember.com',
  eventsEmail: 'private-events@saffronandember.com',
  address: '428 Sansome Street, Financial District, San Francisco, CA 94111',
  valetNote: 'Complimentary valet parking available daily from 5:30 PM on Sansome St.',
  dressCode: 'Smart Casual & Formal Dining Attire',
  hours: {
    lunch: 'Tuesday – Sunday: 11:30 AM – 2:30 PM',
    dinner: 'Tuesday – Thursday & Sunday: 5:00 PM – 10:00 PM',
    weekendDinner: 'Friday – Saturday: 5:00 PM – 11:00 PM',
    lounge: 'Tuesday – Sunday: 4:30 PM – Midnight',
    closed: 'Mondays (Reserved for culinary development & private buys)'
  },
  accolades: [
    'Michelin Guide 2026 Recommended',
    'Eater Top 38 Essential Dining Salons',
    'Wine Spectator Best of Award of Excellence',
    'James Beard Foundation Semi-Finalist 2025'
  ]
};

export const MENU_CATEGORIES = [
  { id: 'starters', name: 'Starters', description: 'Charred small plates & hearth-roasted morsels' },
  { id: 'soups-salads', name: 'Soups & Salads', description: 'Fragrant shorbas, garden greens & crisp textures' },
  { id: 'main-course', name: 'Main Course', description: 'Slow-simmered gravies, clay-pot roasts & seafood' },
  { id: 'rice-biryani', name: 'Rice & Biryani', description: 'Artisanal aged basmati cooked in sealed brass handis' },
  { id: 'vegetarian', name: 'Vegetarian', description: 'Heirloom vegetables, hand-churned paneer & wild mushrooms' },
  { id: 'non-vegetarian', name: 'Non-Vegetarian', description: 'Woodfire roasts, pasture-raised meats & coastal catch' },
  { id: 'desserts', name: 'Desserts', description: 'Modern confections perfumed with saffron, rose & cardamom' },
  { id: 'beverages', name: 'Beverages', description: 'Craft botanicals, smoked cocktails & single-estate teas' }
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- STARTERS ---
  {
    id: 'starter-1',
    name: 'Truffle & Smoked Malai Paneer Tikka',
    description: 'Farmstead cottage cheese marinated in hung curd, green cardamom, and Périgord winter truffle oil, blistered over apricot wood charcoal.',
    price: 24,
    category: 'starters',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1,
    allergens: ['Dairy'],
    pairingNote: 'Domaine Leflaive Puligny-Montrachet 2021',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'starter-2',
    name: 'Kashmiri Lamb Galouti Pâté',
    description: 'Melt-in-mouth slow-smoked minced lamb infused with 24 heirloom spices, served over flaky saffron sheermaal crisps with raw mango relish.',
    price: 27,
    category: 'starters',
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    allergens: ['Gluten', 'Dairy'],
    pairingNote: 'Châteauneuf-du-Pape Rouge 2019',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'starter-3',
    name: 'Charred Saffron Tiger Prawns',
    description: 'Jumbo Pacific prawns crusted with hand-pounded Tellicherry black pepper, saffron butter, kaffir lime zest, and smoked garlic emulsion.',
    price: 29,
    category: 'starters',
    isVeg: false,
    spiceLevel: 2,
    allergens: ['Shellfish', 'Dairy'],
    pairingNote: 'Sancerre Blanc, Domaine Vacheron',
    image: 'https://images.unsplash.com/photo-1559737558-245cb1115b81?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'starter-4',
    name: 'Wild Morel & Lotus Root Chaat',
    description: 'Himalayan wild morels crisp-fried with spiced water chestnut, compressed winter melons, yogurt spheres, tamarind glaze, and sev.',
    price: 22,
    category: 'starters',
    isVeg: true,
    spiceLevel: 1,
    allergens: ['Dairy'],
    pairingNote: 'Sparkling Franciacorta Rosé',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80'
  },

  // --- SOUPS & SALADS ---
  {
    id: 'soup-1',
    name: 'Fire-Roasted Tomato & Fennel Shorba',
    description: 'Slow-simmered heirloom tomatoes charred over embers, fragrant with crushed fennel, star anise broth, and sourdough cumin croutons.',
    price: 18,
    category: 'soups-salads',
    isVeg: true,
    spiceLevel: 1,
    allergens: ['Gluten'],
    pairingNote: 'Dry Mosel Riesling',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'soup-2',
    name: 'Slow-Braised Mutton Yakhni Shorba',
    description: 'Clear aromatic broth extracted from pasture-raised lamb bones infused with Kashmiri saffron, dry ginger, crushed mace, and scallion oil.',
    price: 21,
    category: 'soups-salads',
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    pairingNote: 'Pinot Noir, Russian River Valley',
    image: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'salad-1',
    name: 'Burrata with Charred Spiced Peaches',
    description: 'Creamy artisanal burrata paired with hearth-grilled summer stone fruit, baby arugula, crushed pistachio dukkah, and chili-honey reduction.',
    price: 23,
    category: 'soups-salads',
    isVeg: true,
    spiceLevel: 1,
    allergens: ['Dairy', 'Nuts'],
    pairingNote: 'Provence Rosé Côtes de Provence',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80'
  },

  // --- MAIN COURSE ---
  {
    id: 'main-1',
    name: 'Old Delhi Smoked Butter Chicken',
    description: 'Free-range chicken thighs roasted in clay tandoor, simmered in a velvety sauce of San Marzano tomatoes, churned butter, and dried Kasuri methi.',
    price: 36,
    category: 'main-course',
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    allergens: ['Dairy'],
    pairingNote: 'Barolo DOCG, Piedmont 2018',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'main-2',
    name: '12-Hour Slow Braised Lamb Shank Rogan Josh',
    description: 'Prime Sonoma lamb shank braised over embers until falling off the bone, rich with Kashmiri dried cockscomb flower, ratan jot, and caramelized shallots.',
    price: 44,
    category: 'main-course',
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    pairingNote: 'Syrah, Northern Rhône',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'main-3',
    name: 'Chilean Sea Bass in Coconut Kokum Moilee',
    description: 'Pan-seared sustainable sea bass resting in an ethereal reduction of coconut cream, tempered mustard seeds, fresh curry leaves, and tart kokum.',
    price: 46,
    category: 'main-course',
    isVeg: false,
    spiceLevel: 1,
    allergens: ['Fish'],
    pairingNote: 'Chardonnay, Meursault 2020',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'main-4',
    name: '24-Hour Charcoal Dal Makhani',
    description: 'Slow-simmered black urad lentils braised overnight over wood embers with vine tomatoes, hand-churned white butter, and gentle ginger smoke.',
    price: 28,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 1,
    allergens: ['Dairy'],
    pairingNote: 'Brunello di Montalcino 2017',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80'
  },

  // --- RICE & BIRYANI ---
  {
    id: 'rice-1',
    name: 'Awadhi Shahi Dum Mutton Biryani',
    description: 'Pasture-raised young goat meat layered with 2-year aged aged basmati rice, saffron strands, screwpine essence, and sealed in an artisanal clay pot with dough.',
    price: 42,
    category: 'rice-biryani',
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    allergens: ['Dairy'],
    pairingNote: 'Bordeaux Grand Cru Classé',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'rice-2',
    name: 'Wild Forest Morel & Truffle Biryani',
    description: 'Foraged Himalayan gucchi morels and porcini mushrooms infused with smoked saffron rice, caramelized shallots, mint, and white truffle essence.',
    price: 38,
    category: 'rice-biryani',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1,
    allergens: ['Dairy'],
    pairingNote: 'White Burgundy or Aged Pinot Noir',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'rice-3',
    name: 'Pardah Chicken Dum Biryani',
    description: 'Tender chicken marinated in browned garlic, rose water, and green chili, enclosed under a hand-rolled golden butter-pastry crust and sliced tableside.',
    price: 36,
    category: 'rice-biryani',
    isVeg: false,
    spiceLevel: 2,
    allergens: ['Gluten', 'Dairy'],
    pairingNote: 'Grenache Blend, Priorat',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=80'
  },

  // --- VEGETARIAN ---
  {
    id: 'veg-1',
    name: 'Stuffed Morel & Fig Malai Kofta',
    description: 'Delicate dumplings of fresh Chenna and dried mission figs nestled in a decadent roasted cashew-nut and green cardamom velouté.',
    price: 32,
    category: 'vegetarian',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1,
    allergens: ['Dairy', 'Nuts'],
    pairingNote: 'Viognier, Condrieu',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'veg-2',
    name: 'Hearth-Charred Baingan Bharta Tart',
    description: 'Japanese eggplants smoked over oak embers with roasted garlic, cumin, and vine tomatoes, served with warm layered roomali flatbread.',
    price: 28,
    category: 'vegetarian',
    isVeg: true,
    spiceLevel: 2,
    allergens: ['Gluten'],
    pairingNote: 'Etna Rosso, Sicily',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'veg-3',
    name: 'Paneer Pasanda in Walnut Gravy',
    description: 'Herb-crusted cottage cheese layered with spiced apricot chutney, gently simmered in a Kashmiri walnut and yogurt reduction.',
    price: 30,
    category: 'vegetarian',
    isVeg: true,
    spiceLevel: 2,
    allergens: ['Dairy', 'Nuts'],
    pairingNote: 'Chenin Blanc, Loire Valley',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80'
  },

  // --- NON-VEGETARIAN ---
  {
    id: 'nonveg-1',
    name: 'Pistachio-Crusted Australian Lamb Chops',
    description: 'Triple-cut lamb rack marinated in raw papaya, clove oil, and roasted garlic, crusted with roasted pistachios and served with mint chimichurri.',
    price: 48,
    category: 'non-vegetarian',
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    allergens: ['Dairy', 'Nuts'],
    pairingNote: 'Napa Valley Cabernet Sauvignon',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'nonveg-2',
    name: 'Woodfire Tandoori Poussin with Spiced Fig Glaze',
    description: 'Whole young poussin soaked in Kashmiri chili brine, flash-roasted in the hearth, basted with spiced black mission fig reduction.',
    price: 38,
    category: 'non-vegetarian',
    isVeg: false,
    spiceLevel: 2,
    allergens: ['Dairy'],
    pairingNote: 'Côtes du Rhône Villages',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'nonveg-3',
    name: 'Tellicherry Black Pepper King Prawns',
    description: 'Wild jumbo prawns wok-tossed with sun-dried Tellicherry peppercorns, curry leaf butter, shallot confit, and crushed coriander seeds.',
    price: 42,
    category: 'non-vegetarian',
    isVeg: false,
    spiceLevel: 3,
    allergens: ['Shellfish', 'Dairy'],
    pairingNote: 'Grüner Veltliner Smaragd',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80'
  },

  // --- DESSERTS ---
  {
    id: 'dessert-1',
    name: 'Gold Leaf Saffron Pistachio Kulfi',
    description: 'Traditional slow-reduced buffalo milk ice cream perfumed with Iranian saffron and wild cardamom, served with rose petal falooda and 24k gold leaf.',
    price: 19,
    category: 'desserts',
    isVeg: true,
    isChefSpecial: true,
    allergens: ['Dairy', 'Nuts'],
    pairingNote: 'Château d’Yquem Sauternes',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dessert-2',
    name: 'Cardamom Smoked Valrhona Chocolate Mousse',
    description: '70% dark Guanaja chocolate ganache infused with roasted green cardamom smoke, hazelnut praline crisp, and fleur de sel sea salt.',
    price: 20,
    category: 'desserts',
    isVeg: true,
    isChefSpecial: true,
    allergens: ['Dairy', 'Nuts', 'Gluten'],
    pairingNote: 'Aged Tawny Port 20 Year',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dessert-3',
    name: 'Baked Saffron Shahi Brioche',
    description: 'House-baked butter brioche soaked in saffron saffron rabri cream, roasted almond slivers, and fragrant silver varq.',
    price: 18,
    category: 'desserts',
    isVeg: true,
    allergens: ['Dairy', 'Nuts', 'Gluten'],
    pairingNote: 'Royal Tokaji 5 Puttonyos Aszú',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80'
  },

  // --- BEVERAGES ---
  {
    id: 'bev-1',
    name: 'Smoked Saffron Old Fashioned',
    description: 'Small-batch rye whiskey, saffron syrup, Angostura & cardamom bitters, torched cinnamon quill, and hand-carved ice sphere.',
    price: 22,
    category: 'beverages',
    isVeg: true,
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bev-2',
    name: 'Damask Rose & Lychee Spritz (Zero-Proof)',
    description: 'Distilled mountain botanicals, Persian rose hydrosol, clarified lychee nectar, pink peppercorn tonic, and crystal mint.',
    price: 16,
    category: 'beverages',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bev-3',
    name: 'Kashmiri Kahwa Tea Ceremony',
    description: 'Single-estate green tea leaves steeped with green cardamom, Kashmiri saffron stigma, crushed sweet almonds, and local raw wildflower honey.',
    price: 14,
    category: 'beverages',
    isVeg: true,
    allergens: ['Nuts'],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'bev-4',
    name: 'Charred Pineapple & Cumin Mezcalita',
    description: 'Artisanal mezcal, woodfire-grilled pineapple juice, roasted cumin agave, fresh lime, and volcanic black sea salt rim.',
    price: 21,
    category: 'beverages',
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=900&q=80'
  }
];

export const CHEF_SPECIALS = [
  {
    title: 'The Seven Fires Tasting Journey',
    tagline: 'An 8-Course Hearth Exploration',
    price: 165,
    winePairing: 95,
    description: 'An immersive multi-course experience curated nightly by Executive Chef Aarav Sen, tracking the migration of heirloom spices over ancient stone and woodfire grills.',
    highlights: ['Wild Truffle Paneer', 'Chilean Sea Bass Moilee', '24k Saffron Awadhi Biryani', 'Valrhona Cardamom Mousse'],
    badge: "Chef's Signature Experience"
  },
  {
    title: 'Imperial Ember Roast Platter for Two',
    tagline: 'Table-side Carving & Tasting Feast',
    price: 135,
    description: 'Pistachio-crusted lamb chops, charred saffron tiger prawns, and slow-roasted poussin basted in mission fig glaze, accompanied by copper handi dal and roomali breads.',
    highlights: ['Feeds 2-3 guests', 'Table-side smoke dome reveal', 'Seasonal house chutneys & pickles'],
    badge: 'Limited Availability (15 per night)'
  },
  {
    title: 'Heritage Saffron & Morel Dum Feast',
    tagline: 'Celebration of Slow-Dum Craftsmanship',
    price: 88,
    description: 'Artisanal hand-sealed clay pot dum biryani with your choice of Prime Sonoma Lamb or Himalayan Wild Morels, served with smoked burani raita and mirchi ka salan.',
    highlights: ['Dough seal broken tableside', 'Aged 2-year basmati reserve', 'Persian saffron stigma'],
    badge: 'Guest Favorite'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Main Dining Salon at Twilight',
    category: 'ambience',
    categoryLabel: 'Dining Room',
    description: 'Architectural charcoal stone, custom brass light fixtures, and bespoke velvet seating created for unhurried dinners.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-2',
    title: 'The Open Woodfire Hearth',
    category: 'kitchen',
    categoryLabel: 'Kitchen Craft',
    description: 'Custom-built stone tandoors and embers burning almond and apricot wood reaching temperatures of 900°F.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-3',
    title: 'Hand-Crafted Awadhi Dum Biryani',
    category: 'dishes',
    categoryLabel: 'Signature Dish',
    description: 'Served in burnished heirloom bronze vessels with saffron strands and aromatic smoke.',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-4',
    title: 'The Ember Cocktail Lounge & Cellar',
    category: 'bar',
    categoryLabel: 'Cocktail Bar',
    description: 'A 600-label international cellar paired with botanical mixology utilizing roasted spices and clarified juices.',
    imageUrl: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-5',
    title: 'Executive Chef Aarav Sen Plating',
    category: 'kitchen',
    categoryLabel: 'Culinary Art',
    description: 'Precision plating combining ancient culinary techniques with modern California organic seasonality.',
    imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-6',
    title: 'Pistachio-Crusted Australian Lamb Rack',
    category: 'dishes',
    categoryLabel: 'Signature Dish',
    description: 'Hearth-roasted over fragrant embers with charred micro-shallots and mint coriander emulsion.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-7',
    title: 'Private Dining Wine Vault',
    category: 'ambience',
    categoryLabel: 'Private Salon',
    description: 'Secluded 16-seat private dining room flanked by temperature-controlled vintage wine racks.',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gal-8',
    title: 'Gold Leaf Saffron Pistachio Kulfi',
    category: 'dishes',
    categoryLabel: 'Dessert Craft',
    description: 'Hand-churned buffalo milk kulfi infused with Iranian saffron and edible 24-karat gold leaf.',
    imageUrl: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1200&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Elena Vance',
    role: 'Chief Food Critic',
    outlet: 'San Francisco Epicurean Gazette',
    rating: 5,
    quote: 'Saffron & Ember achieves what few restaurants dare: taking the rich, millennia-old spice lore of the Subcontinent and elevating it through a rigorous, wood-fired hearth lens. The lamb shank rogan josh is nothing short of legendary.',
    date: 'February 2026',
    verifiedDiner: true
  },
  {
    id: 'rev-2',
    author: 'Marcus & Julian Thorne',
    role: 'Private Dining Patrons',
    outlet: 'Verified OpenTable Diner',
    rating: 5,
    quote: 'We celebrated our 15th wedding anniversary here. From the personalized welcome cocktail to the aromatic reveal of the Awadhi biryani dough seal, every single detail felt warm, unpretentious, and extraordinarily refined.',
    date: 'January 2026',
    verifiedDiner: true
  },
  {
    id: 'rev-3',
    author: 'Chef David Lin',
    role: 'Restaurateur & James Beard Fellow',
    outlet: 'Michelin Guide Inspector Dispatch',
    rating: 5,
    quote: 'Chef Aarav Sen is operating at the absolute peak of contemporary hearth gastronomy. The balance of Tellicherry pepper, smoke, and fragrant fat in the lobster moilee and black dal is a masterclass.',
    date: 'December 2025',
    verifiedDiner: true
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Heirloom Spices & Live Embers',
    description: 'We source single-origin spices directly from small-holder farms in Kashmir, Kerala, and Rajasthan, freshly stone-ground daily before touching wood embers.',
    tag: 'Authentic Craft'
  },
  {
    title: 'Artisanal Clay & Bronze Vessels',
    description: 'Every biryani and slow braise is sealed with sourdough pastry and cooked in handcrafted burnished brass handis to lock in every note of aromatics.',
    tag: 'Ancient Method'
  },
  {
    title: 'Sommelier-Curated Cellar',
    description: 'A 600-bottle list focused on biodynamic, Old World icons and small-grower Champagnes selected to harmonize with complex spice profiles.',
    tag: 'Master Pairings'
  },
  {
    title: 'Warm Unrushed Hospitality',
    description: 'Spacious dining salons, acoustics calibrated for intimate conversation, and a service cadence honoring the luxury of long, restorative dining.',
    tag: 'The Salon Experience'
  }
];
