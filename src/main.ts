import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ IMPORTANTE
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { ServiciosComponent } from './app/components/servicios/servicios.component';  

bootstrapApplication(ServiciosComponent)
  .catch(err => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ ESTO SOLUCIONA EL ERROR
  ]
});
