import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};

//NOTE: we needed to add provideHttpClient() to use HttpClient
//This was CONFUSING... the error did say we were missing a provider for it, but that didn't really mean anything to me until we looked into it