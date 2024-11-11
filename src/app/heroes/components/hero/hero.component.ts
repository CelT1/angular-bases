import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'guanchulo';
  public age:  number = 29;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeName() :void{
    this.name = 'Hood'
  }

  changeAge() :void{
    this.age = 39
  }

  resetForm() :void{
    this.name = 'guanchulo';
    this.age = 29;
  }

}
