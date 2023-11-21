import { Component, Input } from '@angular/core';

interface carouselImage {
  imageSrc: string,
  imageAlt: string
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  @Input() images: carouselImage[] = []
  @Input() indicators = true
  @Input() controls = true 
  @Input() autoslide = true
  @Input() slideInterval = 3000

  selectedIndex = 0;

  ngOnInit(): void{
    if(this.autoslide){
      this.autoSlideImage()
    }
  }

  autoSlideImage(): void{
    setInterval(() => {
      this.onNextClick()
    }, this.slideInterval)
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0
    } else{
      this.selectedIndex++
    }
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }
}
