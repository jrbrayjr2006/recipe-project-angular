import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Recipe } from './recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;
  const mockRecipeItem: Recipe = new Recipe("some recipe", "description", "http://localhost", []);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RecipesComponent, RecipeListComponent],
      providers: [
        {provide: RecipeListComponent, userValue: {provide: Recipe, useValue: mockRecipeItem}},
        {provide: RecipeItemComponent}
        
      ]
    });
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
