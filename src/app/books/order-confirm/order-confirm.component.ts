import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit{
  
  totalAmount:number = 0;
  
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/active"])
    },4000);
    this.totalAmount = this.productService.calculatePrice();
    this.productService.removeAllItems();
  }

}