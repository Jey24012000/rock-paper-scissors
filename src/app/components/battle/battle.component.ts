import { Component, OnInit } from '@angular/core';
import { GameService } from '../game/game.service';
import { GameItem } from '../game-item/game-item.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent  implements OnInit{

  constructor(
    private gameService: GameService
  ){}

  ngOnInit(){


  }

  gameItem: GameItem= this.gameService.gameItem;
  compuItem: GameItem = this.gameService.compuItem;
  mensaje: string = this.gameService.mensaje;
















}
