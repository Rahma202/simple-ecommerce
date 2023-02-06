import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private myHttp:HttpClient) { }
   private baseUrl="http://localhost:3000/prodect";
     getAllData(){
      return this.myHttp.get(this.baseUrl)
     }
     getProductById(id:any){
    return this.myHttp.get(`${this.baseUrl}/${id}`)
     }
     updateProduct(id:any,body:any){
      return this.myHttp.put(`${this.baseUrl}/${id}`,body)
     }
    addProduct(id:any,body:any){
      return this.myHttp.post(`${this.baseUrl}`,body)
     }
     deletProduct(id:any){
      return this.myHttp.delete(`${this.baseUrl}/${id}`)
     }
     addProductUser(body:any){
      return this.myHttp.post("http://localhost:3000/userProduct",body)
     }
  
}
