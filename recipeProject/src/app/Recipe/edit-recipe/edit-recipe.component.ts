import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoryService } from '../../services/category.service';
import { RecipeService } from '../../services/recipe.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryModule } from '../../models/category/category.module';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe/recipe.module';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent {
  constructor (private route:ActivatedRoute,private _recipeService:RecipeService,private formBuilder: FormBuilder,private _formBuilder: FormBuilder,private router :Router ,private _reciprService:RecipeService, private _categoryService : CategoryService,private _userService:UserService ){}
  public editRecipeForm!: FormGroup;
   public categoryList:CategoryModule[]=[];
  public recipe!: Recipe
  public byId!:number
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
  this.editRecipeForm = this.formBuilder.group({
    recipeName: ['', Validators.required],
     categoryCode: ['', Validators.required],
    preparationTimeInMinutes: ['', Validators.required],
    difficultyLevel: ['', Validators.required],
    ingredients: ['', Validators.required],
    preparationSteps: ['', Validators.required]
  });
    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
         this.categoryList = res
      },
      error: (err) => {
        console.log(err);
      }
    })
    this.route.params.subscribe(param=>{
      this.byId=param['id'] })
      this._reciprService.getRecipeById(this.byId).subscribe({
        next: (res) => {
          this.recipe = res
          this.editRecipeForm.setValue({
            recipeName: this.recipe.name,
             categoryCode: this.recipe.categoryId,
            preparationTimeInMinutes: this.recipe.preparationTime,
            difficultyLevel: this.recipe.level,
            ingredients: this.recipe.ingredients.join(', '), // assuming ingredients is an array
            preparationSteps: this.recipe.instructions.join('\n') // assuming preparationSteps is an array
          });
          this.byId=res.categoryId
        },
        error: (err) => {
          console.log(err);
        }
      })
      this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        
       //   this.categoryList = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  saveChanges(){
    Swal.fire({
      title: 'האם אתה בטוח?',
      text: 'האם ברצונך לשמור את השינויים?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'כן, שמור שינויים',
      cancelButtonText: 'לא, בטל',
      reverseButtons: true,
      confirmButtonColor: '#FF69B4',
      cancelButtonColor: '#FFFFFF',
      background: '#FFFFFF'
    }).then((result) => {
      if (result.isConfirmed) {
        // המשתמש בחר לשמור את השינויים
        if (this.editRecipeForm.valid) {
          
            this.recipe = {
              ...this.recipe,
              id: this.byId,
              name: this.editRecipeForm.value.recipeName,
              categoryId: this.editRecipeForm.value.categoryCode,
              preparationTime: this.editRecipeForm.value.preparationTimeInMinutes,
              level: this.editRecipeForm.value.difficultyLevel,
              ingredients: this.editRecipeForm.value.ingredients.split(','),
              instructions: this.editRecipeForm.value.preparationSteps.split('\n')
            }
  
          this._recipeService.putRecipeById(this.recipe)
            .subscribe(() => {
              Swal.fire({
                title: 'המתכון עודכן בהצלחה!',
                text: 'המתכון עודכן בהצלחה',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                background: '#FFFFFF',
                iconColor: '#FF69B4'
              }).then(() => {
                this.router.navigate(['/recipe/recipes']); // Redirect to recipes list page
              });
            });
        } else {
          Swal.fire({
            title: 'שגיאה!',
            text: 'הטופס לא תקין',
            icon: 'error',
            confirmButtonColor: '#FF69B4',
            background: '#FFFFFF'
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // המשתמש בחר לבטל את הפעולה
      }
    })
}
}

