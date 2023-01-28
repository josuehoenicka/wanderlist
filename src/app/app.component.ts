import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ->', changes)
  }

  ngOnInit(): void {
    console.log('OnInit ->')
  }

  ngOnDestroy(): void {
  }

}
