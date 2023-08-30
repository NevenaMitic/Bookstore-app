import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../services/book.model';
import { ReviewService } from '../services/reviews.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  bookData: any;
  showAdd: boolean = true;
  showRemove: boolean = false;
  reviews: any[] = [];
  review: any;


  constructor( public productService: ProductService, private reviewService:ReviewService, private route: ActivatedRoute) { }

  ngOnInit():void{
      this.route.params.subscribe(params => {
      const encodedBookData = params['bookData'];
      this.bookData = JSON.parse(atob(encodedBookData));
      console.log(this.bookData)

      this.reviews = this.reviewService.getReviews();
   });
  }
  addToCart(bookData: Book){
    this.showAdd = false;
    this.showRemove = true;
    this.productService.addToCart(bookData)
  }
  removeItem(bookData: Book){
    this.showAdd = true;
    this.showRemove = false;
    this.productService.removeCartItem(this.bookData)
  }
}