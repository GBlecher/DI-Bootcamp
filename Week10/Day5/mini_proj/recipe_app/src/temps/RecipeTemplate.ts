import RecipeCollection  from "../model/RecipeCollection";
import Recipe from "../model/RecipeItem";

class RecipeTemplate {
  private recipeContainer: HTMLElement;
  private recipeCollection: RecipeCollection ;
  constructor(recipeCollection: RecipeCollection ) {
    this.recipeCollection = recipeCollection;
    this.recipeContainer = document.getElementById(
      "recipeContainer"
    ) as HTMLElement;
    this.renderRecipes();
  }
  public renderRecipes(): void {
    this.recipeContainer.innerHTML = "";

    this.recipeCollection.recipes.forEach((recipe) => {
      const recipeCard = this.createRecipeCard(recipe);
      this.recipeContainer.appendChild(recipeCard);
    });
  }
  private createRecipeCard(recipe: Recipe): HTMLElement {
    const card = document.createElement("div");
    card.className = "recipeCard";

    const title = document.createElement("h2");
    title.textContent = recipe.title;

    const ingredientsList = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });

    const instructions = document.createElement("p");
    instructions.textContent = recipe.instructions;
    instructions.style.display = "none";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Show/Hide Instructions";
    
    toggleBtn.onclick = () => {
      instructions.style.display =
        instructions.style.display === "none" ? "block" : "none";
    };

    const favoriteBtn = document.createElement("button");
    favoriteBtn.textContent = recipe.isFavorite ? "Unfavorite" : "Favorite";
    favoriteBtn.onclick = () => {
      this.recipeCollection.toggleFavorite(recipe.getId());
      this.renderRecipes();
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      this.recipeCollection.removeRecipe(recipe.getId());
      this.renderRecipes();
    };

    card.appendChild(title);
    card.appendChild(ingredientsList);
    card.appendChild(instructions);
    card.appendChild(toggleBtn);
    card.appendChild(favoriteBtn);
    card.appendChild(deleteBtn);

    return card;
  }
  
}

export default RecipeTemplate;
