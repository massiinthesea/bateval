import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { GererQuestionsComponent } from './gerer-questions/gerer-questions.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ResultatEvaluationComponent } from './resultat-evaluation/resultat-evaluation.component';

const routes: Routes = [
  { path: 'Evaluer', component: EvaluateComponent },
  { path: 'Accueil', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'ResultatEvaluation', component: ResultatEvaluationComponent },
  { path: 'GererQuestions', component: GererQuestionsComponent},
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
