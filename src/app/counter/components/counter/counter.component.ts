import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador: {{counter}}</h3>

    <button (click)="increaseBy(1)"> +1 </button>
    <button (click)="resetCount()"> Reset </button>
    <button (click)="increaseBy(-1)"> -1 </button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
  }

  resetCount(): void {
    this.counter = 10
  }
}
