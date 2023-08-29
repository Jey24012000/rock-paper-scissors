import { Injectable } from '@angular/core';
import { GameItem } from '../game-item/game-item.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {



  game_items: GameItem[]=[
    {
      name: "paper",
      imageUrl: "icon-paper.svg",
      clase:'btn-paper'
    },
    {
      name: "scissors",
      imageUrl: "icon-scissors.svg",
      clase:"btn-scissors"
    },
    {
      name: "rock",
      imageUrl: "icon-rock.svg",
      clase:"btn-rock"
    }
  ]
  constructor(

  ) { }



  gameItem: GameItem = {"name": '', "imageUrl": '', "clase": '' };
  compuItem: GameItem = {"name": '', "imageUrl": '', "clase": '' };

  mensaje: string = '';
  puntos: number= 0;

  record: number = 0;

  itemsVersus(numeroItem: number) {


    let user: GameItem = this.game_items[numeroItem];
    let compu: GameItem = this.game_items[Math.floor(3 * Math.random())];

    let score = 0;
    this.gameItem= user;
    this.compuItem=compu;


    if(user == compu){
      this.mensaje = "DRAW";
      score= score + 1;
      this.puntos = this.puntos + score;

    } else if(user.name == 'rock' && compu.name == 'scissors' ||
              user.name == 'paper' && compu.name == 'rock' ||
              user.name == 'scissors' && compu.name == 'paper'){

                this.mensaje = "YOU WIN!!!!";
                score = score +3;
                this.puntos= this.puntos + score;



    }
    else{
      this.mensaje= "YOU LOSE";
      this.puntos = 0;
    }

    if(this.puntos > this.record){
      this.record = this.puntos;
    } 

  }


}
