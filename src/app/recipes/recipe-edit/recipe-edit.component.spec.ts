import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditComponent } from './recipe-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

describe('RecipeEditComponent', () => {
  let component: RecipeEditComponent;
  let fixture: ComponentFixture<RecipeEditComponent>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: { data: {} },
      params: { subscribe: (params) => {
        params['id'] = 1;
      } }
    } as ActivatedRoute;

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RecipeEditComponent],
      providers: [
        {provide: ActivatedRoute, userValue: activatedRouteStub}
      ]
    });
    fixture = TestBed.createComponent(RecipeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
