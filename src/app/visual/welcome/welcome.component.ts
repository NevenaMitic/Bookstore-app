import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../books/services/product.service';
import { Book } from 'src/app/books/services/book.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
public product:Book[]=[];

constructor(public productService: ProductService){}

ngOnInit():void{
  this.product = this.productService.getProducts();
  console.log(this.product)
}

}
