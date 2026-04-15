import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-komponent2',
  standalone: false,
  templateUrl: './komponent2.component.html',
  styles: ``
})
export class Komponent2Component {
@Input() nazwaReaktora: string='';//Przyjecie nazwy od rodzica

temperatura: number = 0;

  zwiekszTemperature() {
    if (this.temperatura < 100) {
      this.temperatura += 10;
    }
  }
}
