import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
    
  onSubmit(myForm: NgForm) {
    myForm.resetForm({
      name: myForm.value
    })
  }
  
}