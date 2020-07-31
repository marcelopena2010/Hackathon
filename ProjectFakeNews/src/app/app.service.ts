import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  isprod: boolean;
  link: string;

  constructor(private http: HttpClient) {
    //this.isprod = false;
    //this.link = this.isprod ? 'https://portalpeoplejava.azurewebsites.net/' : "http://localhost:8080/";
    this.link = "https://hackathon-call-for-code.mybluemix.net/nlu-completo?text=";
  }

  setSearch(jsonform, callback){
    /*
    $.ajax({
      type: "POST",
      url: `${this.link}user/login`,
      data: jsonform,
      contentType: "application/json; charset=utf-8",
      success: callback,
    });
    */
  }

  /*
  makeSearch(json, callback) {
    $.ajax({
      type: "POST",
      //url: `${this.link}allocation/transfer`,
      url: `https://hackathon-call-for-code.mybluemix.net/nlu-completo?text=`,
      data: json,
      contentType: "application/json; charset=utf-8",
      success: callback,
      error: callback
    });
  }
*/
}
