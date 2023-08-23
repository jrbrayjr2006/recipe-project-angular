import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEditComponent } from './shopping-list-edit.component';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { FormsModule, NgForm } from '@angular/forms';

describe('ShoppingListEditComponent', () => {
  let component: ShoppingListEditComponent;
  const mockShoppingListService = {};
  let fixture: ComponentFixture<ShoppingListEditComponent>;
  let shoppingEditForm = <NgForm>{};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ShoppingListEditComponent],
      providers: [
        {provide: ShoppingListService, useValue: mockShoppingListService}
      ]
    });
    fixture = TestBed.createComponent(ShoppingListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
