import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  public loginError:String;

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){  
    if(this.loginForm.valid){  
      this.authService.login(this.loginForm.value)
      .subscribe((data) => {
        if(data.status === 200 && !data.body.ErrorCode){
            this.router.navigate(['/home']);
        }else{
          this.loginError = data.body.message;
        }        
      },
      error => this.loginError = error
      )
    }    
  }
}
