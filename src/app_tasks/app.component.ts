import { Component } from '@angular/core';
import { AuthService } from './practicum2/task2/auth.service';
import { AdvancedIfDirective } from './app-advanced-if.directive';
import { CommonModule } from '@angular/common';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';
import { CalculatorButtonsComponent } from './calculator-buttons/calculator-buttons.component';
import { DynamicContainerComponent } from "./practicum1/dynamic-container/dynamic-container.component";
import { ParentComponent } from "./practicum1/parent/parent.component";
import { LoginComponent } from './practicum2/task2/login.component';
import { SenderComponent } from './practicum2/sender.component';
import { ReceiverComponent } from './practicum2/receiver.component';
import { ProtectedComponent } from './practicum2/task2/protected.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SenderComponent, ReceiverComponent, LoginComponent, ProtectedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  currentTheme: string = 'light-theme';
  isVisible: boolean = false; // Добавлено свойство для управления видимостью
  currentValue: string = '0';
  result: string | null = null;
  currentOperation: string | null = null;
  firstOperand: number | null = null;

  onThemeChange() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }

  onNumberClick(number: string) {
    if (this.currentValue === '0' || this.result !== null) {
      this.currentValue = number;
      this.result = null;
    } else {
      this.currentValue += number;
    }
  }

  onOperationClick(operation: string) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentValue);
      this.currentOperation = operation;
      this.currentValue = '0';
    } else {
      this.calculate();
      this.currentOperation = operation;
    }
  }

  onClearClick() {
    this.currentValue = '0';
    this.result = null;
    this.firstOperand = null;
    this.currentOperation = null;
  }

  onEqualsClick() {
    this.calculate();
  }

  private calculate() {
    if (this.firstOperand !== null && this.currentOperation !== null) {
      const secondOperand = parseFloat(this.currentValue);
      try {
        let result: number;
        switch (this.currentOperation) {
          case '+':
            result = this.firstOperand + secondOperand;
            break;
          case '-':
            result = this.firstOperand - secondOperand;
            break;
          case '*':
            result = this.firstOperand * secondOperand;
            break;
          case '/':
            if (secondOperand === 0) {
              throw new Error('Поделился на 0.');
            }
            result = this.firstOperand / secondOperand;
            break;
          default:
            throw new Error('Что-то не то');
        }
        this.result = result.toString();
        this.firstOperand = result;
        this.currentValue = '0';
      } catch (error: unknown) {
        if (error instanceof Error) {
            this.result = error.message + ' Жаль (._. )>';
        } else {
            this.result = 'Произошла неизвестная ошибка. Жаль (._. )>';
        }
        this.firstOperand = null;
        this.currentOperation = null;
      }
    }
  }
}
