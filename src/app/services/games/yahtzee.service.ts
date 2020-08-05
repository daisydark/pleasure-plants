import { Injectable } from '@angular/core';
import { DiceService } from '../dice.service';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class YahtzeeService {

  turn = 0;

  ones = 0;
  onesLocked = false;
  twos = 0;
  twosLocked = false;
  threes = 0;
  threesLocked = false;
  fours = 0;
  foursLocked = false;
  fives = 0;
  fivesLocked = false;
  sixes = 0;
  sixesLocked = false;

  threeOfAKind = 0;
  threeOfAKindLocked = false;
  fourOfAKind = 0;
  fourOfAKindLocked = false;
  fullHouse = 0;
  fullHouseLocked = false;
  smallStraight = 0;
  smallStraightLocked = false;
  largeStraight = 0;
  largeStraightLocked = false;
  yahtzee = 0;
  yahtzeeLocked = false;
  chance = 0;
  chanceLocked = false;

  bonus = 0;
  total = 0;

  constructor(
    private diceService: DiceService,
    public translate: TranslateService
  ) {}

  getRollsLeft(): string {
    const left = 3 - this.turn;
    return left === 1 ? left + ' ' + this.translate.instant('Yahtzee.0.RollLeft') : left + ' ' + this.translate.instant('Yahtzee.0.RollsLeft');
  }

  calculate(): void {
    this.reset();

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

    if ( ! this.onesLocked) { this.ones = values[0]; }
    if ( ! this.twosLocked) { this.twos = values[1] * 2; }
    if ( ! this.threesLocked) { this.threes = values[2] * 3; }
    if ( ! this.foursLocked) { this.fours = values[3] * 4; }
    if ( ! this.fivesLocked) { this.fives = values[4] * 5; }
    if ( ! this.sixesLocked) { this.sixes = values[5] * 6; }

    let twoNumbers = 0;
    let threeNumbers = 0;

    for (let i = 0; i < values.length; i++) {
      const value = values[i];

      if ( ! this.threeOfAKindLocked && value >= 3) {
        this.threeOfAKind = total;
      }

      if ( ! this.fourOfAKindLocked && value >= 4) {
        this.fourOfAKind = total;
      }

      if (value === 2 && i + 1 !== threeNumbers) {
        twoNumbers = i + 1;
      }

      if (value === 3 && i + 1 !== twoNumbers) {
        threeNumbers = i + 1;
      }

      if ( ! this.yahtzeeLocked && value === 5) {
        this.yahtzee = 50;
      }
    }

    if ( ! this.fullHouseLocked && twoNumbers > 0 && threeNumbers > 0) {
      this.fullHouse = 25;
    }

    if ( ! this.smallStraightLocked &&
        ((values[0] > 0 && values[1] > 0 && values[2] > 0 && values[3] > 0) ||
          (values[1] > 0 && values[2] > 0 && values[3] > 0 && values[4] > 0) ||
          (values[2] > 0 && values[3] > 0 && values[4] > 0 && values[5] > 0))) {
      this.smallStraight = 30;
    }

    if ( ! this.smallStraightLocked &&
      ((values[0] === 1 && values[1] === 1 && values[2] === 1 && values[3] === 1 && values[4] === 1) ||
        (values[1] === 1 && values[2] === 1 && values[3] === 1 && values[4] === 1 && values[5] === 1))) {
      this.largeStraight = 40;
    }

    if ( ! this.chanceLocked) {
      this.chance = total;
    }

    this.calculateTotal();
  }

  protected calculateBonus(): void {
    let bonus = 0;

    if (this.onesLocked) { bonus += this.ones; }
    if (this.twosLocked) { bonus += this.twos; }
    if (this.threesLocked) { bonus += this.threes; }
    if (this.foursLocked) { bonus += this.fours; }
    if (this.fivesLocked) { bonus += this.fives; }
    if (this.sixesLocked) { bonus += this.sixes; }

    if (bonus >= 63) {
      this.bonus = 35;
    }
  }

  calculateTotal(): void {
    this.calculateBonus();

    let total = 0;

    if (this.onesLocked) { total += this.ones; }
    if (this.twosLocked) { total += this.twos; }
    if (this.threesLocked) { total += this.threes; }
    if (this.foursLocked) { total += this.fours; }
    if (this.fivesLocked) { total += this.fives; }
    if (this.sixesLocked) { total += this.sixes; }

    if (this.threeOfAKindLocked) { total += this.threeOfAKind; }
    if (this.fourOfAKindLocked) { total += this.fourOfAKind; }
    if (this.fullHouseLocked) { total += this.fullHouse; }
    if (this.smallStraightLocked) { total += this.smallStraight; }
    if (this.largeStraightLocked) { total += this.largeStraight; }
    if (this.yahtzeeLocked) { total += this.yahtzee; }
    if (this.chanceLocked) { total += this.chance; }

    this.total = total;
  }

  protected reset(): void {
    if ( ! this.onesLocked) { this.ones = 0; }
    if ( ! this.twosLocked) { this.twos = 0; }
    if ( ! this.threesLocked) { this.threes = 0; }
    if ( ! this.foursLocked) { this.fours = 0; }
    if ( ! this.fivesLocked) { this.fives = 0; }
    if ( ! this.sixesLocked) { this.sixes = 0; }

    if ( ! this.threeOfAKindLocked) { this.threeOfAKind = 0; }
    if ( ! this.fourOfAKindLocked) { this.fourOfAKind = 0; }
    if ( ! this.fullHouseLocked) { this.fullHouse = 0; }
    if ( ! this.smallStraightLocked) { this.smallStraight = 0; }
    if ( ! this.largeStraightLocked) { this.largeStraight = 0; }
    if ( ! this.yahtzeeLocked) { this.yahtzee = 0; }
    if ( ! this.chanceLocked) { this.chance = 0; }
  }

  lock(dice): void {
    switch (dice) {
      case 'ones':
        this.onesLocked = true;
        break;
      case 'twos':
        this.twosLocked = true;
        break;
      case 'threes':
        this.threesLocked = true;
        break;
      case 'fours':
        this.foursLocked = true;
        break;
      case 'fives':
        this.fivesLocked = true;
        break;
      case 'sixes':
        this.sixesLocked = true;
        break;
      case 'threeOfAKind':
        this.threeOfAKindLocked = true;
        break;
      case 'fourOfAKind':
        this.fourOfAKindLocked = true;
        break;
      case 'fullHouse':
        this.fullHouseLocked = true;
        break;
      case 'smallStraight':
        this.smallStraightLocked = true;
        break;
      case 'largeStraight':
        this.largeStraightLocked = true;
        break;
      case 'yahtzee':
        this.yahtzeeLocked = true;
        break;
      case 'chance':
        this.chanceLocked = true;
        break;
    }
  }
}
