import { Injectable } from '@angular/core';
import { CategoryDetail } from './category-detail.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailService {

  constructor(private http: HttpClient) { } 

  formData:CategoryDetail = new CategoryDetail(); 
  readonly baseURL = 'http://localhost:51549/api/Categories'
  list: CategoryDetail[];

  postCategoryDetail(){
    return this.http.post(this.baseURL,this.formData)
  }

  putCategoryDetail(){
    return this.http.put('${this.baseURL}/${this.formData.categoryId}',this.formData);
  }

  deleteCategoryDetail(id: number){
    return this.http.delete('${this.baseURL}/${id}');
  }

  refreshList(){
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as CategoryDetail[])
  }

}
