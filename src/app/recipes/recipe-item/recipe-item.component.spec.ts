import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from '../recipe.model';

describe('RecipeItemComponent', () => {
  let component: RecipeItemComponent;
  let fixture: ComponentFixture<RecipeItemComponent>;
  const fakeRecipeItem = new Recipe("recipe", "description", "", []);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeItemComponent],
    });
    fixture = TestBed.createComponent(RecipeItemComponent);
    component = fixture.componentInstance;
    component.recipe = fakeRecipeItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
