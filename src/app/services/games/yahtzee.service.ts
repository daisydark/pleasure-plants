import { Injectable } from '@angular/core';
import { DiceService } from '../dice.service';

@Injectable({
  providedIn: 'root'
})
export class YahtzeeService {

  turn = 0;

  constructor(
    private diceService: DiceService
  ) {}


}
