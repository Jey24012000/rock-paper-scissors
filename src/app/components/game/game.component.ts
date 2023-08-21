import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  btn = false;
  btn2 = false;
  btn3 = false;
  end = 0;

  clickPaper(){
    this.btn2 = !false;
    this.btn3 = !false;
  }
  clickScissors(){
    this.btn = !false;
    this.btn3 = !false;
  }
  clickRock(){
    this.btn2 = !false;
    this.btn = !false;

    this.end = 2;
  }
}
