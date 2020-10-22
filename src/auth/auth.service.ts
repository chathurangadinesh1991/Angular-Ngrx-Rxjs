import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonResponse } from '../common/common.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endPoint:string = "http://localhost:3000/api/auth/login";
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router ) { 

  }
 
  login(formData:any):Observable<HttpResponse<any>>{
    return this.http.post<any>(this.endPoint, formData, { observe: 'response' })
    .pipe(
      tap((resp: HttpResponse<any>) => {
        if(resp.body.token){
          localStorage.setItem("user", JSON.stringify(resp.body));
          this.loginStatus.next(true);
        }
        return resp;  
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) { 
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Status: ${error.status}, ` +
        `Error: ${error}`);
    }

    return throwError(
      'Username or Password incorrect');
  };

  logout(){
    this.loginStatus.next(false);
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

 isLoggedIn() : Observable<boolean> {
  return this.loginStatus.asObservable();
 }

 getName() : string {
  let user = JSON.parse(localStorage.getItem('user'));
    if (user !== null && user !== undefined) {
      return user.name;
    }
 }

  private hasToken() : boolean {    
    let user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
      let token = user.token;
      if ((token === null || token === undefined) === false) {
        return true;
      }
    }

    return false;
  }
}
