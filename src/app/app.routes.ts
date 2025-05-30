import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CitasComponent } from './components/citas/citas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { PqrsdComponent } from './components/pqrsd/pqrsd.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';  

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contactar', component: ContactarComponent },
  { path: 'pqrsd', component: PqrsdComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'servicios', component: ServiciosComponent },
  {path: 'terminos-condiciones', component: TerminosCondicionesComponent },
  {path: 'quienes-somos', component: QuienesSomosComponent },
  {path: 'configuracion', component: ConfiguracionComponent },
  { path: '**', redirectTo: 'inicio' },

];

