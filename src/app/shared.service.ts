import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  value = 0;

  constructor() {
    console.log('inited');
  }

  add() {
    this.value = this.value + 1;
  }

}