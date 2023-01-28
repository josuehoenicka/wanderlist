import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  wanderlist = ['Caracas', 'Miranda', 'Nueva Esparta', 'Táchira', 'Cúcuta',
  'Mérida', 'Roraima', 'Sao Paulo', 'Brasilia',
  'Paraná', 'Misiones', 'Santa Fe', 'Buenos Aires']
  title = 'countriesapp';
  selection!: string;

  onCityClicked(city: string) {
    this.selection = city;
  }

  onCity() {
    this.selection = '';
  }

  addNewCity(city: string) {
    this.wanderlist.push(city);
  }

}
