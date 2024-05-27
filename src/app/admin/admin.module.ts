import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { AccordionDirective } from './shared/accordion/accordion.directive';
import { AccordionlinkDirective } from './shared/accordion/accordionlink.directive';
import { FullComponent } from './layouts/full/full.component';
import { AccordionanchorDirective } from './shared/accordion/accordionanchor.directive';
import { DemoMaterialModule } from '../demo-material-module';
import { SpinnerComponent } from './shared/spinner.component';
import { HeaderComponent } from './layouts/full/header/header.component';


@NgModule({
  declarations: [
    FullComponent,
    SidebarComponent,
    AccordionDirective,
    SpinnerComponent ,
    AccordionlinkDirective,
    AccordionanchorDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoMaterialModule
  ]
})
export class AdminModule { }
