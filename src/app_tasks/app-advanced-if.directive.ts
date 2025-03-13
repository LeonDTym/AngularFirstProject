import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdvancedIf]'
})
export class AdvancedIfDirective {
  private timeout: any;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  @Input() set appAdvancedIf({ condition, delay }: { condition: boolean; delay: number }) {
    clearTimeout(this.timeout);
    if (condition) {
      this.timeout = setTimeout(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }, delay);
    } else {
      this.viewContainer.clear();
    }
  }
}
