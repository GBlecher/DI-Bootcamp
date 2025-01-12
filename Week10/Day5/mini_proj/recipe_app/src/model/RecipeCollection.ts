import Recipe from "./RecipeItem";

class RecipeCollection  {
  public recipes: Recipe[];
  constructor() {
    this.recipes = [];
    this.load();
  }

  public addNewRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.save();
  }
  public removeRecipe(id: string) {
    this.recipes = this.recipes.filter((recipe) => recipe.getId() !== id);
  }
  public toggleFavorite(id: string) {
    const recipe = this.recipes.find((recipe) => recipe.getId() === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.save();
    }
  }
  public save(): void {
    const recipesJson = JSON.stringify(this.recipes);
    localStorage.setItem("recipes", recipesJson);
  }
  public load(): void {
    const recipesJson = localStorage.getItem("recipes");
    if (recipesJson) {
      const parsedRecipes = JSON.parse(recipesJson);
      this.recipes = parsedRecipes.map((recipesData: any) => {
        const recipe = new Recipe(
          recipesData.title,
          recipesData.ingredients,
          recipesData.instructions,
          recipesData.isFavorite
        );
        recipe.setId(recipesData.id);
        return recipe;
      });
    }
  }
}
export default RecipeCollection ;
