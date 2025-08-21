import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent)
    },
    {
        path: 'product/:productId',
        loadComponent: () => import('./features/product-details/product-details.component').then(m => m.ProductDetailsComponent)
    }
];
