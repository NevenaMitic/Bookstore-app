import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput!: User;
  public showPassword: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  public userService: UserService) { }

  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      password: this.data.user.password,
      mobilePhone: this.data.user.mobilePhone,
      address: this.data.user.address,
      name: this.data.user.name,
      favoriteGenre: this.data.user.favoriteGenre
    };
  }

  finishEditing(form: NgForm){
    this.data.user.name = this.profileForInput.name;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    this.data.user.mobilePhone = this.profileForInput.mobilePhone;
    this.data.user.favoriteGenre = this.profileForInput.favoriteGenre;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
