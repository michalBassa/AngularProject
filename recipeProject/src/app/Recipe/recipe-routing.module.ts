import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { DetailsRecipeComponent } from './details-recipe/details-recipe.component';
import { recipeGuard } from './recipe.guard';

const recipeRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: AllRecipesComponent },
  { path: 'recipe-details/:id', component: DetailsRecipeComponent, canActivate: [recipeGuard] },
  { path: 'edit-recipe/:id', component: EditRecipeComponent , canActivate: [recipeGuard] },
  { path: 'smallRecipe/:recipe', component: SmallRecipeComponent , canActivate: [recipeGuard] },
  { path: 'add-recipe', component: AddRecipeComponent },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }