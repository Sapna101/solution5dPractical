import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solution5dPractical';

  constructor(public cookieService : CookieService,
  public router : Router){}

  ngOnInit(){
    console.log("cookie",this.cookieService.get('token'));
    if(!this.cookieService.get('token')){
      this.router.navigate(['/signin']);
    }
  }

  logout(){
    this.cookieService.delete('token');
    this.router.navigate(['/signin']);
  }

}
