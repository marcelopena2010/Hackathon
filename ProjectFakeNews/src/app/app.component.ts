import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
    
  onSubmit(myForm: NgForm) {
    let json = JSON.stringify(myForm.value);
    myForm.resetForm({
      search: json
    })
  }
  
}
/*
*the rest of the imports are here don't worry*
import { ApiService } from '@api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

constructor( private ApiService: ApiService){

 JSON = this.ApiService.getParticularData();
 console.log(JSON) // returns undefined

}
}*/