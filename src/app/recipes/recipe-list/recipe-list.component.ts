import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  private recipeSubscription: Subscription;

  constructor(private recipesService: RecipesService, private activedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipeSubscription = this.recipesService.recipeChanged.subscribe(
      (recipesChanged) => {
        this.recipes = recipesChanged;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activedRoute});
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }

}
 