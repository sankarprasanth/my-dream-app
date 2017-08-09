
//First code which gets executed when application is started
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//it starts angular application by passing AppModule as an argument
platformBrowserDynamic().bootstrapModule(AppModule);  // it refers to app.module.ts

