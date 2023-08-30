import {  Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../services/book.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showProduct: any = [];
  totalAmount: number = 0;
  totalQuantity: number = 0;
  
  myform: FormGroup|any;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      //shows product
        this.productService.cartProducts().subscribe(res => {
        this.showProduct = res;

        //total price
        this.totalAmount = this.productService.calculatePrice();

        //total quantity
        this.totalQuantity = this.productService.calculateQuantity();
         
      })
      //payment form
      this.myform = new FormGroup({
      username: new FormControl ('',Validators.required),
      cardNumber: new FormControl ('',Validators.required),
      MM: new FormControl ('',Validators.required),
      YY: new FormControl ('',Validators.required),
      CVV: new FormControl ('',Validators.required),
      
    })
  }
  deleteProduct(item: Book){
    this.productService.removeCartItem(item)
  }

  empty(){
    this.productService.removeAllItems();
  }

  onSubmit(){
    this.myform.value;
    console.log(this.myform.value)
  }

}
