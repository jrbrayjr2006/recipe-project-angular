import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  selectedRecipeId: number;
  editMode: boolean = false;
  defaultSubscription: string;
  formIsValid: boolean = true;

  recipeFormReactive: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipesService) {}

  ngOnInit(): void {
    //
    this.selectedRecipeId = +this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.selectedRecipeId = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
        console.log("Are we in edit mode: " + this.editMode);
      }
    )
    this.defaultSubscription = "2";
  }

  get controls() {
    return (<FormArray>this.recipeFormReactive.get('recipeIngredients')).controls;
  }

  get ingredientArray(): FormArray {
    return this.recipeFormReactive.get('recipeIngredients') as FormArray;
  }

  ingredientSection(form: FormGroup) {
    return new FormGroup({});
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredients: FormArray = new FormArray([]); 

    if(this.editMode) {
      const recipe = this.recipeService.getRecipeByIndex(this.selectedRecipeId);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          console.log("ingredient name " + ingredient.name);
          recipeIngredients.push(
            new FormGroup({
              'ingredientName': new FormControl(ingredient.name),
              'ingredientAmount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeFormReactive = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'recipeImagePath': new FormControl(recipeImagePath),
      'recipeDescription': new FormControl(recipeDescription),
      'recipeIngredients': recipeIngredients
    });
  }

  onAddIngredient() {
    console.debug('adding ingredient to recipe...');
  }

  onSubmit() {
    console.log("submit recipe data...");
    console.log(this.recipeFormReactive.value)
  }

}
