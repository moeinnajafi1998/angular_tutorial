import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  // string interpolation ts => html 
  name : string = "Moein Najafi"
  birthYear : Number = 1998;

  // property binding ts => html
  isDisabled : boolean = false;

  // Event binding html => ts
  message : string = "😔";

  changeImoji(e:Event) {
    e.preventDefault();
    if(this.message=="😔"){
      this.message = "😁";
      this.isDisabled = true;
    }else{
      this.message = "😔";
      this.isDisabled = false;
    }
  }

  // mutual data binding
  email : string = "default@gmail.com";

}
