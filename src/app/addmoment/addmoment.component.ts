import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Router } from '@angular/router';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addmoment',
  templateUrl: './addmoment.component.html',
  styleUrls: ['./addmoment.component.scss']
})
export class AddmomentComponent implements OnInit {
  imgfile;
  form: FormGroup;
  title;
  tags;
  faSlidersH=faSlidersH;
  slidebarflag = false;

  constructor(    public fb: FormBuilder,
                  public http : HttpClient,
                  public router : Router) {
                    this.form = this.fb.group({ image: [null] });
  }

  ngOnInit() {
  }

  onSelectFile(event){
    this.imgfile = event.target.files[0];
  }

  uploadmoment(){
    var formData = new FormData();
    formData.append('image', this.imgfile);
    formData.append('title', this.title);
    formData.append('tags', this.tags);
    this.http.post('http://localhost:3000/addmoment',formData).subscribe(
      (res) => {
        this.router.navigate(['/momentlist']);
      },(err) => {
        console.log(err);
      }
    );
  }

  sliderviewchange(){
    this.slidebarflag = !this.slidebarflag;
  }

}
