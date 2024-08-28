import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyInjectionComponent } from './Topics/dependency-injection/dependency-injection.component';
import { ChildComponent } from './Topics/dependency-injection/ParentChildCommunication/child/child.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './Topics/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridLayoutComponent } from './Topics/grid-layout/grid-layout.component';
import { BehaviorSubjectComponent } from './Topics/behavior-subject/behavior-subject.component';
import { FirstDummyInterceptor } from './Topics/interceptor/first-dummy.interceptor';
import { SecondDummyInterceptor } from './Topics/interceptor/second-dummy.interceptor';
import { RxjsOperatorsComponent } from './Topics/rxjs-operators/rxjs-operators.component';
import { ContentProjectionParentComponent } from './Topics/content-projection-parent/content-projection-parent.component';
import { ContentProjectionChildComponent } from './Topics/content-projection-parent/content-projection-child/content-projection-child.component';
import { SignalsComponent } from './Topics/signals/signals.component';
import { HighlightDirective } from './highlight.directive';
import { NormalTimerComponent } from './Topics/normal-timer/normal-timer.component';
import { AgGridComponent } from './Topics/ag-grid/ag-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DependencyInjectionComponent,
    ChildComponent,
    FormsComponent,
    GridLayoutComponent,
    BehaviorSubjectComponent,
    RxjsOperatorsComponent,
    ContentProjectionParentComponent,
    ContentProjectionChildComponent,
    SignalsComponent,
    HighlightDirective,
    NormalTimerComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[NormalTimerComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: FirstDummyInterceptor,multi:true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: SecondDummyInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
