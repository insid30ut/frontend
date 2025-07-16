export interface TekTutorial {
  slug: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: string;
  description: string;
  materials: string[];
  content: string;
}

// Mock teks data (in a real app, this would read from the content/teks directory)
const teksData: Record<string, TekTutorial> = {
  'sterile-grain-preparation': {
    slug: 'sterile-grain-preparation',
    title: "Sterile Grain Preparation Technique",
    difficulty: "Intermediate",
    time: "3-4 hours",
    description: "Master the art of preparing sterile grain spawn for mushroom cultivation using basic equipment and proven sterilization methods.",
    materials: ["Whole grain (rye, wheat, or millet)", "Pressure cooker or large pot", "Mason jars with lids", "Aluminum foil", "Fine mesh strainer", "pH strips", "Gypsum (optional)"],
    content: `# Sterile Grain Preparation Technique

Properly prepared grain spawn forms the foundation of successful mushroom cultivation. This technique will teach you to create contamination-free grain substrate that provides optimal nutrition for mushroom mycelium.

## What You'll Need

- **Grain**: 2-3 cups whole rye berries (preferred) or wheat berries
- **Equipment**: Pressure cooker (23-quart recommended) or large stock pot
- **Containers**: 4-6 wide-mouth mason jars with lids
- **Sterilization**: Aluminum foil, cotton balls
- **Testing**: pH strips, thermometer
- **Optional**: Gypsum powder (2% by weight)

## Step-by-Step Process

### 1. Grain Selection and Cleaning

Choose plump, unbroken grains without signs of mold or insect damage. Rinse thoroughly under cold water, removing any floating debris or discolored grains.

**Pro tip**: Soak grains for 12-24 hours before cooking to reduce cooking time and ensure even hydration.

### 2. Cooking the Grain

Bring a large pot of water to boil and add the pre-soaked grains. Cook for 15-20 minutes until the grains are tender but not mushy. The grain should have a slight "al dente" texture.

**Target characteristics:**
- Grains swell to approximately double size
- Outer hull remains intact
- Interior is fully hydrated but firm
- No split or broken grains

### 3. pH Testing and Adjustment

Test the cooked grain water pH using strips. Optimal pH for most mushroom species is 6.0-7.0.

## Pro Tips & Troubleshooting

### Common Mistakes to Avoid

**Overcooking**: Mushy grains create anaerobic conditions that favor contamination
**Insufficient sterilization**: Leads to bacterial or mold contamination
**Excess moisture**: Creates favorable conditions for unwanted microorganisms

This grain preparation technique forms the backbone of substrate preparation. Master this process, and you'll have consistent, reliable spawn for all your mushroom cultivation projects!`
  },
  'agar-plate-preparation': {
    slug: 'agar-plate-preparation',
    title: "Agar Plate Preparation and Storage",
    difficulty: "Beginner",
    time: "2-3 hours",
    description: "Learn to prepare nutrient-rich agar plates for mushroom tissue culture, spore germination, and contamination testing.",
    materials: ["Agar powder", "Malt extract or potato dextrose", "Petri dishes", "Pressure cooker", "Still air box or flow hood", "Parafilm or plastic wrap"],
    content: `# Agar Plate Preparation and Storage

Agar plates are the foundation of advanced mushroom cultivation, allowing for tissue culture, spore isolation, and contamination detection. This technique will teach you to prepare professional-quality plates using basic equipment.

## What You'll Need

### Base Ingredients
- **Agar powder**: 20g (2% concentration)
- **Malt extract**: 20g OR potato dextrose: 24g
- **Distilled water**: 1000ml (1 liter)

### Equipment
- **Petri dishes**: 50-100 plastic disposable dishes
- **Pressure cooker**: For sterilization
- **Measuring tools**: Digital scale, graduated cylinder

## Step-by-Step Process

### 1. Workspace Preparation

Create the cleanest possible environment:
- Clean all surfaces with 70% isopropyl alcohol
- Wipe down all equipment and containers
- If using a still air box, allow 30 minutes for air to settle

### 2. Measuring and Mixing

**Dry Mix Method** (Recommended for beginners):
1. Measure 20g agar powder into clean container
2. Add 20g malt extract (or 24g potato dextrose)
3. Gradually add 100ml distilled water while stirring
4. Continue stirring until smooth paste forms
5. Slowly add remaining 900ml water while mixing

### 3. Sterilization and Pouring

Process at 15 PSI for 20 minutes, then cool to 50-60°C before pouring into sterile petri dishes.

## Applications

### Spore Germination
Use fresh plates with standard MEA (Malt Extract Agar) for germinating spores from prints or syringes.

### Tissue Culture
Isolate mushroom tissue from fresh specimens to create pure cultures for propagation.

Mastering agar preparation opens up advanced cultivation techniques and gives you complete control over your mushroom genetics!`
  },
  'shoebox-fruiting-chamber': {
    slug: 'shoebox-fruiting-chamber',
    title: "Shoebox Fruiting Chamber Setup",
    difficulty: "Beginner",
    time: "1-2 hours",
    description: "Build an effective and affordable fruiting chamber using a clear storage container to create optimal conditions for mushroom development.",
    materials: ["Clear storage container", "Perlite", "Spray bottle", "Drill with bits", "Aluminum foil", "Hygrometer", "Timer"],
    content: `# Shoebox Fruiting Chamber Setup

The shoebox fruiting chamber is the perfect entry point into controlled mushroom cultivation. This simple but effective setup creates the high humidity and fresh air exchange necessary for mushroom development.

## What You'll Need

### Container and Base
- **Clear storage container**: 12-20 quart capacity with tight-fitting lid
- **Perlite**: 4-5 pounds, medium grade (horticultural perlite)
- **Aluminum foil**: Heavy-duty recommended

### Tools and Monitoring
- **Drill**: With 1/4" and 1/16" bits
- **Spray bottle**: Fine mist setting
- **Hygrometer**: Digital preferred for accurate readings

## Step-by-Step Process

### 1. Container Preparation

Clean the storage container thoroughly:
- Wash with dish soap and hot water
- Rinse completely to remove soap residue
- Wipe down with 70% isopropyl alcohol

### 2. Air Exchange Holes

Proper air circulation prevents carbon dioxide buildup:

**Side holes**: Drill 4-6 holes, 1/4" diameter
- Position 2-3 inches from bottom
- Space evenly around container perimeter

**Lid holes**: Drill 6-8 holes, 1/16" diameter
- Create small holes for subtle air exchange
- Distribute evenly across lid surface

### 3. Perlite Bed Preparation

The perlite bed provides humidity reservoir:
1. **Rinse perlite** in colander until water runs clear
2. **Hydrate fully** – perlite should be dripping wet but not pooled
3. **Layer 3-4 inches** in bottom of container

## Operation and Maintenance

### Daily Misting Protocol

**Frequency**: 2-3 times daily, more in dry conditions
**Technique**: 
- Mist walls and lid, not directly on substrate
- Use fine spray setting
- Maintain visible water droplets on surfaces

The shoebox fruiting chamber provides an excellent learning platform for understanding mushroom environmental needs. Start simple, observe closely, and gradually optimize based on your specific growing conditions!`
  }
};

export async function getAllTeks(): Promise<TekTutorial[]> {
  return Object.values(teksData);
}

export async function getTek(slug: string): Promise<TekTutorial | null> {
  return teksData[slug] || null;
}

export async function getAllTekSlugs(): Promise<string[]> {
  return Object.keys(teksData);
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Advanced':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}
