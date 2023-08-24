import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from 'src/app/shared/recipes.service';
import { Recipe } from '../recipe.model';
import { Subject } from 'rxjs';

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

  /**
   * This is an alternative method of getting the controls
   */
  // get ingredientArray(): FormArray {
  //   return this.recipeFormReactive.get('recipeIngredients') as FormArray;
  // }

  get controls() {
    return (<FormArray>this.recipeFormReactive.get('recipeIngredients')).controls;
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
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeFormReactive = new FormGroup({
      'recipeName': new FormControl(recipeName, Validators.required),
      'recipeImagePath': new FormControl(recipeImagePath, Validators.required),
      'recipeDescription': new FormControl(recipeDescription, Validators.required),
      'recipeIngredients': recipeIngredients
    });
  }

  onAddIngredient() {
    console.log('adding ingredient to recipe...');
    console.log(this.controls);
    // note:  the names of the elements of the FormGroup need to match what is defined in the other components
    (<FormArray>this.recipeFormReactive.get('recipeIngredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onSubmit() {
    console.log("submit recipe data...");
    console.log(this.recipeFormReactive.value)
    const recipeValue = this.recipeFormReactive.value;
    const newRecipe: Recipe = new Recipe(
      recipeValue['recipeName'],
      recipeValue['recipeDescription'],
      recipeValue['recipeImagePath'],
      recipeValue['recipeIngredients']);
    
    console.log(newRecipe);
    if(this.editMode) {
      this.recipeService.updateRecipe(this.selectedRecipeId, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }

  onCancel() {
    this.editMode = false;
    this.recipeFormReactive.reset();
  }

}
