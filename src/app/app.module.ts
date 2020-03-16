import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { AlbumDetailComponent } from './albums/album-detail.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { fromEventPattern } from 'rxjs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    AlbumDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'albums', component: AlbumListComponent },
      { path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
