import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!: string;
  countries = [
    {
      country: 'Argentina',
      city: 'Buenos Aires'
    },
    {
      country: 'Argentina',
      city: 'Rosario'
    },
    {
      country: 'Argentina',
      city: 'Tandil'
    },
    {
      country: 'Venezuela',
      city: 'San Cristóbal'
    },
    {
      country: 'Venezuela',
      city: 'Caracas'
    },
    {
      country: 'Venezuela',
      city: 'Cumaná'
    }
  ]
  title = 'countriesapp';
}
