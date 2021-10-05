import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestComponent } from 'app/modules/shared/components/quest/quest.component';
import { MaterialModule } from 'app/modules/material/material.module';
import { QuestProvider } from 'app/modules/shared/providers/quest.provider';
import { CooldownComponent } from './components/cooldown/cooldown.component';
import { LocationComponent } from './components/location/location.component';
import { ItemComponent } from './components/item/item.component';
import { RequirementComponent } from './components/requirement/requirement.component';

@NgModule({
  declarations: [
    QuestComponent,
    CooldownComponent,
    LocationComponent,
    ItemComponent,
    RequirementComponent
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
    CooldownComponent,
    ItemComponent,
    RequirementComponent
  ]
})
export class SharedModule { }
