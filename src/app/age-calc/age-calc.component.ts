import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-age-calc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './age-calc.component.html',
  styleUrls: ['./age-calc.component.scss']
})
export class AgeCalcComponent {
  age: number = 30;
  toDouble: number = 2;

  get nextYear(): number {
    return this.age + 1;
  }

  get doubled(): number {
    return this.toDouble * 2;
  }
}
