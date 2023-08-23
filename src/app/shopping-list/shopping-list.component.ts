import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private shoppingListSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    console.log("ngOnInit called and ingredients populated");
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListSubscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredientsChanged) => {
        this.ingredients = ingredientsChanged;
      }
    );
  }

  onEditItem(id: number) {
    console.log('Edit ingredient ' + id);
    this.shoppingListService.startedEditing.next(id);
  }

  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }

}
