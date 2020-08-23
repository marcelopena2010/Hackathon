import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from './app.service';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  //search: any;

  constructor(private apiService: ApiService ){
    //this.getSearch();
  }

  ngOnInit() { }

  onSubmit(myForm: NgForm) {
    alert("myForm: " + myForm.value);
    let json = JSON.stringify(myForm.value);
    alert("JSON: " + json);
    this.apiService.getParticularData(json).subscribe(dados => {
      alert(dados);
      console.log(dados);
    });
    myForm.resetForm({
      search: json
    })
  }


/*
  getSearch(myForm: NgForm){
    alert("this.search: " + myForm.value);
    this.apiService.getParticularData(myForm.value).subscribe(dados => {
      console.log(dados);
    });
  }
*/
}