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
      name: json
    })
  }
  
}