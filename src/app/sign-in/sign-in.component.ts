import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  userdata = {
    emailId : '',
    password : ''
  }
  errormsg = false;

  constructor(private http : HttpClient,
              private router : Router,
              private cookieService : CookieService) { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.userdata);
    this.http.get('http://localhost:3000/signin',{params : this.userdata}).subscribe(
      (res) => {
        if(res['token'] != null){
            this.cookieService.set('token' , res['token']);
            this.router.navigate(['/momentlist']);
          }else{
            this.errormsg = true;
          }
      }
    )
  }

}
