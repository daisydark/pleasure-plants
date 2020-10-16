import { Injectable } from '@angular/core';
import { DiceService } from '../dice.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class YahtzeeService {

  turn = 0;

  sheet = {
    ones: {points: 0, locked: false},
    twos: {points: 0, locked: false},
    threes: {points: 0, locked: false},
    fours: {points: 0, locked: false},
    fives: {points: 0, locked: false},
    sixes: {points: 0, locked: false},

    threeOfAKind: {points: 0, locked: false},
    fourOfAKind: {points: 0, locked: false},
    fullHouse: {points: 0, locked: false},
    smallStraight: {points: 0, locked: false},
    largeStraight: {points: 0, locked: false},
    yahtzee: {points: 0, locked: false},
    chance: {points: 0, locked: false}
  };

  bonus = 0;
  total = 0;

  constructor(
    private diceService: DiceService
  ) {}

  calculate(): void {
    this.resetValues();

    let total = 0;
    const values = [0, 0, 0, 0, 0, 0];

    for (const dice of this.diceService.dices) {
      total += dice.getNumber();
      switch (dice.getNumber()) {
        case 1:
          values[0]++;
          break;
        case 2:
          values[1]++;
          break;
        case 3:
          values[2]++;
          break;
        case 4:
          values[3]++;
          break;
        case 5:
          values[4]++;
          break;
        case 6:
          values[5]++;
          break;
      }
    }

    let j = 1;
    for (const [field, value] of Object.entries(this.sheet)) {
      if (j <= 6 && ! value.locked) {
        const index = j - 1;
        this.sheet[field].points = values[index] * j;
      }
      j++;
    }

    let twoNumbers = 0;
    let threeNumbers = 0;
    let hasYahtzee = false;

    for (let i = 0; i < values.length; i++) {
      const value = values[i];

      if ( ! this.sheet.threeOfAKind.locked && value >= 3) {
        this.sheet.threeOfAKind.points = total;
      }

      if ( ! this.sheet.fourOfAKind.locked && value >= 4) {
        this.sheet.fourOfAKind.points = total;
      }

      if (value === 2 && i + 1 !== threeNumbers) {
        twoNumbers = i + 1;
      }

      if (value === 3 && i + 1 !== twoNumbers) {
        threeNumbers = i + 1;
      }

      if ( ! this.sheet.yahtzee.locked && value === 5) {
        this.sheet.yahtzee.points = 50;
        hasYahtzee = true;
      }

      if (value === 5) {
        hasYahtzee = true;
      }
    }

    if ( ! this.sheet.fullHouse.locked && twoNumbers > 0 && threeNumbers > 0) {
      this.sheet.fullHouse.points = 25;
    }

    if ( ! this.sheet.smallStraight.locked &&
        ((values[0] > 0 && values[1] > 0 && values[2] > 0 && values[3] > 0) ||
          (values[1] > 0 && values[2] > 0 && values[3] > 0 && values[4] > 0) ||
          (values[2] > 0 && values[3] > 0 && values[4] > 0 && values[5] > 0))) {
      this.sheet.smallStraight.points = 30;
    }

    if ( ! this.sheet.largeStraight.locked &&
      ((values[0] === 1 && values[1] === 1 && values[2] === 1 && values[3] === 1 && values[4] === 1) ||
        (values[1] === 1 && values[2] === 1 && values[3] === 1 && values[4] === 1 && values[5] === 1))) {
      this.sheet.largeStraight.points = 40;
    }

    if ( ! this.sheet.chance.locked) {
      this.sheet.chance.points = total;
    }

    if (this.sheet.yahtzee.locked && hasYahtzee) {
      for (const [field, value] of Object.entries(this.sheet)) {
          if ( ! value.locked) { this.sheet[field].points = 50; }
      }
    }

    this.calculateTotal();
  }

  calculateTotal(): void {

    let bonus = 0;
    let total = 0;

    let j = 6;
    for (const [field, value] of Object.entries(this.sheet)) {
      if (j <= 6) {
        if (value.locked) { bonus += value.points; }
      }
      if (value.locked) { total += value.points; }
      j++;
    }

    if (bonus >= 63) {
      this.bonus = 35;
    }

    this.total = total + this.bonus;
  }

  protected resetValues(): void {
    for (const [field, value] of Object.entries(this.sheet)) {
      if ( ! value.locked) { this.sheet[field].points = 0; }
    }
  }

  lock(field): void {
    this.sheet[field].locked = true;
  }

  finished(): boolean {
    let lockCount = 0;

    for (const [field, value] of Object.entries(this.sheet)) {
      if (value.locked) {
        lockCount++;
      }
    }

    return lockCount === Object.keys(this.sheet).length;
  }

  reset(): void {
    this.turn = 0;

    for (const [field, value] of Object.entries(this.sheet)) {
      this.sheet[field].points = 0;
      this.sheet[field].locked = false;
    }

    this.bonus = 0;
    this.total = 0;
  }
}
