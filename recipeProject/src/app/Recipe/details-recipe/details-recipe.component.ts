import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe/recipe.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CategoryService } from '../../services/category.service';
import { CategoryModule } from '../../models/category/category.module';
import { UserService } from '../../services/user.service';
import { HoursAndMinutesPipe } from '../../hours-and-minutes.pipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-recipe',
  standalone: true,
  imports: [CommonModule,HoursAndMinutesPipe],
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.scss'
})
export class DetailsRecipeComponent implements OnInit{
  public recipe!: Recipe
  constructor(private route:ActivatedRoute,private _reciprService:RecipeService, private _categoryService : CategoryService,private _userService:UserService, private router:Router ){}
  public byId!:number
  public name!:string
  public category!:CategoryModule
  public isUser:Boolean=false
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
    const name = sessionStorage.getItem("name");
    this.route.params.subscribe(param=>{
      this.byId=param['id'] 
    })
      this._reciprService.getRecipeById(this.byId).subscribe({
        next: (res) => {
          this.recipe = res
          this.byId=res.categoryId
        },
        error: (err) => {
          console.log(err);
        }
      })
      this._categoryService.getCategoryById(this.byId).subscribe({
      next: (res) => {
        this.category = res
        this.byId=this.recipe.userId
      },
      error: (err) => {
        console.log(err);
      }
    })

    this._userService.getUserById( this.byId).subscribe({
      next: (res) => {    

        if(res.password==sessionStorage.getItem('password'))
          this.isUser=true
          this.byId=this.recipe.id
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  delete(){
    alert("try")
    this._reciprService.deleteRecipeById(this.byId).subscribe({
      next: (res) => {
  this.router.navigate(['recipe/recipes'])
      },
      error: (err) => {
        alert(err)
      }
    })
  }
  edit(){
    this.router.navigate(['/recipe/edit-recipe',this.recipe.id])

  }
}
