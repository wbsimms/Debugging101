import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent} from './hero/hero.component';

const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: '', component: HeroComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {}
