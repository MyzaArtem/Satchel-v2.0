import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Card from 'src/app/shared/components/routers/catalog/catalog.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = 'http://localhost:5139/api/WeatherRecord'; //URL API

  constructor(private http: HttpClient) { }

  cards: Card[] = [
    {
      id: 1,
      name: 'Шерстяной кардиган',
      price: 10000,
      description: '55',
      imageUrl: 'https://st1.tsum.com/sig/4c89183b705952d7806706132808cc75/width/1526/i/e5/32/dd/cb/e532ddcb-ffa0-3b1f-81f6-407e9c351d09.jpg'
    },
    {
      id: 2,
      name: 'Утепленная куртка',
      price: 100000,
      description: '55',
      imageUrl: 'https://st2.tsum.com/sig/a04a2e7f4e7663a7a9c03241d2003f8a/width/1526/i/36/2f/ee/7a/bd1a2bdb-8881-4339-afe0-e0dd64ef406d.jpg'
    },
    {
      id: 3,
      name: 'Хлопковый свитшот',
      price: 6500,
      description: '23',
      imageUrl: 'https://st2.tsum.com/sig/88ea96c883fb9ffe95fd4454f616eee4/width/1526/i/8e/4b/05/38/b670b3f4-d7bf-434a-8046-051e81acfa55.jpg'
    },
    {
      id: 4,
      name: 'Джинсы',
      price: 5000,
      description: '55',
      imageUrl: 'https://st1.tsum.com/sig/b7a9c0a2e77a55100e1425bd6082b618/width/1526/i/c5/7a/d4/11/76b5aca3-1c4a-4b98-9eb7-8bdfee2565f3.jpg'
    },
    {
      id: 5,
      name: 'Пуховый анорак',
      price: 70000,
      description: '55',
      imageUrl: 'https://st1.tsum.com/sig/797b5970b8607f5d3180ddf1b28dc145/width/1526/i/22/db/70/f3/1e3da1ff-f927-4b59-89df-d1f597f25043.jpg'
    },
    {
      id: 6,
      name: 'Свитер из шерсти и кашемира',
      price: 75000,
      description: '55',
      imageUrl: 'https://st2.tsum.com/sig/907c866ba3b7ea16c325df373c70a30a/width/1526/i/4b/07/a1/86/51646ffc-efcf-46ed-8030-3c4cae7e4619.jpg'
    },
  ];  

  getCardById(id: number): Card | undefined {
    return this.cards.find(card => card.id === id);
  }

  getAllCards(): Card[] {
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
