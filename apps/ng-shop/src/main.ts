import './polyfills';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {  RouterModule } from '@angular/router';

if (import.meta.env.PROD) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: 'products',
          loadChildren: () => import('./app/products/feature').then(m => m.PRODUCTS_ROUTES)
        }
      ], {initialNavigation: 'enabledBlocking'})
    )
  ]
});
