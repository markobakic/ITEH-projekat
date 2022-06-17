import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { PricePipe } from './pipes/price.pipe';
import { InchesPipe } from './pipes/inches.pipe';
import { HelmetsComponent } from './components/helmets/helmets.component';
import { SkisComponent } from './components/skis/skis.component';
import { BootsComponent } from './components/boots/boots.component';
import { CategoryHeadingComponent } from './components/category-heading/category-heading.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ThousandSeparatorPipe } from './pipes/thousand-separator.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortProductsComponent } from './components/sort-products/sort-products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    PricePipe,
    InchesPipe,
    HelmetsComponent,
    SkisComponent,
    BootsComponent,
    CategoryHeadingComponent,
    FooterComponent,
    ContactComponent,
    ContactItemComponent,
    LoginComponent,
    SignupComponent,
    ThousandSeparatorPipe,
    SortProductsComponent,
    ProfileComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
