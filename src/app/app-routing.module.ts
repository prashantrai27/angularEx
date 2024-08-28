import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './Topics/dependency-injection/dependency-injection.component';
import { ObservablesComponent } from './Topics/observables/observables.component';
import { FormsComponent } from './Topics/forms/forms.component';
import { GridLayoutComponent } from './Topics/grid-layout/grid-layout.component';
import { Auth1Guard } from './auth1.guard';
import { BehaviorSubjectComponent } from './Topics/behavior-subject/behavior-subject.component';
import { RxjsOperatorsComponent } from './Topics/rxjs-operators/rxjs-operators.component';
import { ContentProjectionParentComponent } from './Topics/content-projection-parent/content-projection-parent.component';
import { SignalsComponent } from './Topics/signals/signals.component';
import { AgGridComponent } from './Topics/ag-grid/ag-grid.component';

const routes: Routes = [
  {path:'',redirectTo:'component-communication',pathMatch:'full'},
  {path:'component-communication',component:DependencyInjectionComponent},
  {path:'observables',component:ObservablesComponent},
  {path:'forms',component:FormsComponent},
  {path:'behaviou-sub',component:BehaviorSubjectComponent},
  {path:'grid-layout',component:GridLayoutComponent, canActivate:[Auth1Guard]},
  {path:'rxjsoperator',component:RxjsOperatorsComponent},
  {path:'content-projection',component:ContentProjectionParentComponent},
  {path:'change-detection',component:SignalsComponent},
  {path:'ag-grid',component:AgGridComponent},
  {path:'jstopics',loadChildren:()=> import('../app/Topics/js-topics/js-topics.module').then(m=>m.JsTopicsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
