import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/server/product.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  nameProduct="";
  activeID=0;
  detials="";
 y:any;
  array:any;
  regForm=new FormGroup(
    {
      namePro:new FormControl(this.nameProduct),
         sallary:new FormControl(this.detials)
      }
   )
  changeProd(e:any){
    this.nameProduct=e.target.value
    
  }
  update(){
  var updateItem=this.regForm.value
  this.myServe.updateProduct(this.activeID,{updateItem}).subscribe()

   
  }
  changeDetials(e:any){
    this.detials=e.target.value
  }
  
  constructor(private urlId:ActivatedRoute,private myServe:ProductService) {
    this.activeID=urlId.snapshot.params["id"]
   }
 

  ngOnInit(): void {
  
  

    this.myServe.getProductById(this.activeID).subscribe({
      next:(data)=>{ this.array=data;
       }
    })
  }

}
