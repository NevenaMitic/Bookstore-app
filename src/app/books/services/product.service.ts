import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn:"root"
})
export class ProductService {

public cartItemList: any=[];
public productList = new BehaviorSubject<any>([])

private products: Book [] = [
      {
        id: 1,
        name: 'The Perfect Marriage',
        thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781913419653_p0_v11_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
        author: 'Jeneva Rose',
        price:9.99,
        genre: 'triller',
        pages: 344,
        date: new Date("08/10/2021"),
        quantity: 1,
        mark:4.5
        
      },
      {
        id: 2,
        name: 'King of Pride',
        thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781728299822_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
        author: 'Ana Huang',
        price:16.99,
        genre: 'romance',
        pages: 350,
        date: new Date("08/22/2023"),
        quantity: 1,
        mark:4.7
        
      },
      {
        id: 3,
        name: 'Iron Flame',
        thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781649374172_p0_v11_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
        author: 'Rebecca Yarros',
        price:26.99,
        genre: 'fantasy',
        pages: 640,
        date: new Date("11/07/2023"),
        quantity: 1,
        mark:4.7
        
      },
      {
      id: 4,
      name: 'Tom Lake',
      thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780063359567_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
      author: 'Ann Patchett',
      price:24,
      genre: 'fiction',
      pages: 340,
      date: new Date("08/01/2023"),
      quantity: 1,
      mark:4.4
      
    },
    {
      id: 21,
      name: 'The Covenant of Water',
      thumbnail:'https://media.discordapp.net/attachments/796341438215487498/1139549905220796416/PicsArt_08-11-03.24.15.jpg?width=257&height=401',
      author: 'Abraham Verghese',
      price:24.99,
      genre: 'fiction',
      pages: 736,
      date: new Date("05/02/2023"),
      quantity: 1,
      mark:4.9
      
    },
    {
      id: 6,
      name: 'Dirty Laundry',
      thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593497388_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
      author: 'Disha Bose',
      price:24.99,
      genre: 'thriller',
      pages: 304,
      date: new Date("04/04/2023"),
      quantity: 1,
      mark:4.8
      
    },
    {
      id: 7,
      name: 'The Push',
      thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781984881687_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
      author: 'Ashley Audrain',
      price:15.99,
      genre: 'thriller',
      pages: 352,
      date: new Date(1/4/2022),
      quantity: 1,
      mark:4.3
      
    },
    {
      id: 8,
      name: 'Identity',
      thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781250284112_p0_v3_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
      author: 'Nora Roberts',
      price:21,
      genre: 'romance',
      pages: 450,
      date: new Date("05/23/2023"),
      quantity: 1,
      mark:4.5
    },
    {
      id: 9,
      name: 'Foxglove',
      thumbnail:'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780316565257_p0_v1_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D',
      author: 'Adalyn Grace',
      price:14.99,
      genre: 'fantasy',
      pages: 400,
      date: new Date("08/22/2023"),
      quantity: 1,
      mark:4.3
    },
    {
      id: 10,
      name: 'This Vicious Grace',
      thumbnail:'https://media.discordapp.net/attachments/796341438215487498/1139561096982835310/PicsArt_08-11-04.08.26.jpg?width=259&height=401',
      author: 'Emily Thiede',
      price:9.99,
      genre: 'romance',
      pages: 448,
      date: new Date("06/28/2022"),
      quantity: 1,
      mark:3.5
    }
    ];
  
    getProducts(){
      return this.products;
    }
    

    //cart part
    addToCart(data: Book){
    this.cartItemList.push(data);
    this.productList.next(this.cartItemList);
    }

    cartProducts(){
      return this.productList.asObservable();
    
    }

    removeCartItem(data: Book){
      this.cartItemList.map((a:Book, index: Book)=>{
        if(data.id == a.id){
          this.cartItemList.splice(index,1)
        }
      })
      this.productList.next(this.cartItemList)
    }

    calculatePrice(){
      let totalPrice = 0;
      this.cartItemList.map((a: any) => {
        totalPrice += a.price;
      })
      return totalPrice;

    }
    
    calculateQuantity(){
      let totalQuantity = 0;
      this.cartItemList.map((a:any) => {
        totalQuantity += a.quantity;
      })
      return totalQuantity;
    }
    
  
    removeAllItems(){
      this.cartItemList = [];
      this.productList.next(this.cartItemList)
    }
    
  }




