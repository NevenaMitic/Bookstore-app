import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/books/services/product.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit{
public cartItems: number = 0;
constructor (private productService: ProductService){}


  ngOnInit(): void {
   this.productService.cartProducts().subscribe(res =>{
    this.cartItems = res.length;
   })
  }

}