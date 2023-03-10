import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutsaveGuard } from '../guards/withoutsave.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';
import { ContactReactiveComponent } from './contact-reactive.component';

const routes: Routes = [
  { path: '', component: ContactReactiveComponent, canDeactivate:[WithoutsaveGuard],
    resolve: {ocupation: DataResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
