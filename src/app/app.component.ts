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

  onCountryClicked(country: string) {
    this.selection = country;
  }

  onCountry() {
    this.selection = '';
  }

  addNewCountry(country: string) {
    this.wanderlist.push(country);
  }

}
