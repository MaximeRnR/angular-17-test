import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import {CounterPlusFiveComponent} from "./counter-plus-five/counter-plus-five.component";
import {CounterPlusOneComponent} from "./counter-plus-one/counter-plus-one.component";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CounterPlusFiveComponent,
    CounterPlusOneComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular-signals';

  constructor(private counterService: CounterService) {
  }

  counter = this.counterService.counter;
}
