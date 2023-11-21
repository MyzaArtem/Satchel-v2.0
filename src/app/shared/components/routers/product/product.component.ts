import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/core/services/product-service.service';
import Card from '../catalog/catalog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id = 0;

  constructor( private route: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? +id : 0;
    const card = this.productService.getCardById(this.id);
    this.card = card ? card : this.card;
  }

  @Input() card: Card = {
    id: 0,
    description: '',
    name: '',
    price: 0,
    imageUrl: ''
  }
}
