import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './Components/products/products.component';
import { DetailsComponent } from './Components/details/details.component';



@NgModule({
  declarations: [
    ProductsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports:[ProductsComponent]
})
export class ProductsModule { }
