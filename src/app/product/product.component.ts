import { Component, OnInit } from '@angular/core';
import { ProductService } from '../server/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arrayProduct:any;
  constructor(private proService:ProductService) { }

  ngOnInit(): void {
this.proService.getAllData().subscribe(
{
  next:(data)=>{this.arrayProduct=data},
  error:()=>{console.log("erorr");
  }
}
);


    
    
  }

}
