import { Component, OnInit } from '@angular/core';
import { faQuestionCircle, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  faDiceOne = faDiceOne;
  faDiceTwo = faDiceTwo;
  faDiceThree = faDiceThree;
  faDiceFour = faDiceFour;
  faDiceFive = faDiceFive;
  faDiceSix = faDiceSix;

  dice1;

  lockForm = new FormGroup({
    lock1: new FormControl(false),
    lock2: new FormControl(false),
    lock3: new FormControl(false),
    lock4: new FormControl(false),
    lock5: new FormControl(false)
  });

  constructor() { }

  ngOnInit(): void {

  }

  unlock() {
    this.lockForm.setValue({
      lock1: false,
      lock2: false,
      lock3: false,
      lock4: false,
      lock5: false
    });
  }

  onSubmit() {

  }

}
