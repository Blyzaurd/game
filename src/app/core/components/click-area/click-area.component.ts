import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-click-area',
  imports: [MatButtonModule, MatBottomSheetModule],
  templateUrl: './click-area.component.html',
  styleUrl: './click-area.component.scss',
})
export class ClickAreaComponent {
  @Input() points: number = 0;
  @Output() onAddPoints = new EventEmitter();
}
