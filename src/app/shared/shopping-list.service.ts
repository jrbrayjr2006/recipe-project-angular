import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // when a new ingredient is added, emit the Ingredient object to update all copies of the list.
    this.ingredientChanged.next(this.ingredients);
  }

  addListOfIngredients(ingredientList: Ingredient[]) {
    console.log("addListOfIngredients called");
    this.ingredients.push(...ingredientList);
    this.ingredientChanged.next(this.ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    console.log('updating the selected ingredient...');
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    console.log('deleting ingredient from list...');
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
