import { Component, Input } from '@angular/core';
import { GameItem } from './game-item.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {
  @Input() gameItem!: GameItem

}
