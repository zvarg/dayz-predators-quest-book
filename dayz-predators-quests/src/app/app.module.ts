import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestsModule } from 'app/modules/quests/quests.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/modules/shared/shared.module';
import { MaterialModule } from 'app/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    QuestsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
