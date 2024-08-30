import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Bonus } from '../../models/bonus';

@Component({
  selector: 'app-click-store',
  standalone: true,
  imports: [MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './click-store.component.html',
  styleUrl: './click-store.component.scss',
})
export class ClickStoreComponent {
  bonuses: Bonus[] = [
    {
      id: 1,
      title: 'Extra mouse',
      icon: 'mouse',
      cost: 100,
      bonus: 1.25,
      isBougth: false,
    },
    {
      id: 2,
      title: 'Extra finger',
      icon: 'touch_app',
      cost: 200,
      bonus: 1.5,
      isBougth: false,
    },
    {
      id: 3,
      title: 'Double-click',
      icon: 'keyboard_double_arrow_up',
      cost: 500,
      bonus: 2,
      isBougth: false,
    },
    {
      id: 4,
      title: 'Extra hand',
      icon: 'pan_tool',
      cost: 1000,
      bonus: 2.5,
      isBougth: false,
    },
  ];
}
