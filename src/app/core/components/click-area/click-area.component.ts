import { Component, inject } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { GameService } from '../../services/game.service';

@Component({
  standalone: true,
  selector: 'app-click-area',
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './click-area.component.html',
  styleUrl: './click-area.component.scss',
})
export class ClickAreaComponent {
  private gameService = inject(GameService);

  points: number = 0;

  ngOnInit() {
    this.gameService.read();

    this.points = this.gameService.player.points;
  }

  addPoints() {
    console.log('uh');
    this.gameService.addPoints();

    this.points = this.gameService.player.points;
  }
}
