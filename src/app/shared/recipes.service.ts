import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Grandma Zucchini Bread Recipe', 
      "My grandma's zucchini bread recipe is a top-secret family recipe! This spiced moist bread uses dates for a delicious change from ordinary zucchini bread. We like to spread warm slices with softened cream cheese for an extra-special treat.", 
      'https://www.allrecipes.com/thmb/msnH4OeZ6m9dXZIk7nHEqMn9t6I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/147954grandmas-best-zucchini-breadTammyLynn4x3-5fe8c7dcdb34415f9ff227523f801e3c.jpg', 
      [
        new Ingredient('flour', 3),
        new Ingredient('zucchini', 1),
        new Ingredient('baking soda', 1),
        new Ingredient('baking powder', 1),
        new Ingredient('eggs', 3)
      ]),
    new Recipe('Zeppole Recipe', 
      'This is the second recipe', 
      'https://www.allrecipes.com/thmb/2JCp2vh3mJc1jpiM8zE54MnN-s8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1590659-c3abea2f8ea44a288d6f51688fed7f70.jpg', 
      [
        new Ingredient('vegetable oil', 2),
        new Ingredient('flour', 1)
      ]),
    new Recipe('Grandma Apple Pie Recipe', 
      'This amazing apple pie recipe belonged to my grandmother. I have never seen another one quite like it! It will always be my favorite and has won several first place prizes in local competitions. It makes the perfect dessert for family dinners or during the holidays, topped with whipped cream or ice cream, or alongside a slice of Cheddar cheese.', 
      'https://www.allrecipes.com/thmb/y4A1u56wlxTpMexUFWXQxNyZz8k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Screen-Shot-2022-01-30-at-8.33.07-PM-9fbdb6fefa41482d8a1dc1f56266d8fb.png', 
      [
        new Ingredient('apples', 8),
        new Ingredient('flour', 3),
        new Ingredient('unsalted butter', 0.5),
        new Ingredient('sugar', 0.5)
      ]),
      new Recipe('Churro Cheesecake Bars',
      'Churros meet cheesecake in these delicious churro cheesecake bars. Store-bought crescent dough is filled with a cinnamony cream cheese mixture and topped with cinnamon sugar. Serve with Mexican cajeta for extra caramel flavor.',
      'https://www.allrecipes.com/thmb/164Lk9BNB1WzoZ5YZixOIJPWXjQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7554374-churro-cheesecake-bars-mfs-3x4-1959-7315844f37c24488879440c9949d2eb1.jpg', 
      [
        new Ingredient('sugar', 1),
        new Ingredient('cinnamon', 1),
        new Ingredient('egg', 1)
      ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByIndex(recipeIndex: number): Recipe {
    let recipe = this.recipes[recipeIndex];
    console.log("getting " + recipe.name);
    return recipe;
  }

  addRecipe(recipe: Recipe) {
    console.log('adding new recipe...');
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  updateRecipe(index: number, updatedRecipe: Recipe) {
    console.log('updating an existing recipe...');
    this.recipes[index] = updatedRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    console.log('deleting recipe...');
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
