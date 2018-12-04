import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleTweetComponent } from './detalle-tweet/detalle-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Modulo para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';
import { AllTweetUserComponent } from './all-tweet-user/all-tweet-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tweet/:id',
    component: DetalleTweetComponent
  },
  {
    path: 'tweet/all/:id',
    component: AllTweetUserComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    DetalleTweetComponent,
    PageNotFoundComponent,
    AllTweetUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
