import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';
import { Recipe } from '../recipes/recipe.model';

describe('RecipesService', () => {
  let service: RecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all recipes', () => {
    let recipes: Recipe[];
    recipes = service.getRecipes();
    expect(recipes.length).toBe(3);
  });

  it('should get recipe by index', () => {
    let selectedRecipe: Recipe;
    selectedRecipe = service.getRecipeByIndex(0);
    expect(selectedRecipe.name).toBe('Grandma Zucchini Bread Recipe');
  });
});
