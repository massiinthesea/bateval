import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';


// Jauges
import { GaugeModule } from 'angular-gauge';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EvaluateComponent } from './evaluate/evaluate.component';


// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { ResultatEvaluationComponent } from './resultat-evaluation/resultat-evaluation.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { GererQuestionsComponent } from './gerer-questions/gerer-questions.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddQuestionModalComponent } from './gerer-questions/modals/add-question-modal/add-question-modal.component';
import { RemoveQuestionModalComponent } from './gerer-questions/modals/remove-question-modal/remove-question-modal.component';
import {MatExpansionModule} from '@angular/material/expansion';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EvaluateComponent,
    ResultatEvaluationComponent,
    GererQuestionsComponent,
    AddQuestionModalComponent,
    RemoveQuestionModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule.forRoot(),
    MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatExpansionModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
