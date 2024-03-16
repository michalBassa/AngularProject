import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CategoryModule } from '../../models/category/category.module';
import { CategoryService } from '../../services/category.service';
import { RecipeService } from '../../services/recipe.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
// ... other imports

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  constructor (private _categoryService : CategoryService,private _recipeService:RecipeService,private _formBuilder: FormBuilder,private router :Router ){}
  public addRecipeForm!: FormGroup;
  public CategoryList:CategoryModule[]=[]
  ingredients: string[] = [];
  instructions: string[] = [];
  ngOnInit(): void {
    if(!sessionStorage.getItem('password'))
    {Swal.fire({
      icon: "error",
      title: "אין לך הרשאה...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    })
      this.router.navigate(['login'])
  }
    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.CategoryList = res
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.addRecipeForm = new FormGroup({
      "id": new FormControl("", [Validators.required]),
      "name": new FormControl("",[Validators.required]),
      "selectedCategory":new FormControl("category"),
      "preparationTime": new FormControl("", [Validators.required]),
      "level": new FormControl("1", [Validators.required,Validators.min(1),Validators.max(5)]),
      "date":new FormControl(new Date().getDate(), [Validators.required]),
       ingredients: this._formBuilder.array([this._formBuilder.control('')]),
       instructions: this._formBuilder.array([this._formBuilder.control('')]),
      "userId": new FormControl("", [Validators.required]),
      "img": new FormControl("", [Validators.required]),
       
      
      
    })
  }

  get ingredientsArray() {
    return this.addRecipeForm.get('ingredients') as FormArray;
  }

  get instructionsArray() {
    return this.addRecipeForm.get('instructions') as FormArray;
  }

  
addIngredient() {
  const lastControl = this.ingredientsArray.at(this.ingredientsArray.length - 1);
  if (lastControl.value.trim() !== '') {
    this.ingredientsArray.push(this._formBuilder.control(''));
  }
}

addPreparationStep() {
  const lastControl = this.instructionsArray.at(this.instructionsArray.length - 1);
  if (lastControl.value.trim() !== '') {
    this.instructionsArray.push(this._formBuilder.control(''));
  }
}

removeEmptyIngredients() {
  for (let i = this.ingredientsArray.length - 1; i >= 0; i--) {
    if (this.ingredientsArray.at(i).value.trim() === '') {
      this.ingredientsArray.removeAt(i);
    }
  }
}

removeEmptyPreparationSteps() {
  for (let i = this.instructionsArray.length - 1; i >= 0; i--) {
    if (this.instructionsArray.at(i).value.trim() === '') {
      this.instructionsArray.removeAt(i);
    }
  }
 }
 saveRecipe(){
    
    this._recipeService.addRecipe(this.addRecipeForm.value).subscribe({
      next: (res) => {
        Swal.fire({
                  title: "Thank you!",
                  text: "The recipe was successfully added!",
                  icon: "success"
                })
      this.router.navigate(["recipe/recipes"])
      },
      error(err) {
        console.log(err)
      },
    })
  }
}



