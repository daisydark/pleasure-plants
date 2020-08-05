import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { Dice } from '../../../classes/dice';
import { DiceService } from '../../../services/dice.service';
import { YahtzeeService } from '../../../services/games/yahtzee.service';

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;
  dices: Dice[] = this.diceService.dices;
  lockSubmit = false;
  buttonDisabled = true;

  lockForm = new FormGroup({
    lock0: new FormControl({value: null, disabled: true}),
    lock1: new FormControl({value: null, disabled: true}),
    lock2: new FormControl({value: null, disabled: true}),
    lock3: new FormControl({value: null, disabled: true}),
    lock4: new FormControl({value: null, disabled: true})
  });

  constructor(
    public diceService: DiceService,
    public yahtzeeService: YahtzeeService
  ) { }

  ngOnInit(): void {
    this.diceService.generate(5);
  }

  lock(dice, event): void {
    this.dices[dice].setLocked(event.target.checked);
  }

  reset(): void {
    this.lockForm.setValue({
      lock0: false,
      lock1: false,
      lock2: false,
      lock3: false,
      lock4: false
    });
    this.yahtzeeService.turn = 0;
    this.buttonDisabled = true;
    this.lockForm.disable();

    for (const dice of this.diceService.dices) {
      dice.setLocked(false);
    }

    this.lockSubmit = false;
  }

  onSubmit(): void {
    this.yahtzeeService.turn++;
    this.lockSubmit = true;
    this.diceService.roll().then((value) => {
      this.yahtzeeService.calculate();
      if (this.yahtzeeService.turn < 3) {
        this.lockSubmit = false;
        this.lockForm.enable();
      } else {
        this.lockForm.disable();
      }
      if (this.yahtzeeService.turn > 0) {
        this.buttonDisabled = false;
      } else {
        this.buttonDisabled = true;
      }
    });
  }

  checkLock(box): void {
    if (this.lockForm.enabled) {
      const locked = this.lockForm.get('lock' + box).value === true ? false : true;
      this.lockForm.get('lock' + box).setValue(locked);
      this.dices[box].setLocked(locked);
    }
  }

  select(dice, event): void {
    event.target.remove();
    this.yahtzeeService.lock(dice);
    this.yahtzeeService.calculateTotal();
    this.reset();
  }
}
