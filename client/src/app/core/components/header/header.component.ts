import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../../services/cart.service';
import { MatBadgeModule } from '@angular/material/badge';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule, MatIconModule, FormsModule, MatInputModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  search: string = '';
  cartCount = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
      console.log(this.cartCount);

    });
  }

}
