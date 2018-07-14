import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PetsComponent } from './pets/pets.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const router: Routes = [
    { path: '', redirectTo: 'usuarios', pathMatch: 'full'},
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'pets', component: PetsComponent},
    { path: 'agenda', component: AgendaComponent}    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
