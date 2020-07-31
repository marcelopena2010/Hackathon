import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portal-search',
  templateUrl: './portal-search.component.html',
  styleUrls: ['./portal-search.component.scss']
})
export class PortalSearchComponent implements OnInit {
  textsearch: any;
  model: any = {};
  /*
  search = {
    textSearch: null
  };
  */

  constructor(private http: HttpClient, private appService: AppService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    let json = JSON.stringify(form.value);
    alert("json: " + json);
    this.appService.setSearch(json, this.callBack);
  }

  callBack(data){
    alert("data: " + data);
  }

}
