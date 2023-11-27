import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnDestroy{

  value = 0;

  constructor() {
    console.log('SharedService init');
  }

  add() {
    this.value = this.value + 1;
  }

  ngOnDestroy(): void {
    console.log('SharedService destroy');
  }

}
