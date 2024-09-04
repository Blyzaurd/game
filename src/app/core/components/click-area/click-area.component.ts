import { Component, inject } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { GameService } from '../../services/game.service';

@Component({
  standalone: true,
  selector: 'app-click-area',
  imports: [MatProgressBar],
  templateUrl: './click-area.component.html',
  styleUrl: './click-area.component.scss',
})
export class ClickAreaComponent {
  private gameService = inject(GameService);

  combo: number = 0;
  points: number = 0;

  isFirstLoad: boolean = true;

  ngOnInit() {
    this.gameService.read();

    this.points = this.gameService.player.points;

    this.reduceCombo();
  }

  addPoints() {
    this.gameService.addPoints(this.combo);

    this.points = this.gameService.player.points;
  }

  addCombo() {
    if (this.combo < 100) {
      this.combo += 10;
    }
  }

  reduceCombo() {
    setInterval(() => {
      if (this.combo > 0) {
        this.combo -= 10;
      }
    }, 200);
  }
}
