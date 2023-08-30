import { Injectable } from "@angular/core";
export interface Order {
    id?: any;
    name: string;
    author: string;
    price: number;
    date?: Date;
    quantity?: number;
    status?: 'DELIVERED' | 'CANCELED' |'ONGOING'| null;
}

@Injectable({ 
    providedIn: 'root' 
})
export class OrderService {
    
    private orders: Order [] = [
        {
            id:1,
            name:'The Perfect Marriage',
            author: 'Jeneva Rose',
            price: 19.98,
            date: new Date("10/06/2023"),
            quantity: 2,
            status: 'DELIVERED'
        },
        {
            id:2,
            name:'King of Pride',
            author: 'Ana Huang',
            price: 16.99,
            date: new Date("01/04/2022"),
            quantity: 1,
            status:'CANCELED'
        },
        {
            id:7,
            name:'The Push',
            author: 'Ashley Audrain',
            price: 15.99,
            date: new Date("07/07/2023"),
            quantity: 1,
            status:'DELIVERED'
        },
        {
            id:10,
            name:'The Vicious Grace',
            author: 'Emily Thiede',
            price: 39.96,
            date: new Date("10/06/2023"),
            quantity: 4,
            status: 'ONGOING'
        },
       
]
getOrders(){
    return this.orders;
}
}