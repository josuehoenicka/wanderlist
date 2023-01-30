import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-countries',
  template: `
      <li
        (click)="onCountryClicked(wl)"
        [ngClass]="{'selected': wl === selection, 'disabled': wl !== selection}">
        {{wl | titlecase}}
      </li>
  `,
  styleUrls: ['./countries.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent {
  @Input() wl!: string;
  @Input() selection!: string;
  @Output() countryClickedEvent = new EventEmitter<string>();

  onCountryClicked(country: string) {
    this.countryClickedEvent.emit(country);
  }

}
