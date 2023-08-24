import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('default recipe', 'default description', 'https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&w=1600', []);
  recipeIndex: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipesService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipeIndex = this.activatedRoute.snapshot.params['id'];
    console.log("The recipe index is " + this.recipeIndex);
    this.recipe = this.recipeService.getRecipeByIndex(this.recipeIndex);

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipeByIndex(+params['id']);
      }
    );
  }

  onAddIngredientsToShoppingList() {
    console.log("onAddIngredientsToShoppingList called");
    this.shoppingListService.addListOfIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    console.debug('on delete recipe...');
    this.recipeService.deleteRecipe(this.recipeIndex);
  }

}
