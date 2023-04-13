import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConnectedLayoutRoutingModule } from './connected-layout-routing.module';
import { ArtistComponent } from 'src/app/pages/artist/artist.component';
import { ConcertComponent } from 'src/app/pages/concert/concert.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ProfilComponent } from 'src/app/pages/profil/profil.component';
import { SongComponent } from 'src/app/pages/song/song.component';
import { ErreurComponent } from '../erreur/erreur.component';
import { ConnectedLayoutComponent } from './connected-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ArtistComponent,
    ConcertComponent,
    SongComponent,
    ProfilComponent,
    LoginComponent,
    ConnectedLayoutComponent,
    ErreurComponent
  ],
  imports: [
    ConnectedLayoutRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class ConnectedLayoutModule { }
