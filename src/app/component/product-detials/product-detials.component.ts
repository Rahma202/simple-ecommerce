import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/server/product.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.css']
})
export class ProductDetialsComponent implements OnInit {
 urlId=0;
 x:any;
arrayUserProduct:any[]=[]
 productId:any
  constructor(private idActive:ActivatedRoute,private myServe:ProductService) { 
    this.urlId=this.idActive.snapshot.params["id"];
    console.log(this.urlId);
    
  }

  ngOnInit(): void {
    this.myServe.getProductById(this.urlId).subscribe(
      {
        next:(data)=>{this.productId=data},
        error:()=>{console.log("eror");
        }
      }
      
    )
   this.x=()=>{
    this.myServe.deletProduct(this.urlId).subscribe()
}
  }
 deletData(){
  this.x;  
}

}
