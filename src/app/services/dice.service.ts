import { Injectable } from '@angular/core';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { Dice } from '../classes/dice';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  dices: Dice[] = [];

  constructor() {}

  generate(count: number): void {
    for (let i = 1; i <= count; i++) {
      this.dices.push(new Dice(faDiceOne));
    }
  }

  roll(): Promise<any> {
    const promises = [];

    for (const dice of this.dices) {
      if ( ! dice.getLocked()) {
        promises.push(new Promise((resolve) => { resolve(dice.roll()); }));
      }
    }
    return Promise.all(promises);
  }

  reset(): void {
    this.dices = [];
  }

}
