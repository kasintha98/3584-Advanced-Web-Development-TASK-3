import { Component } from '@angular/core';

class Person {
  constructor(public name: string, public age: number) {}
}

@Component({
  selector: 'app-example',
  standalone: true,
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  // simple typed properties
  count: number = 3;
  person: Person = new Person('Alice', 30);

  // calculated value based on properties
  get nextYearAge(): number {
    return this.person.age + 1;
  }

  // small helper method using typed input
  multiply(factor: number): number {
    return this.count * factor;
  }

  // string expression used in the template
  get greeting(): string {
    return `Hello, ${this.person.name}`;
  }
}
