import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestComponent } from 'app/modules/shared/components/quest/quest.component';
import { MaterialModule } from 'app/modules/material/material.module';
import { QuestProvider } from 'app/modules/shared/providers/quest.provider';

@NgModule({
  declarations: [
    QuestComponent
  ],
  providers: [
    QuestProvider
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    QuestComponent
  ]
})
export class SharedModule { }
