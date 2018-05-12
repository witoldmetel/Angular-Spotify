import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearcherComponent } from './components/searcher/searcher.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
    { path: '', redirectTo: '/searcher', pathMatch: 'full' },
    { path: 'searcher', component: SearcherComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }