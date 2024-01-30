import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  template: `
    <input
      type="text"
      [placeholder]="placeholder"
      class="form-control"
      (keyup.enter)="emitValue(txtInput.value)"
      #txtInput
    />
  `,
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
