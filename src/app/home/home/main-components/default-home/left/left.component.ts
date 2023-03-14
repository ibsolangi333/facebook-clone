import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent {
  hiddenLinksDisplay=false
  seeMoreDisplay=true

  openLinks(){
     this.hiddenLinksDisplay=true
     this.seeMoreDisplay=false
  }
  hideLinks(){
    this.hiddenLinksDisplay=false
    this.seeMoreDisplay=true
  }
}
