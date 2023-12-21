import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './contact/contact.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [HeroSliderComponent, ContactComponent, TitleComponent],
  imports: [CommonModule, CarouselModule],
  exports: [HeroSliderComponent],
})
export class ComponentsModule {}
