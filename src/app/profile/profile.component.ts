import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from "../shared.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <p>profile works!</p>
    <button (click)="shared.add()">add</button>
    <div>value {{shared.value}}</div>

    <a routerLink="/">Dashboard</a>
  `
})
export class ProfileComponent {
shared = inject(SharedService)
}
