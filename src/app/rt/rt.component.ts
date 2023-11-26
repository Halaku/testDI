import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-rt',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <button routerLink="login">LOGOUT</button>
    <br>
    <br>
    <br>
    <router-outlet/>
  `,
  providers: [SharedService],
})
export class RtComponent {
  shared = inject(SharedService);
}
