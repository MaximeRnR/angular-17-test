import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter-plus-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-plus-one.component.html',
  styleUrls: ['./counter-plus-one.component.css']
})
export class CounterPlusOneComponent {


  constructor(private counterService: CounterService) { }

  increment() {
    this.counterService.counter.update(value => value + 1);
  }
}
