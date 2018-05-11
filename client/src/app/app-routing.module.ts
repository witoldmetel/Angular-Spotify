import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearcherComponent } from './components/searcher/searcher.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: '', redirectTo: '/searcher', pathMatch: 'full' },
    { path: 'searcher', component: SearcherComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }