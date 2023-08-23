import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponent } from './recipe-list.component';
import { RecipesService } from 'src/app/shared/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let recipeService: RecipesService;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(() => {
    let recipeServiceSpy = jasmine.createSpyObj('RecipesService', ['getRecipes']);
    const activatedRouteStub = {};
    const routerStub = {};
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RecipeListComponent, RecipeItemComponent],
      providers: [
        { provide: recipeService, useValue: recipeServiceSpy },
        { provide: ActivatedRoute, useValue:activatedRouteStub},
        { provide: Router, useValue: routerStub}
      ]
    });
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    component.recipes = [new Recipe("", "", "", [])];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
