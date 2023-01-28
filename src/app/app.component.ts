import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {

  name!: string;
  wanderlist = ['Caracas (VEN)', 'Miranda (VEN)', 'Táchira (VEN)',
  'Mérida(VEN)', 'Bolívar (VEN)', 'Roraima (BRA)', 'Sao Paulo (BRA)', 'Brasilia (BRA)',
  'Paraná (BRA)', 'Misiones (ARG)', 'Santa Fe (ARG)', 'Buenos Aires (ARG)']
  title = 'countriesapp';
  selection!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ->', changes)
  }

  ngOnInit(): void {
    console.log('OnInit ->')
  }

  ngOnDestroy(): void {
  }

  onCityClicked(city: string) {
    this.selection = city;
  }

  onCity() {
    this.selection = '';
  }

}
