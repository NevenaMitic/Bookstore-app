import { Injectable } from "@angular/core";

export interface User {

    id: number;
    name: string;
    email: string;
    password: string;
    mobilePhone: any;
    address: string;
    favoriteGenre?: string;

}

@Injectable({ providedIn: 'root' })
export class UserService {

    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> = [
        {
            id: 0,
            name:"Admin",
            email: "admin@mail.com",
            password: "admin123",
            address:"Darvinova 56",
            mobilePhone:38112345678,
            favoriteGenre: "romance"
        
        },
        {
            id: 1,
            name:"User",
            email: "user@mail.com",
            password: "123456789",
            mobilePhone:381123334444,
            address:"Nemanjina 15",
            favoriteGenre:"horror"
        }];

    getUserName(user: User): string {
        return user.email;
    }

    getUserById(id: number): User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });

        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string): User {
    
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;

    }

    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind =>
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
        }

    

    registerUser(email: string, name:string, password: string, mobilePhone:number, address: string): User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if (maxId < user.id) {
                maxId = user.id;
            }
        })

        var id = ++maxId;

        var user: User = {
            id,
            name,
            email,
            password,
            mobilePhone,
            address
        }

        UserService.dummyUserList.push(user);
        
        this.currentUser = user;

        console.log(user);
        return user;
    }

}