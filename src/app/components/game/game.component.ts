import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { GameItem } from '../game-item/game-item.model';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  constructor(
    private gameService: GameService
  ){}

  get gameItems(): GameItem[]{
    return this.gameService.game_items;
  }

 

  recuperarNum(i: number){

    this.gameService.itemsVersus(i);
  }
}
