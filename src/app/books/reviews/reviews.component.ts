import { Component} from '@angular/core';

interface Review {
  name: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent{


review: Review = {
  name: '',
  rating: 1,
  comment: ''
};

ratings: number[] = [1, 2, 3, 4, 5];

setRating(rating: number) {
  this.review.rating = rating;
}

submitReview() {
  console.log('Review submitted:', this.review);
}

}