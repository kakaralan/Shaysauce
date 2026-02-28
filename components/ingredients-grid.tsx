import IngredientCard from './ingredient-card';

const ingredients = [
  {
    emoji: '🌶️',
    title: 'Red Habanero',
    description: 'Fresh, hand-picked peppers for maximum flavor'
  },
  {
    emoji: '🍎',
    title: 'Apple Cider Vinegar',
    description: 'Adds tang and preserves freshness naturally'
  },
  {
    emoji: '🧄',
    title: 'Garlic',
    description: 'Rich, savory depth of flavor'
  },
  {
    emoji: '🧂',
    title: 'Sea Salt',
    description: 'Pure, mineral-rich seasoning'
  },
  {
    emoji: '🍋',
    title: 'Lime Juice',
    description: 'Bright citrus notes to balance the heat'
  }
];

export default function IngredientsGrid() {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-8">What's Inside</h3>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.title} {...ingredient} />
        ))}
      </div>
    </div>
  );
}
