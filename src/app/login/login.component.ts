import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [CommonModule, RouterLink],
  template: `
    <p>login works!</p>
    <button routerLink="/">LOGIN</button>
  `
})
export class LoginComponent {

}
