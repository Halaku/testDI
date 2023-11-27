import {Component, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
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
export class RtComponent implements OnDestroy{
  constructor() {
    console.log('Root component init');
  }

  ngOnDestroy(): void {
    console.log('Root component destroy');
  }
}
