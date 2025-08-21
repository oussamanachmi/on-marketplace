import { Component } from '@angular/core';
import { Product, ProductsService } from '../../core/services/products.service';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AsyncPipe, CurrencyPipe, } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    CurrencyPipe,
    RouterModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  standalone: true,
})
export class ProductsComponent {
  products$!: Observable<Product[]>;
  search: string = '';


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getAllProducts();
  }
}
