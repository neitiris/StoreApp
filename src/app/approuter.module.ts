import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as pages from './pages/';

const appRoutes: Routes = [
  { path: '', component: pages.TitlePageComponent, pathMatch: 'full' },
  { path: '', component: pages.TitlePageComponent,
    children: [
      { path: 'home', component: pages.HomePageComponent },
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ApproutingModule {

}
