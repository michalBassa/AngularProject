import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe/recipe.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HoursAndMinutesPipe } from '../../hours-and-minutes.pipe';

@Component({
  selector: 'app-small-recipe',
  standalone: true,
  imports: [CommonModule,HttpClientModule,HoursAndMinutesPipe],
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})
export class SmallRecipeComponent {
  @Input() 
  recipe!: Recipe
  constructor( private router: Router) { }
  showAllDetails()
  {
    this.router.navigate(['/recipe/recipe-details',this.recipe.id]);
  }
 
}
