import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() label!: string;
  @Input() className = 'classname';
  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string) {
    this.newItemEvent.emit(item);
  }

}
