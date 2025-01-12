import { v4 as uuidv4 } from "uuid";
class Recipe {
  private id: string;
  public title: string;
  public ingredients: string[];
  public instructions: string;
  public isFavorite: boolean;

  constructor(
    title: string,
    ingredients: string[],
    instructions: string,
    isFavorite: boolean = false
  ) {
    this.id = uuidv4();
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.isFavorite = isFavorite;
  }
  
  public getId(): string {
    return this.id;
  }
  public setId(id:string):void {
    this.id = id
  }
}

export default Recipe;
