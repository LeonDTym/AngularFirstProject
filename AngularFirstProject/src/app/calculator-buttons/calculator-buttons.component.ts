import { Component, EventEmitter, Output } from '@angular/core';

interface ButtonConfig {
  type: 'number' | 'operation' | 'clear' | 'equals';
  displayValue: string;
  value: string;
  action: () => void;
}

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator-buttons.component.html',
  styleUrl: './calculator-buttons.component.scss'
})
export class CalculatorButtonsComponent {
  @Output() numberClick = new EventEmitter<string>();
  @Output() operationClick = new EventEmitter<string>();
  @Output() clearClick = new EventEmitter<void>();
  @Output() equalsClick = new EventEmitter<void>();

  //вот тут не совсем понял правильно ли
  buttons: ButtonConfig[] = [
    { type: 'number', displayValue: '7', value: '7', action: () => this.numberClick.emit('7') },
    { type: 'number', displayValue: '8', value: '8', action: () => this.numberClick.emit('8') },
    { type: 'number', displayValue: '9', value: '9', action: () => this.numberClick.emit('9') },
    { type: 'operation', displayValue: '/', value: '/', action: () => this.operationClick.emit('/') },
    { type: 'number', displayValue: '4', value: '4', action: () => this.numberClick.emit('4') },
    { type: 'number', displayValue: '5', value: '5', action: () => this.numberClick.emit('5') },
    { type: 'number', displayValue: '6', value: '6', action: () => this.numberClick.emit('6') },
    { type: 'operation', displayValue: '*', value: '*', action: () => this.operationClick.emit('*') },
    { type: 'number', displayValue: '1', value: '1', action: () => this.numberClick.emit('1') },
    { type: 'number', displayValue: '2', value: '2', action: () => this.numberClick.emit('2') },
    { type: 'number', displayValue: '3', value: '3', action: () => this.numberClick.emit('3') },
    { type: 'operation', displayValue: '-', value: '-', action: () => this.operationClick.emit('-') },
    { type: 'number', displayValue: '0', value: '0', action: () => this.numberClick.emit('0') },
    { type: 'number', displayValue: '.', value: '.', action: () => this.numberClick.emit('.') },
    { type: 'clear', displayValue: 'C', value: 'C', action: () => this.clearClick.emit() },
    { type: 'operation', displayValue: '+', value: '+', action: () => this.operationClick.emit('+') },
    { type: 'equals', displayValue: '=', value: '=', action: () => this.equalsClick.emit() }
  ];

  handleButtonClick(button: ButtonConfig) {
    button.action();
  }
}
