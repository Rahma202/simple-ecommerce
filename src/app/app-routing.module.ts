import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetialsComponent } from './component/product-detials/product-detials.component';
import { UpdateComponent } from './component/update/update.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [  
  {path:'',component:ProductComponent},
  {path:'Product',component:ProductComponent} ,
  {path:'Product/:id',component:ProductDetialsComponent},
  {path:'product/put/:id',component:UpdateComponent}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
