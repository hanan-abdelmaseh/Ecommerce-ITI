import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Servises/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList:any[]=[] ;
categoryList:any[]=[];
loading:boolean= false;
constructor(private _ProductService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }
  getProducts(){
    this.loading= true;
    this._ProductService.getAllProducts().subscribe((res:any)=>{
        
         this.productList= res ;
         this.loading=false;
    });
  }
  getAllCategory(){
    this.loading=true;
    this._ProductService.getAllCategories().subscribe((cat:any)=>{
        console.log(cat);
        console.log('hello');
      this.categoryList= cat ;
      this.loading=false;
 });
  }
  getFilter(event:any){
   let filterValue = event.target.value;
  if(filterValue == 'all'){
    this.getProducts();
  }
  else{
    this.getCategory(filterValue);
  }
   
  }
  getCategory(name:string){
    this.loading= true;
    this._ProductService.getCategory(name).subscribe((filterItem:any)=>{
      this.productList= filterItem ;
      this.loading=false;
    });
  }
}
