import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

constructor(private http: HttpClient) {}

public getParticularData(texto){
    texto = "mouse";
    let URL = "https://jsonplaceholder.typicode.com/posts="+texto;
    return this.http.get<Array<any>>( `${URL}`);
  
//    return new Promise((resolve)=>{
//        infoJSON.subscribe((data)=>resolve(data))
//    })
  }

}
