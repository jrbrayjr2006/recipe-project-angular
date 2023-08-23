import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  // @Output('ingredientItem') ingredientItem: EventEmitter<Ingredient> = new EventEmitter<Ingredient>(); 
  shopplingItemSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  
  @ViewChild('shoppingListForm') shoppingListForm: NgForm;

  // @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  // @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.debug('ngOnInit called');
    this.shopplingItemSubscription = this.shoppingListService.
        startedEditing.
        subscribe(
          (id: number) => {
            this.editMode = true;
            this.editedItemIndex = id;
            this.editedItem = this.shoppingListService.getIngredient(id);
            this.shoppingListForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          }
        );
  }

  onAddToShoppingList(slf: NgForm): void {
    console.log('onAddToShoppingList called...');
    const formValue = slf.value;
    console.log(formValue);
    const newIngredient: Ingredient = new Ingredient(formValue.name, formValue.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClearForm();
  }

onDelete() {
  console.log('request deletion of ingredient from list...');
  this.shoppingListService.deleteIngredient(this.editedItemIndex);
  this.onClearForm();
}

  onClearForm(): void {
    console.log("clear all data from shopping list form...");
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(): void {
    this.shopplingItemSubscription.unsubscribe();
  }

}
