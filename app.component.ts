import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name :string = 'Sunil';
  outputAge:number=0;
  doClick(name:string)
  {
    this.name = name;
    console.log(" do click called , change the name "+this.name);
  }
  getAgefromChild(EventEmitterValue:any)
  {
   this.outputAge=EventEmitterValue;
  }
}
