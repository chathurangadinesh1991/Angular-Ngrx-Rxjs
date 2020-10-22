import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  name : string;
  
  constructor(private authService:AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.name = this.authService.getName();
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
