import { Component, TemplateRef, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { AdvancedIfDirective } from '../../app-advanced-if.directive'; // Исправлен путь импорта

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss'],
})
export class DynamicContainerComponent {
  
  @ViewChild('tpl', { read: TemplateRef }) tpl!: TemplateRef<any>;
  @Input() isVisible!: boolean; // Добавлено свойство для управления видимостью

  constructor(private viewContainer: ViewContainerRef) {}

  clearTemplates() {
    this.viewContainer.clear();
  }
  
  addTemplate(name: string) {
    this.viewContainer.createEmbeddedView(this.tpl, { $implicit: name });
  }
}
