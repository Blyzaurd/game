import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  localStorage = localStorage;

  title = 'Clicky';

  player: Player = {
    nickname: '',
    points: 0,
    level: 0,
    experience: 0,
    clickBonus: 0,
  };

  save() {
    this.localStorage.setItem('player', JSON.stringify(this.player));
  }

  read() {
    console.log('oh');
    this.player = JSON.parse(this.localStorage.getItem('player')!);
    console.log(this.player.points);
  }

  addPoints() {
    this.player.points += 1;

    this.save();
  }
}
