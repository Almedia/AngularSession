import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {AdminModule} from './app/modules/admin/admin.module';

if (environment.production) {
  enableProdMode();
}

//hangi modul ile projenin ayağa kalkıcağını gösteriyor;
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
