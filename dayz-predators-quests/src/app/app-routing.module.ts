import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestsHomeComponent } from 'app/modules/quests/components/quests-home/quests-home.component';

const routes: Routes = [
  { path: 'quests', component: QuestsHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
