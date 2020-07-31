import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectFilterFakeNews';

  onSubmit(myForm: NgForm) {
    alert(myForm.value);
    alert(myForm.valid);
  }
  
  setDefault(myForm: NgForm){
    myForm.resetForm({
      name: 'Hardik', 
      email: 'savanihd@gmail.com'
    })
  }
  
  resetFormValue(myForm: NgForm){
    myForm.resetForm()
  }

  setSearch(jsonform, callback){
    $.ajax({
      type: "POST",
      url: `https://hackathon-call-for-code.mybluemix.net/nlu-completo?text=`,
      data: jsonform,
      contentType: "application/json; charset=utf-8",
      success: callback,
    });
  }

}
