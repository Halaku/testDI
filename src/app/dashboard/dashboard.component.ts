import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from "../shared.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <p>dashboard works!</p>
    <button (click)="shared.add()">add</button>
    <div>value {{shared.value}}</div>

    <a routerLink="profile">Profile</a>
    <a routerLink="awesome">Awesome lazy product!</a>
  `
})
export class DashboardComponent {
  shared = inject(SharedService)
}
