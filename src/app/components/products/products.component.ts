import { Component } from '@angular/core';
import { GetProductsService } from '../../core/services/get-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productsService: GetProductsService) {}

  ngOnInit() {
    
    this.productsService.getProducts().subscribe((response) => {
      console.log(response);
    });
    
  }

}
