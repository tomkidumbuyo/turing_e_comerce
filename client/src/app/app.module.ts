import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PartialsModule } from './partials/partials.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchComponent,
    SingleProductComponent,
    CartComponent,
    CategoriesComponent,
    HomeComponent,
    CheckoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
