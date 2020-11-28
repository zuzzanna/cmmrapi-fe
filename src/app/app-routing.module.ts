import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilComponent} from './profil/profil.component';
import {InfrastructureComponent} from './infrastructure/infrastructure.component';
import {LabsComponent} from './labs/labs.component';
import {CernComponent} from './cern/cern.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: ProfilComponent},
  {path: 'infrastructure', component: InfrastructureComponent},
  {path:'people',component: LabsComponent},
  {path:'cern',component: CernComponent},
  {path:'about',component:AboutComponent},
  {path: '**', component: ProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
