import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from '../Modules/home/home.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule, HomeModule, ComponentsModule],
})
export class LayoutModule {}
