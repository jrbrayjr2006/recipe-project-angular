import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    new Recipe('Grandma Zucchini Bread Recipe', 
      'A sample first recipe', 
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
      'The last sample recipe', 
      'https://www.allrecipes.com/thmb/On2gfB1skhCgBo7bRUSiSSy4qzM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/736203-apple-pie-by-grandma-ople-photo-by-holiday-baker-c2f762a393084f3da24d26b61f875801.jpg', 
      [
        new Ingredient('apples', 8),
        new Ingredient('flour', 3),
        new Ingredient('unsalted butter', 0.5),
        new Ingredient('sugar', 0.5)
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
}
