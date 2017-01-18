import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

/*
 * AOT Compile
 */
//platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
