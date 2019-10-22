import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { CheckoutAuthComponent } from './checkout-auth/checkout-auth.component';

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
    NotFoundComponent,
    CheckoutAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
