import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { RecipesService } from 'src/app/shared/recipes.service';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Recipe } from '../recipe.model';

describe('RecipeDetailComponent', () => {
  let component: RecipeDetailComponent;
  let fixture: ComponentFixture<RecipeDetailComponent>;
  const mockShoppingListService = {addListOfIngredients: (ingredients) => {}};
  const mockRecipesService = {getRecipeByIndex: (index) => {
    return new Recipe("", "", "", []);
  }};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RecipeDetailComponent],
      providers: [
        {provider: ShoppingListService, userValue: mockShoppingListService},
        {provider: RecipesService, userValue: mockRecipesService},
        {provider: RouterTestingModule}
      ]
    });
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send items to shopping list', () => {
    //TODO add test here
  });
});
