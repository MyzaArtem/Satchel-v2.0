import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import Product from '../catalog/catalog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id = 0;

  selectedSize: string | null = null;

  onSizeClick(size: string) {
    if (size === this.selectedSize) {
      this.selectedSize = null;  
    } else {
      this.selectedSize = size;
    }

    console.log('Selected size:', this.selectedSize);
  }

  constructor( private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? +id : 0;

    const card = this.productService.getCardById(this.id);
    this.card = card ? card : this.card;
  }

  @Input() card: Product = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    imageObj: [{imageSrc: '', imageAlt: ''}],
    sizes: ['']
  }

}
