import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userdata = {
    firstname: '',
    lastname : '',
    mobilenumber : null,
    emailId : '',
    city : '',
    password : ''
  }
  errmsg = false;

  constructor(private http : HttpClient,
              private router : Router,
              public cookieService : CookieService) { }

  ngOnInit() {
  }

  registerUser(){
    this.http.post('http://localhost:3000/signup',this.userdata).subscribe(
      (res) =>{
        this.cookieService.delete('token');
        this.router.navigate(['/signin']);
      },
      (err) => {
        console.log("err",err);
        this.errmsg = true;
      }
    );
  }

}
