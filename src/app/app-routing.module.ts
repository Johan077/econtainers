import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

const routes: Routes = [
  {
    path:'',
    component: ListHeroComponent
  },
  {
    path:'/detail-hero',
    component: DetailHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
