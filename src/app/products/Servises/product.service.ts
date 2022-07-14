import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http' ;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _Http:HttpClient) { }

  //to get all data
  getAllProducts(){
    //return
    return this._Http.get('https://fakestoreapi.com/products');
  }
  //get all categories
  getAllCategories(){
    return this._Http.get('https://fakestoreapi.com/products/categories');
  }
  getCategory(categorayName:string){
    return this._Http.get(`https://fakestoreapi.com/products/category/${categorayName}`)
  }
}
