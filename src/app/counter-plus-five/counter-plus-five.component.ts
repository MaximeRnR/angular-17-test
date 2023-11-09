import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-counter-plus-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-plus-five.component.html',
  styleUrls: ['./counter-plus-five.component.css']
})
export class CounterPlusFiveComponent {


  constructor(private counterService: CounterService) { }

  increment() {
    this.counterService.counter.update(value => value + 5);
  }
}
