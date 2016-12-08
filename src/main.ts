import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { ContactsModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ContactsModule); // Creates the platform and runs the bootstrapModule

/*
  Bootstrapping an Angular application
  1. Upgrade located DOM element into Angular component
  2. Create injector for the application
  3. Create (emulated) Shadow DOM on component host element
  4. Instantiates specified component
  5. Perform change detection
*/