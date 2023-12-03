import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { carouselImage } from '../../carousel/carousel.component';

export default interface Product{
  id: number,
  name: string,
  description: string,
  // producrCategoryId: number,
  // productTypeId: number,
  price: number,
  imageObj: carouselImage[],
  sizes: string[]
  // brandTypeId: number,
  // genderTypeId: number
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.cards = this.productService.getAllCards();
  }

  goToProduct(id: number) {
    this.router.navigate(['catalog/product', id]);
  }

  formatNumber(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  
  getFormattedPrice(price: number) {
    return `${this.formatNumber(price)} ₽`; 
  }

  @Input() cards: Product[] = [
    
  ]
}
