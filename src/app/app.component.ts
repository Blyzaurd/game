import { Component } from '@angular/core';
import { Player } from './core/models/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  localStorage = localStorage;

  title = 'Clicky';

  player: Player = {
    nickname: '',
    points: 0,
    level: 0,
    experience: 0,
    clickBonus: 0,
  };

  ngOnInit() {
    this.read();
  }

  save() {
    this.localStorage.setItem('player', JSON.stringify(this.player));
  }

  read() {
    this.player = JSON.parse(this.localStorage.getItem('player')!);
  }

  addPoints() {
    this.player.points += 1;

    this.save();
  }
}
