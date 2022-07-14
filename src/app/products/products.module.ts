import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './Components/products/products.component';
import { DetailsComponent } from './Components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
    ,SharedModule
   
    
  ]
  ,exports:[ProductsComponent]
})
export class ProductsModule { }
