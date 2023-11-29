import { faker } from "@faker-js/faker";
import { openingHours, randomWordList, roundedFloat, wordFromList } from "../utils";
import { Nightlife } from "@/types/Event";

/** Generate a random night life event. */
export const nightlife = (): Nightlife => {
  return {
    venue: faker.company.name(),
    type: wordFromList([
      "Nightclub",
      "Lounge",
      "Bar",
      "Pub",
      "Karaoke Bar",
      "Wine Bar",
      "Sports Bar",
      "Dance Club",
      "Jazz Club",
      "Comedy Club",
      "Irish Pub",
      "Cocktail Bar",
      "Live Music Venue",
      "Rooftop Bar",
      "Speakeasy",
      "Beer Garden",
      "Hookah Lounge",
      "Casino",
      "Billiards Hall",
      "Brewery",
      "Cabaret",
      "Gastropub",
      "Salsa Club",
      "Piano Bar",
      "Tiki Bar",
      "Country Bar",
      "Electronic Dance Club (EDM)",
      "Latin Club",
      "Rhythm and Blues (R&B) Venue",
      "Reggae Club",
      "Hip Hop Club",
      "Alternative Music Venue",
      "Folk Music Venue",
      "Indie Rock Venue",
      "K-pop Club",
      "Arcade Bar",
      "Themed Nightclub",
      "Upscale Lounge",
      "Dive Bar",
      "Biker Bar",
      "Gay Bar",
      "Lesbian Bar",
      "Craft Cocktail Bar",
      "Late-Night Diner",
      "Outdoor Beer Garden",
      "Soul Music Venue",
      "Funk Club",
      "Discotheque",
      "Tapas Bar",
      "Gin Bar",
      "Vodka Bar",
      "Sake Bar",
      "Whiskey Bar",
      "Rum Bar",
      "Tequila Bar",
      "Cigar Lounge",
      "Kareoke Lounge",
      "Happy Hour Spot",
      "Rave",
      "Electronic Music Festival",
      "After-Hours Club",
      "VIP Club"
    ]),
    openingHours: openingHours(),
    dressCode: wordFromList([
      "Casual Chic",
      "Smart Casual",
      "Cocktail Attire",
      "Business Casual",
      "Dress to Impress",
      "Upscale Casual",
      "Glamorous Evening Wear",
      "Beach Elegant",
      "Creative Black Tie",
      "Vintage Glam",
      "Fashion Forward",
      "Bohemian Chic",
      "Urban Sophistication",
      "Resort Casual",
      "Funky and Eclectic",
      "White Party Attire",
      "High Fashion",
      "Red Carpet Ready",
      "Laid-Back Lounge Wear",
      "Retro Revival",
      "Tropical Vibes",
      "Edgy Street Style",
      "Athleisure Elegance",
      "Formal Funk",
      "Eclectic Mix and Match",
      "City Sleek",
      "Dapper and Dashing",
      "Gothic Glam",
      "Festival Fashion",
      "Island Vibes",
      "Denim and Diamonds",
      "Artistic Expression",
      "Vintage Hollywood Glam",
      "Safari Chic",
      "Rock and Roll Rebel",
      "Boho Beauty",
      "Country Club Casual",
      "Disco Fever Flashback",
      "Preppy and Polished",
      "Chic Safari",
      "Euro Glam",
      "Trendy and Tailored",
      "Modern Minimalism",
      "Classic Hollywood Glam",
      "Grunge Glam",
      "Exotic Elegance",
      "Poolside Chic",
      "Rustic Charm",
      "Chic Lounge Attire",
      "Futuristic Fashion",
      "Wild West Whimsy",
      "Avant-Garde Edge",
      "Island Luxe",
      "Chic Safari",
      "Urban Jungle",
      "Floral Finesse",
      "Neon Nights",
      "Sleek and Sexy",
      "Artsy and Eclectic",
      "Nomadic Elegance",
      "Bohemian Rhapsody",
      "Cruise Chic",
      "Glam Rock",
      "Quirky and Colorful",
      "Riviera Chic",
      "Sophisticated Streetwear",
      "Tropical Glam",
      "Wine Country Casual",
      "Asian Fusion",
      "Retro Futurism",
      "Casual Glam",
      "Tech-Savvy Style",
      "Steampunk Soiree",
      "Glow in the Dark",
      "Whimsical Wonderland"
    ]),
    ageRestriction: faker.number.int({ min: 16, max: 21 }),
    coverCharge: roundedFloat(0, 100),
    livePerformances: faker.datatype.boolean(),
    music: randomWordList([
      "Electronic Dance Music (EDM)",
      "Hip-Hop/Rap",
      "Pop",
      "Rock",
      "R&B",
      "Reggae",
      "Latin",
      "Country",
      "Jazz",
      "Blues",
      "Funk",
      "Soul",
      "House",
      "Techno",
      "Trance",
      "Dubstep",
      "Indie",
      "Alternative",
      "Metal",
      "Classical",
      "Disco",
      "Salsa",
      "Bachata",
      "Merengue",
      "K-Pop",
      "Folk",
      "Gospel",
      "Swing",
      "Ambient",
      "Chillout",
      "Reggaeton",
      "Bluegrass",
      "Fusion",
      "Psychedelic",
      "Jungle",
      "Ska",
      "Grime",
      "Hardcore",
      "Country Rock",
      "Fusion Jazz",
      "Trap",
      "Samba",
      "Acoustic",
      "Instrumental",
      "Electropop",
      "Dub",
      "Garage",
      "Big Band",
      "Synthwave",
      "Deep House",
      "Progressive Rock",
      "Nu Disco",
      "Ambient House",
      "Tropical House",
      "Dub Techno",
      "Folk Rock",
      "Trip-Hop",
      "Nu Jazz",
      "Afrobeat",
      "Surf Rock",
      "Rockabilly",
      "Soul Jazz",
      "World Music",
      "Drum and Bass",
      "Hardstyle",
      "Electro Swing",
      "Grunge",
      "Post-Punk",
      "New Wave",
      "Garage Rock",
      "Hard Rock",
      "Punk Rock",
      "Post-Rock",
      "Latin Jazz",
      "Boogie",
      "Future Bass",
      "Trap Soul",
      "Ambient Pop",
      "Post-Disco",
      "Future House",
      "Dream Pop",
      "Minimal Techno",
      "Glitch Hop",
      "Kizomba",
      "Zouk",
      "Electro Pop",
      "Post-Metal",
      "Shoegaze",
      "Vaporwave",
      "Industrial",
      "NeoSoul",
      "New Age",
      "IDM (Intelligent Dance Music)",
      "Post-Hardcore"
    ]),
    drinks: randomWordList([
      "Classic Cocktails",
      "Craft Cocktails",
      "Beer Selections",
      "Wine Varieties",
      "Mocktails",
      "Shots and Shooters",
      "Signature Drinks",
      "Frozen Cocktails",
      "Margaritas",
      "Whiskey and Bourbon",
      "Vodka Creations",
      "Rum Cocktails",
      "Tequila Specials",
      "Gin Mixes",
      "Martini Menu",
      "Champagne and Sparkling",
      "Non-Alcoholic Beverages",
      "Ciders and Coolers",
      "Sours and Fizzes",
      "Tropical Libations",
      "Coffee and Espresso Drinks",
      "Irish Drinks",
      "Sake Selections",
      "Local Favorites",
      "House Specials",
      "Infused Spirits",
      "Refreshing Coolers",
      "Cucumber Coolers",
      "Ginger Infusions",
      "Fruity Blends",
      "Spicy Margaritas",
      "Floral Elixirs",
      "Herb-Infused Cocktails",
      "Citrus Delights",
      "Seasonal Specials",
      "Berry Bliss",
      "Coconut Creations",
      "Tiki Cocktails",
      "Smokey Infusions",
      "Prohibition-era Cocktails",
      "Mexican Mixology",
      "Japanese Highballs",
      "Dessert Cocktails",
      "Candy-Inspired Creations",
      "Bourbon Smash",
      "Heritage Classics",
      "Elevated Gin and Tonics",
      "Modern Mixes",
      "Sparkling Sangrias",
      "Aperitifs and Digestifs",
      "Local Distillery Showcases",
      "Aged Spirits",
      "Eco-Friendly Cocktails",
      "Bespoke Creations",
      "Barrel-Aged Cocktails",
      "Artisanal Spirits",
      "Low-ABV Options"
    ]),
    food: randomWordList([
      "Crispy Chicken Wings",
      "Cheese and Charcuterie Board",
      "Mozzarella Sticks",
      "Loaded Nachos",
      "Sliders (Beef, Chicken, or Veggie)",
      "Spinach Artichoke Dip",
      "Bruschetta",
      "Buffalo Chicken Dip",
      "Quesadillas",
      "Truffle Fries",
      "Spring Rolls",
      "Tacos (Various Fillings)",
      "Shrimp Cocktail",
      "Caprese Skewers",
      "Mini Tacos",
      "Calamari",
      "Hummus Platter",
      "Chicken Satay",
      "Poutine",
      "Garlic Parmesan Fries",
      "Deviled Eggs",
      "Stuffed Jalapeños",
      "Pulled Pork Sliders",
      "Gourmet Pizza Slices",
      "Chips and Salsa",
      "Crab Cakes",
      "Vegetable Spring Rolls",
      "Sushi Rolls",
      "Cheese Quesadillas",
      "Brussels Sprouts with Balsamic Glaze",
      "BBQ Bacon Wrapped Shrimp",
      "Shrimp Tacos",
      "Pita and Dips",
      "Tater Tots",
      "Meatballs",
      "Stuffed Mushrooms",
      "Chicken Tenders",
      "Fried Pickles",
      "BBQ Chicken Flatbread",
      "Mini Corn Dogs",
      "Avocado Toast",
      "Chili Cheese Fries",
      "Edamame",
      "Gourmet Mac and Cheese",
      "Steak Skewers",
      "Garlic Bread",
      "Dumplings",
      "Ceviche",
      "Potato Skins",
      "Cheese Fries",
      "Pulled Chicken Sliders",
      "Onion Rings",
      "Bacon-wrapped Dates",
      "Tuna Tartare",
      "Garlic Knots",
      "Fried Ravioli",
      "Stuffed Bell Peppers"
    ]),
    atmosphere: wordFromList([
      "Energetic Dance Floor",
      "Chill Lounge Vibes",
      "Live Music Intimacy",
      "Rooftop Serenity",
      "Karaoke Fun Zone",
      "Cozy Jazz Corner",
      "EDM Excitement",
      "Hip-Hop Hangout",
      "Salsa and Latin Heat",
      "Casual Pub Comfort",
      "Retro Arcade Nostalgia",
      "Speakeasy Sophistication",
      "Electronic Beats Haven",
      "Rustic Country Bar",
      "Artistic Bohemian Retreat",
      "Cocktail Connoisseur's Den",
      "Beachfront Relaxation",
      "Rustic Tavern Charm",
      "Clubhouse Party Vibes",
      "Swanky Lounge Luxe"
    ])
  };
};
