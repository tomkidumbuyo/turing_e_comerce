import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutAuthComponent } from './checkout-auth/checkout-auth.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  data: { title: 'List of Products' }
},
{
  path: 'products',
  component: ProductsComponent,
  data: { title: 'List of Products' }
},
{
  path: 'categories/:id?',
  component: ProductsComponent,
  data: { title: 'List of Products' }
},
{
  path: 'product/:id',
  component: SingleProductComponent,
  data: { title: 'Product Details' }
},
{
  path: 'search/:query?',
  component: SearchComponent,
  data: { title: 'Product Details' }
},
{
  path: 'cart',
  component: CartComponent,
  data: { title: 'Product Details' }
},
{
  path: 'checkout',
  component: CheckoutComponent,
  data: { title: 'Product Details' }
},
{
  path: 'checkoutauth',
  component: CheckoutAuthComponent,
  data: { title: 'Product Details' }
},
{ path: '',
  redirectTo: '/products',
  pathMatch: 'full'
},
{
  path: '**',
  component: NotFoundComponent,
  data: { title: 'Product Details' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
