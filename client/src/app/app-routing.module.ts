import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [{
  path: 'products',
  component: ProductsComponent,
  data: { title: 'List of Products' }
},
{
  path: 'product-details/:id',
  component: SingleProductComponent,
  data: { title: 'Product Details' }
},
{
  path: 'cart',
  component: CartComponent,
  data: { title: 'Product Details' }
},
{
  path: 'search',
  component: SearchComponent,
  data: { title: 'Product Details' }
},
{ path: '',
  redirectTo: '/products',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
