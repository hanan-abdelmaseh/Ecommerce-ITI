import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './products/Components/products/products.component';
import { CartComponent } from './carts/Components/cart/cart.component';



const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:'full'} ,
  {path:"home" , component:HomeComponent},
  {path:"product" , component:ProductsComponent},
  {path:"cart" , component:CartComponent},
  {path:"**" , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
