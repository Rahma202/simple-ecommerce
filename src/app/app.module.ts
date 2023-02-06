import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{  HttpClientModule  } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './component/slider/slider.component';
import { ProductDetialsComponent } from './component/product-detials/product-detials.component';
import { ProductService } from './server/product.service';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { FooterComponent } from './component/footer/footer.component';
import { UpdateComponent } from './component/update/update.component';
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ProductComponent,
    ProductDetialsComponent,
    ProductItemComponent,
    FooterComponent,
    UpdateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
