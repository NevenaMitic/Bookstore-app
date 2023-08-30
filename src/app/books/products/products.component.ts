import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Book } from '../services/book.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

public product:Book[]=[];
id:any

constructor(public productService: ProductService){}

ngOnInit():void{
  this.product = this.productService.getProducts();
  console.log(this.product)
  this.product.forEach(product => {
    this.id = product.id
  });
}
 encodeBookData(book: any): string {
   return btoa(JSON.stringify(book));
}
}



