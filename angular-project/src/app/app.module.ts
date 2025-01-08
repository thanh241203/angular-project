import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { RenderListComplexComponent } from './render-list-complex/render-list-complex.component';
import { ProductListComponent } from './render-list-complex/product-list/product-list.component';
import { ProductComponent } from './render-list-complex/product-list/product/product.component';
import { FilterComponent } from './render-list-complex/product-list/filter/filter.component';
import { SearchComponent } from './render-list-complex/product-list/search/search.component';
import { ProductDetailComponent } from './render-list-complex/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TwoWayBindingComponent,
    NgforDirectiveComponent,
    RenderListComplexComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    SearchComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
