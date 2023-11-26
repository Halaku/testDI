import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OrderComponent} from "./order/order.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: '**',
        redirectTo: 'order'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AwesomeProductModule { }
