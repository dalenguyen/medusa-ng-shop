import { Route } from '@angular/router';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductsComponent } from './list/products.component';

export const PRODUCTS_ROUTES: Route[] = [
    { path: '', component: ProductsComponent },
    { path: ':id', component: ProductDetailComponent }
];