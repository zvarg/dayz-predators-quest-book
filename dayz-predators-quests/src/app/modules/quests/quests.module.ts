import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestsRoutingModule } from './quests-routing.module';
import { QuestsHomeComponent } from './components/quests-home/quests-home.component';


@NgModule({
  declarations: [
    QuestsHomeComponent
  ],
  imports: [
    CommonModule,
    QuestsRoutingModule
  ]
})
export class QuestsModule { }
