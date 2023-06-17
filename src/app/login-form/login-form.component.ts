import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  loginForm!: FormGroup;
  constructor(private route : Router) { }
  
  ngOnInit() { 
    this.loginForm = new FormGroup (
      {
        email : new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
      }
    );
   }

   onLogin() {
    if (this.loginForm.valid) {
      this.route.navigate(['/home'])
    }
   }


}
