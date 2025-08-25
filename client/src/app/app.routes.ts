import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent)
    },
    {
        path: 'product/:productId',
        loadComponent: () => import('./features/product-details/product-details.component').then(m => m.ProductDetailsComponent)
    },
    {
        path: 'cart',
        loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/auth.component').then(m => m.AuthComponent)
    }
];
