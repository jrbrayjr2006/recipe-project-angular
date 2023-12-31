import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Output('selectedRecipe') selectedRecipe: Recipe;

  constructor() {}
 
  ngOnInit(): void {
    console.log("ngOnInit called!");
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.selectedRecipe = recipeItem;
  }

}
