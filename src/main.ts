import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Verifique se o caminho está correto

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
