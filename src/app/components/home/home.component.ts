import { Component } from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private gameService: GameService
  ){}

  record: number = this.gameService.record;
}
