import MealsItem from "./MealsItem";

export default function MealsGrid({ meals }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {meals.map((meal) => (
        <li key={meal.id} className="list-none">
          <MealsItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
