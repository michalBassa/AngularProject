import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModule } from '../models/category/category.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient) { }
  getCategoryList(): Observable<CategoryModule[]> {
    return this._http.get<CategoryModule[]>('https://localhost:7229/Category')
  }
  getCategoryById(id:number):Observable<CategoryModule>{
    return this._http.get<CategoryModule>(`https://localhost:7229/Category/id?id=${id}`)
  }
  
}
