import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  homeTab: boolean = true;
  listTab: boolean = false;

  allTabFalse():void
  {
    this.homeTab = this.listTab = false;
  }
  onHomeTab():void
  {
    this.allTabFalse();
    this.homeTab = !this.homeTab; 
  }
  onListTab():void
  {
    this.allTabFalse();
    this.listTab = !this.listTab;
  }


}
