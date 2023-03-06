import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CyclistComponent } from './cyclists/cyclist.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamsComponent } from './teams/team.component';
import { CyclistsFormComponent } from './cyclists/form.component'
import { TeamsFormComponent } from './teams/form.component'
import { FormsModule } from '@angular/forms';


const routes: Routes =[
  {path: '',redirectTo: '/cyclists', pathMatch: 'full'},
  {path: 'cyclists', component: CyclistComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'cyclists/form', component: CyclistsFormComponent},
  {path: 'cyclists/form/:id', component: CyclistsFormComponent},
  {path: 'teams/form', component: TeamsFormComponent},
  {path: 'teams/form/:id', component: TeamsFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CyclistComponent,
    TeamsComponent,
    CyclistsFormComponent,
    TeamsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
