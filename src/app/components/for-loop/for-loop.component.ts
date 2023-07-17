import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
  obj = { first: 1, second: 2, third: 3 };
  arr = [1, 2, 3];
  
  ngOnInit(){

    Object.entries(this.obj).forEach(([key, value], index) => {
      console.log(key, value, index);
    });

    for (const value of this.arr) {
      console.log(value);
    }
  }

}
