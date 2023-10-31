import React, { useState, useEffect } from 'react';

// Define a function to fetch meal ideas from the API
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; // Return an empty array if no meals are found
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return []; // Return an empty array in case of an error
  }
};

const MealIdeasComponent = ({ ingredient }) => {
  // Define a state variable to hold the list of meal ideas
  const [meals, setMeals] = useState([]);

  // Define a function to load meal ideas based on the ingredient
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Use useEffect to load meal ideas whenever the ingredient prop changes
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  // Define the component's render method
  return (
    <div>
      <h1>Meal Ideas for {ingredient}</h1>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeasComponent;
