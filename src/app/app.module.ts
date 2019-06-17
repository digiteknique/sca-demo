import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ScheduleLookupComponent } from './schedule-lookup/schedule-lookup.component';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './effects/application.effects';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleViewComponent } from './schedule-view/schedule-view.component';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';




@NgModule({
  declarations: [
    AppComponent,
    ScheduleLookupComponent,
    ScheduleViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot( [ ApplicationEffects ]),
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    ExcelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
