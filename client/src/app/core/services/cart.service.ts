// src/app/core/services/cart.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Product, CartItem } from '../../core/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  // Observable pour suivre le panier
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  // Observable pour le total d'articles (badge menu)
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() { }

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(product: Product, quantity: number = 1): void {
    const existingItem = this.items.find(i => i.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }

    this.updateCartState();
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.updateCartState();
  }

  clearCart(): void {
    this.items = [];
    this.updateCartState();
  }

  private updateCartState(): void {
    this.cartItemsSubject.next([...this.items]); // on émet une copie
    this.cartCountSubject.next(
      this.items.reduce((total, item) => total + item.quantity, 0)
    );
  }
}
