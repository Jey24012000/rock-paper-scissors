import { Component} from '@angular/core';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 constructor(
  private gameService: GameService
 ){}


 puntaje = this.gameService.puntos;



}
