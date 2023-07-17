import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent {

  isEnabled : boolean = false;


  changeIsEnabled(e:Event){
    if(this.isEnabled==true){
      this.isEnabled=false;
    }else{
      this.isEnabled=true;
    }
  }

}
