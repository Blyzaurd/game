import { Component, EventEmitter, input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-store-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './store-item.component.html',
  styleUrl: './store-item.component.scss',
})
export class StoreItemComponent {
  id = input.required<number>();
  title = input.required<string>();
  icon = input.required<string>();
  price = input.required<number>();
  points = input.required<number>();
  isBougth = input.required<boolean>();

  @Output() onBuy = new EventEmitter<number>();
}
