import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss',
})
export class TitleBarComponent {
  @Output() onSave = new EventEmitter();
  @Output() onOpenStore = new EventEmitter();
}
