import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  wanderlist = ['Venezuela', 'Colombia', 'Brasil', 'Argentina'];
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

  onDeleteCountry(country: string): void {
    console.log(country);
    const index = this.wanderlist.indexOf(country);
    if (index !== -1) {
      this.wanderlist.splice(index, 1);
      if (this.selection === country) {
        this.selection = '';
      }
    }
  }
}
