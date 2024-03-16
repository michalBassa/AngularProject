import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModule } from '../models/user/user.module';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { log } from 'console';
import { Recipe } from '../models/recipe/recipe.module';
import { RecipeModule } from '../Recipe/recipe/recipe.module';
import { cwd } from 'process';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  login(name: string, password: string) {
    return this._http.post('https://localhost:7229/user/Login', { name, password });
  }
  register(user: UserModule) {
    return this._http.post('https://localhost:7229/user/Register', user);
  }
  getUserById(id: number): Observable<UserModule> {
    return this._http.get<UserModule>(`https://localhost:7229/user/id?id=${id}`)
  }
}

