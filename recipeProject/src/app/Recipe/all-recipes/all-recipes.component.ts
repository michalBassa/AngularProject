import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe/recipe.module';
import { CommonModule } from '@angular/common';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
import { CategoryModule } from '../../models/category/category.module';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [CommonModule, SmallRecipeComponent, ReactiveFormsModule],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.scss'
})
export class AllRecipesComponent {
  public recipesList: Recipe[] = []
  public recipesListFilter: Recipe[] = []
  public categoryList: CategoryModule[] = []
  public filterForm!: FormGroup;
  public inputCategory: FormControl = new FormControl("");
  public selectedCategory: FormControl = new FormControl(0);
  constructor(private _recipeService: RecipeService, private _CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      inputCategory: this.inputCategory,
      selectedCategory: this.selectedCategory
    })
    this.selectedCategory.valueChanges.subscribe((value: number) => {
      this.recipesListFilter = this.recipesList.filter(x => x.categoryId == value) 
      
      if(value == 0)
      this.recipesListFilter = this.recipesList;
    });
    this.inputCategory.valueChanges.subscribe((value: string) => {
      this.recipesListFilter = this.recipesList.filter(x => x.name.includes(value))
    });

    this._recipeService.getRecipesList().subscribe({
      next: (res) => {
        this.recipesList = res;
        this.recipesListFilter = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
    this._CategoryService.getCategoryList().subscribe({
      next: (res) => {
        if (res) {
          res.unshift({ id: 0, name: "הכל", iconPath: "" })
          this.categoryList = res
        }
      },
      error: (err) => {
        console.log(err);
      }
    })


  }


}
