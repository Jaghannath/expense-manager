import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { StoreModule } from '@ngrx/store';
import * as EMReducer from '../app/store/em.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExpenseManagerEffects } from './store/em.effects';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoginModule,
    AppRoutingModule,
    StoreModule.forRoot(EMReducer),
    EffectsModule.forRoot([ExpenseManagerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
