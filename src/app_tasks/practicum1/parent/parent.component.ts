import { AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DynamicContainerComponent } from '../dynamic-container/dynamic-container.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, DynamicContainerComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('child') child!: ChildComponent;
  @ViewChild('contentRef', { static: true }) content!: ElementRef;
  
  isVisible: boolean = false; // Добавлено свойство для управления видимостью

  ngAfterViewInit(): void {
    console.log('Дочерний компонент:', this.child);
    console.log('Переданный контент:', this.content.nativeElement.textContent);
  }

  logChildContent() {
    if (this.content) {
      console.log('Динамически вызванный контент:', this.content.nativeElement.textContent);
    } else {
      console.error('contentRef не инициализирован');
    }
  }
}
