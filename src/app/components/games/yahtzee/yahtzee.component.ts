import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { Dice } from '../../../classes/dice';
import { DiceService } from '../../../services/dice.service';
import { YahtzeeService } from '../../../services/games/yahtzee.service';
import {TranslateService} from '@ngx-translate/core';

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
  showMessage = true;
  hiddenBtn = [];

  lockForm = new FormGroup({
    lock0: new FormControl({value: null, disabled: true}),
    lock1: new FormControl({value: null, disabled: true}),
    lock2: new FormControl({value: null, disabled: true}),
    lock3: new FormControl({value: null, disabled: true}),
    lock4: new FormControl({value: null, disabled: true})
  });

  constructor(
    public diceService: DiceService,
    public yahtzeeService: YahtzeeService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.newGame();
  }

  lock(dice, event): void {
    this.dices[dice].setLocked(event.target.checked);
  }

  resetRoll(): void {
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
    this.hiddenBtn.push(event.target);
    event.target.setAttribute('style', 'display:none');
    this.yahtzeeService.lock(dice);
    this.yahtzeeService.calculateTotal();
    this.resetRoll();

    if (this.yahtzeeService.finished()) {
      this.showMessage = false;
    } else {
      this.lockSubmit = false;
    }
  }

  getRollsLeft(): string {
      const left = 3 - this.yahtzeeService.turn;
      return left === 1 ? left + ' ' + this.translate.instant('Yahtzee.0.RollLeft') : left + ' ' + this.translate.instant('Yahtzee.0.RollsLeft');
  }

  getTotal(): string {
    return this.yahtzeeService.total.toString();
  }

  newGame(): void {
    this.diceService.reset();
    this.diceService.generate(5);
    this.yahtzeeService.reset();

    this.dices = this.diceService.dices;
    this.lockSubmit = false;
    this.buttonDisabled = true;
    this.showMessage = true;
    this.lockForm.reset();

    for (const btn of this.hiddenBtn) {
      btn.setAttribute('style', 'display:inline');
    }

    this.hiddenBtn = [];
  }
}
