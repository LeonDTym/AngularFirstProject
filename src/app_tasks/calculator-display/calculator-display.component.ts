import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss']
})
export class CalculatorDisplayComponent {

  @Input() currentValue: string = '0';
  @Input() result: string | null = null;
  @Output() themeChange = new EventEmitter<void>();
  onThemeToggle() {
    console.log('нажал тему поменял');

    this.themeChange.emit();
  }

}
