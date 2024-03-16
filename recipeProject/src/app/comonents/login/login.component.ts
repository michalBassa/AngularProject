import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from '../../models/recipe/recipe.module';
import{Router} from '@angular/router';
import Swal from 'sweetalert2';
import { passwordValidator } from '../../password.validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm!: FormGroup;
  constructor(private _userService: UserService, private route:Router ) { }
  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required,passwordValidator])
      
    })
  }
    save() {
      this._userService.login(this.loginForm.value.name,this.loginForm.value.password).subscribe({
        next: (res) => {
          if(res==0)
         {sessionStorage.setItem("name",this.loginForm.value.name);
          sessionStorage.setItem("password",this.loginForm.value.password)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully",
            showConfirmButton: false,
            timer: 1500
          })
          this.route.navigate(['recipe/recipes'])} 
          else if(res==1)
          {
          Swal.fire({
            icon: "error",
            title: "wrong password",
            text: "Please try again!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          }
        else {
          Swal.fire({
          title: "Who are you?",
          text: "Please register",
          icon: "question"
        });
          this.route.navigate(['register'], { queryParams:{name: this.loginForm.value.name }})
        }
        }
      })
    }

}
