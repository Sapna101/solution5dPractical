import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { faEdit,faTrash,faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-momentlist',
  templateUrl: './momentlist.component.html',
  styleUrls: ['./momentlist.component.scss']
})
export class MomentlistComponent implements OnInit {
  momentlist;
  faTrash = faTrash;
  faEdit = faEdit;
  faSlidersH = faSlidersH;
  slidebarflag = false;

  constructor(public cookieService : CookieService,
              public http : HttpClient) { }

  ngOnInit() {
    this.getmomentlist();
  }

  getmomentlist(){
    this.http.get('http://localhost:3000/momentlist').subscribe((res)=>{
      this.momentlist = res;
    })
  }

  sliderviewchange(){
    this.slidebarflag = !this.slidebarflag;
  }

}
