import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/models/product.model';
// import { CartService } from '../../core/services/cart.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product | null;
  selectedImage!: string;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    // private cartService: CartService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    if (productId) {
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
        console.log(this.product);
        this.selectedImage = this.product?.image;
        this.loading = false;
      });
    }
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }

  getStars(rating: number | undefined): number[] {
    return rating ? Array(Math.round(rating)).fill(0) : [];
  }

  addToCart(product: Product | null) {
    if (product) {
      // this.cartService.addToCart(product);
    }
  }
}
