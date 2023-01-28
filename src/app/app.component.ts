import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!: string;
  countries = ['Buenos Aires', 'Rosario', 'Tandil', 'San Cristóbal', 'Caracas', 'Charallave']
  title = 'countriesapp';
}
