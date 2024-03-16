import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../models/recipe/recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private _http:HttpClient) { }
  getRecipesList(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>('https://localhost:7229/recipe')
  }
  
  getRecipeById(id: number): Observable<Recipe> {
    return this._http.get<Recipe>(`https://localhost:7229/recipe/id?id=${id}`)
  }
  
  addRecipe(recipe:Recipe){
    return this._http.post('https://localhost:7229/recipe/Add_Recipe',recipe)
  }
  deleteRecipeById(id: number): Observable<Recipe> {
    return this._http.delete<Recipe>(`https://localhost:7229/recipe/id?id=${id}`)
  }
  putRecipeById(recipe:Recipe): Observable<Recipe> {
    return this._http.put<Recipe>(`https://localhost:7229/recipe/id?id=${recipe.id}`,recipe)
  }
}

