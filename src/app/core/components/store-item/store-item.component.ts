import { Component, EventEmitter, input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Bonus } from '../../models/bonus';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.scss',
})
export class StoreItemComponent {
  bonus = input.required<Bonus>();
  points = input.required<number>();
  isBougth = input.required<boolean>();

  @Output() onBuy = new EventEmitter<Bonus>();
}
