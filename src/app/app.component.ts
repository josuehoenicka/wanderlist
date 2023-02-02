import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  wanderlist = ['Venezuela', 'Colombia', 'Brasil', 'Argentina']
  title = 'wanderlist';
  selection!: string;
  criterion = '';

  onCountryClicked(country: string): void {
    this.selection = country;
  }

  onCountry(): void {
    this.selection = '';
  }

  addNewCountry(country: string): void {
    this.wanderlist.push(country);
  }

}
