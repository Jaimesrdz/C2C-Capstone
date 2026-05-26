export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

export const RECIPES: Recipe[] = [
  {
    id: 'chicken-stir-fry',
    name: 'Chicken Stir Fry',
    ingredients: ['chicken-breast', 'broccoli', 'bell-pepper', 'onion', 'garlic', 'rice'],
    instructions: [
      'Cook rice according to package instructions.',
      'Slice chicken breast into thin strips.',
      'Heat oil in a wok over high heat and cook chicken until golden.',
      'Add garlic, onion, bell pepper, and broccoli; stir-fry for 4–5 minutes.',
      'Season with soy sauce and serve over rice.',
    ],
    imageUrl: 'https://maplejubilee.com/wp-content/uploads/2021/07/Chicken-stir-fry-V1.jpg',
  },
  {
    id: 'beef-tacos',
    name: 'Beef Tacos',
    ingredients: ['ground-beef', 'onion', 'garlic', 'tomato', 'bell-pepper', 'cheddar-cheese'],
    instructions: [
      'Brown ground beef in a skillet over medium-high heat.',
      'Add diced onion, garlic, and bell pepper; cook until softened.',
      'Stir in diced tomato and season with cumin and chili powder.',
      'Serve in taco shells topped with cheddar cheese.',
    ],
    imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2018/01/shredded-beef-tacos-3.jpg',
  },
  {
    id: 'salmon-with-spinach',
    name: 'Garlic Salmon with Spinach',
    ingredients: ['salmon', 'spinach', 'garlic', 'onion'],
    instructions: [
      'Season salmon fillets with salt, pepper, and minced garlic.',
      'Sear salmon in an oiled skillet for 4 minutes per side.',
      'In the same pan, sauté onion and garlic until fragrant.',
      'Add spinach and cook until wilted.',
      'Plate spinach and top with salmon fillet.',
    ],
    imageUrl: 'https://www.halfbakedharvest.com/wp-content/uploads/2019/04/Garlic-Butter-Creamed-Spinach-Salmon-1.jpg',
  },
  {
    id: 'shrimp-pasta',
    name: 'Shrimp Pasta',
    ingredients: ['shrimp', 'pasta', 'garlic', 'spinach', 'tomato', 'onion'],
    instructions: [
      'Cook pasta according to package instructions; reserve ½ cup pasta water.',
      'Sauté garlic and onion in olive oil over medium heat.',
      'Add shrimp and cook until pink, about 2 minutes per side.',
      'Stir in diced tomato and spinach; cook until wilted.',
      'Toss with pasta, adding pasta water to loosen the sauce.',
    ],
    imageUrl: 'https://www.billyparisi.com/wp-content/uploads/2025/06/garlic-shrimp-pasta-2.jpg',
  },
  {
    id: 'veggie-omelette',
    name: 'Veggie Omelette',
    ingredients: ['eggs', 'spinach', 'bell-pepper', 'onion', 'cheddar-cheese', 'milk'],
    instructions: [
      'Whisk eggs with a splash of milk; season with salt and pepper.',
      'Sauté diced onion and bell pepper in a non-stick pan until soft.',
      'Add spinach and cook until wilted; set vegetables aside.',
      'Pour egg mixture into the pan over medium-low heat.',
      'Add vegetables and cheddar cheese on one half; fold and serve.',
    ],
    imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/2/2020/10/Healthy-Vegetable-Omelette-e8d6b9c.jpg?resize=1366,1242',
  },
  {
    id: 'tomato-rice-bowl',
    name: 'Tomato Rice Bowl',
    ingredients: ['rice', 'tomato', 'onion', 'garlic', 'bell-pepper'],
    instructions: [
      'Sauté diced onion, garlic, and bell pepper in olive oil until soft.',
      'Add diced tomato and cook down for 5 minutes.',
      'Stir in uncooked rice and toast for 1 minute.',
      'Add broth, bring to a boil, then simmer covered for 18 minutes.',
      'Fluff with a fork and serve.',
    ],
    imageUrl: 'https://www.budgetbytes.com/wp-content/uploads/2022/07/Tomato-Rice-bowl.jpg',
  },
  {
    id: 'cheesy-broccoli-soup',
    name: 'Cheesy Broccoli Soup',
    ingredients: ['broccoli', 'cheddar-cheese', 'milk', 'onion', 'garlic'],
    instructions: [
      'Sauté diced onion and garlic in butter over medium heat.',
      'Add broccoli florets and enough broth to cover; simmer for 10 minutes.',
      'Blend about half the soup until smooth, then return to the pot.',
      'Stir in milk and shredded cheddar cheese over low heat until melted.',
      'Season with salt and pepper and serve warm.',
    ],
    imageUrl: 'https://www.the-girl-who-ate-everything.com/wp-content/uploads/2011/11/broccoli-cheese-soup-21.jpg',
  },
  {
    id: 'beef-fried-rice',
    name: 'Beef Fried Rice',
    ingredients: ['ground-beef', 'rice', 'eggs', 'onion', 'garlic', 'bell-pepper'],
    instructions: [
      'Cook and cool rice (day-old rice works best).',
      'Brown ground beef in a large skillet; drain excess fat.',
      'Push beef to the side, scramble eggs in the pan, then mix together.',
      'Add onion, garlic, and bell pepper; stir-fry for 3 minutes.',
      'Add rice and toss everything together with soy sauce.',
    ],
    imageUrl: 'https://www.recipetineats.com/tachyon/2024/09/Sizzling-Beef-Fried-Rice-54326a.jpg',
  },
];
