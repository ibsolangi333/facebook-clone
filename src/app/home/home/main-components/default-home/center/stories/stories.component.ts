import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {
  // buttons start
  storyButtonColor="var(--main-color)"
  reelsButtonColor="#65676b"
  storiesHover=false
  reelsHover=true
  storyBottomLine=true
  reelsBottomLine=false
  storiesDisplay=true
  reelsDisplay=false
  stories(){
  this.storyButtonColor="var(--main-color)"
  this.reelsButtonColor="#65676b"
  this.storiesHover=false
  this.reelsHover=true
  this.storyBottomLine=true
  this.reelsBottomLine=false
  this.storiesDisplay=true
  this.reelsDisplay=false
  }
  reels(){
  this.storyButtonColor="#65676b"
  this.reelsButtonColor="var(--main-color)"
  this.storiesHover=true
  this.reelsHover=false
  this.reelsBottomLine=true
  this.storyBottomLine=false
  this.storiesDisplay=false
  this.reelsDisplay=true
  }
  // buttons start
  slider="0px"
  LeftBtnDisplay=false
  RightBtnDisplay=true
  slideLeft(){
    this.slider="0px"
    this.RightBtnDisplay=true
    this.LeftBtnDisplay=false
  }
  slideRight(){
    this.slider="-660px"
    this.RightBtnDisplay=false
    this.LeftBtnDisplay=true
  }

  







}
