import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-countries',
  template: `
    <ul class="wanderlist-countries">
      <li
        (click)="onCountryClicked(wl)"
        [ngClass]="{ selected: wl === selection, disabled: wl !== selection }"
      >
        {{ wl | titlecase }}
      </li>
      <button type="button" class="btn-delete" (click)="onDeleteClicked(wl)">
        Delete
      </button>
    </ul>
  `,
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountriesComponent {
  @Input() wl!: string;
  @Input() selection!: string;
  @Output() countryClickedEvent = new EventEmitter<string>();
  @Output() deleteClickedEvent = new EventEmitter<string>();

  onCountryClicked(country: string) {
    this.countryClickedEvent.emit(country);
  }

  onDeleteClicked(country: string) {
    this.deleteClickedEvent.emit(country);
  }
}
