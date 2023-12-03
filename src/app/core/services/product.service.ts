import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from 'src/app/shared/components/routers/catalog/catalog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5139/api/WeatherRecord'; //URL API

  constructor(private http: HttpClient) { }

  imageAlt = '';

  cards: Product[] = [
    {
      id: 1,
      name: 'Шерстяной кардиган',
      price: 10000,
      description: '55',
      imageObj: [{imageSrc: 'https://st.tsum.com/btrx/i/13/21/72/62/01_1526.jpg?u=1678483944', imageAlt: this.imageAlt},
       { imageSrc: 'https://st.tsum.com/btrx/i/13/21/72/62/03_1526.jpg?u=1678483944', imageAlt: this.imageAlt}],
      sizes: ['M', 'S', 'XS', 'XXL', 'L']
    },
    {
      id: 2,
      name: 'Шерстяное пальто',
      price: 338500,
      description: '55',
      imageObj: [{imageSrc: 'https://st2.tsum.com/sig/48260fafe9731c0c8dc16722848b9d79/width/1526/i/1a/df/f5/af/bd2e0580-82bb-49a5-ad43-ae3df11d6fc6.jpg', imageAlt: this.imageAlt},
       { imageSrc: 'https://st1.tsum.com/sig/1734dd0a203943a9d12aa20ac2dfc158/width/1526/i/1a/df/f5/af/1ed15796-b3cd-491c-b5ca-a3f3895fcf77.jpg', imageAlt: this.imageAlt}],
      sizes: ['M']
    },
    {
      id: 3,
      name: 'Свитер',
      price: 65300,
      description: '55',
      imageObj: [{imageSrc: 'https://st1.tsum.com/sig/b254f22c493c5f0ffaf2a031b163c19b/width/1526/i/49/36/01/58/dcec0f6e-fbbd-49b4-aeaa-085835944a2d.jpg', imageAlt: this.imageAlt},
       { imageSrc: 'https://st2.tsum.com/sig/48174281f7869c7147228070aea05bcc/width/1526/i/49/36/01/58/b661c53e-582c-4aad-a169-2068e77d5845.jpg', imageAlt: this.imageAlt}],
      sizes: ['M']
    },

  ];  

  getImageAlt(product : Product): string {
    return product.name;
  }

  getCardById(id: number): Product | undefined {
    return this.cards.find(card => card.id === id);
  }

  getAllCards(): Product[] {
    return this.cards;
  } 
//   getWeatherRecords(): Observable<any> {
//     return this.http.get(${this.apiUrl});
//   }

//   uploadWeatherArchive(files: FileList): Observable<any> {
//     const formData = new FormData();

//     for (let i = 0; i < files.length; i++) {
//       formData.append('files', files[i], files[i].name);
//     }

//     return this.http.post(${this.apiUrl}/upload, formData);
//   }

//   deleteAllWeatherRecords(): Observable<any> {
//     return this.http.delete(${this.apiUrl}, {});
//   }
}
