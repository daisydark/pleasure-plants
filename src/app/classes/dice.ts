import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { timer } from 'rxjs';

export class Dice {

  private dices = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
  private locked = false;

  private timerSubscription;
  private periode;
  private rollTime;

  constructor(
    public faDice: any,
  ) {
    const periodes = [100, 150, 200];
    const rollTimes = [2, 3, 4];
    this.periode = periodes[Math.floor(Math.random() * periodes.length)];
    this.rollTime = rollTimes[Math.floor(Math.random() * rollTimes.length)];
  }

  roll(): Promise<any> {
    return new Promise((resolve) => {
      this.timerSubscription = timer(0, this.periode).subscribe(val => this.keepRolling(val), null, () => resolve(1));
    });
  }

  keepRolling(val): void {
    this.faDice = this.dices[Math.floor(Math.random() * this.dices.length)];
    if (val === this.rollTime) {
      this.timerSubscription.complete();
      this.timerSubscription.unsubscribe();
    }
  }

  getNumber(): number {
    switch (this.faDice.iconName) {
      case 'dice-one':
        return 1;
      case 'dice-two':
        return 2;
      case 'dice-three':
        return 3;
      case 'dice-four':
        return 4;
      case 'dice-five':
        return 5;
      case 'dice-six':
        return 6;
    }
  }

  setLocked(locked): void {
    this.locked = locked;
  }

  getLocked(): boolean {
    return this.locked;
  }
}
