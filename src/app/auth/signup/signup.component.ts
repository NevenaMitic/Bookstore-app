
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

errorExists = false;
errorText="";
public showPassword: boolean = false;


  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
      if (!this.userService.getUser(form.value.email)){
        this.errorExists = false;
        var newUser = this.userService.registerUser(form.value.email,
                                                    form.value.name,
                                                    form.value.password,
                                                    form.value.mobilePhone,
                                                    form.value.address);
      this.router.navigate(['active']);
      } else {
        this.errorExists = true;
        this.errorText = "User with this email already exists."

      }
    }
    togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }
    
}

