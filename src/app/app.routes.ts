import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CitasComponent } from './components/citas/citas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { PqrdsComponent } from './components/pqrds/pqrds.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contactar', component: ContactarComponent },
  { path: 'pqrds', component: PqrdsComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' }
];
