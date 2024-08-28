import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JsConceptsComponent } from './js-concepts/js-concepts.component';
import { NormalTimerComponent } from '../normal-timer/normal-timer.component';

const routes: Routes = [
  {path:'',redirectTo:'JS-topic',pathMatch:'full'},
  {path:'JS-topic',component:JsConceptsComponent}
];

@NgModule({
  declarations: [
    //NormalTimerComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class JsTopicsModule { }
