import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from "../../shared.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template:`
    <p>awesome lazy product order works!</p>
    <button (click)="shared.add()">add</button>
    <div>value {{shared.value}}</div>

    <a routerLink="/">Dashboard</a>
  `
})
export class OrderComponent {
 shared = inject(SharedService)
}
