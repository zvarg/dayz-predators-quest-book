import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestComponent } from 'app/modules/shared/components/quest/quest.component';
import { MaterialModule } from 'app/modules/material/material.module';
import { QuestProvider } from 'app/modules/shared/providers/quest.provider';
import { CooldownComponent } from './components/cooldown/cooldown.component';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  declarations: [
    QuestComponent,
    CooldownComponent,
    LocationComponent
  ],
  providers: [
    QuestProvider
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    QuestComponent,
    CooldownComponent
  ]
})
export class SharedModule { }
