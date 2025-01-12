import Recipe from "./model/RecipeItem";
import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./temps/RecipeTemplate";

const recipeCollection = new RecipeCollection();
const recipeTemplate = new RecipeTemplate(recipeCollection);


const recipeEntryForm = document.getElementById("recipeEntryForm") as HTMLFormElement;

recipeEntryForm.onsubmit = (event) => {
    event.preventDefault(); 
    const titleInput = document.getElementById("recipeTitle") as HTMLInputElement;
    const ingredientsInput = document.getElementById("ingredients") as HTMLTextAreaElement;
    const instructionsInput = document.getElementById("instructions") as HTMLTextAreaElement;

    
    const ingredients = ingredientsInput.value.split('\n').map(ingredient => ingredient.trim()).filter(Boolean);

    
    const newRecipe = new Recipe(titleInput.value, ingredients, instructionsInput.value);
    recipeCollection.addNewRecipe(newRecipe);

    
    titleInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';

    
    recipeTemplate.renderRecipes();
};


const clearRecipesButton = document.getElementById("clearRecipesButton") as HTMLButtonElement;
clearRecipesButton.onclick = () => {
    localStorage.clear(); 
    recipeCollection.recipes = []; 
    recipeTemplate.renderRecipes(); 
};