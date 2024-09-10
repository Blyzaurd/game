import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Bonus } from '../../models/bonus';
import { GameService } from '../../services/game.service';
import { StoreItemComponent } from '../store-item/store-item.component';

@Component({
  selector: 'app-click-store',
  standalone: true,
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    StoreItemComponent,
  ],
  templateUrl: './click-store.component.html',
  styleUrl: './click-store.component.scss',
})
export class ClickStoreComponent {
  private gameService = inject(GameService);

  points = 0;
  activeBonuses = this.gameService.bonuses;

  ngOnInit() {
    this.gameService.read();

    this.points = this.gameService.player.points;
  }

  addBonus(bonus: Bonus) {
    this.points -= bonus.price;

    this.gameService.addBonus(bonus.id);
  }

  isBonusBought(bonusId: number): boolean {
    return this.gameService.player.boughtBonusIds.includes(bonusId);
  }
}
