import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/shell/feature';
import './polyfills';

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
      ], { initialNavigation: 'enabledBlocking' })
    )
  ]
});
