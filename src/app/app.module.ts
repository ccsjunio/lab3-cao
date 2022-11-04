import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    //AppRoutingModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: '', redirectTo: '/contact', pathMatch: 'full' },
      { path: 'productlist', redirectTo: '/products', pathMatch: 'full' },

      //Create 2 more alternate routes to reach the products list page.
      { path: 'products-list', redirectTo: '/products', pathMatch: 'full' },
      { path: 'list', redirectTo: '/products', pathMatch: 'full' },

      // Path for Page Not Found
      { path: '**', component: PageNotFoundComponent },
    ]),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
  ],
  //providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
