import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Order, OrderService } from '../services/order.service';
import { ReviewsComponent } from '../reviews/reviews.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent  implements OnInit, AfterViewInit {

  displayedColumns = ["date", "name", "price", "quantity","status", "actions"];
  bookSource = new MatTableDataSource<Order>();

    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatPaginator) paginator!:MatPaginator;
    
    constructor(private orderService: OrderService, private dialog: MatDialog) {}
  
     ngOnInit(): void {
      this.bookSource.data = this.orderService.getOrders()
      console.log( this.bookSource.data)
 
    
    }
    ngAfterViewInit(){
      this.bookSource.sort = this.sort;
      this.bookSource.paginator = this.paginator;
    }
    
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.bookSource.filter = filterValue.trim().toLowerCase();
    }


   update() {
      this.bookSource.data.forEach(order => {
        if (order.status == 'ONGOING') {
          order.status = 'CANCELED';
        }
      });
    }
    openReviewDialog(): void {
      const dialogRef = this.dialog.open(ReviewsComponent, {
        width: '300px',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          console.log('Reviews submitted');
        }
      });
    }
   
}
