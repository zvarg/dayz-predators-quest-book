import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestsHomeComponent } from 'app/modules/quests/components/quests-home/quests-home.component';
import { QuestsRoutingModule } from 'app/modules/quests/quests-routing.module';
import { SharedModule } from 'app/modules/shared/shared.module';
import { MaterialModule } from 'app/modules/material/material.module';


@NgModule({
  declarations: [
    QuestsHomeComponent
  ],
  imports: [
    CommonModule,
    QuestsRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class QuestsModule { }
