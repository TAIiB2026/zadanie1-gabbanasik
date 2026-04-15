import { Component, Input,signal, computed } from '@angular/core';

@Component({
  selector: 'app-komponent2',
  standalone: false,
  templateUrl: './komponent2.component.html',
  styles: ``
})
export class Komponent2Component {
@Input() nazwaReaktora: string='';

  temperaturaSignal = signal(0);

  komunikatSignal = computed(() => {
    const temp = this.temperaturaSignal(); 
    if (temp < 16) return 'Rdzeń reaktora jest zimny, temperatura poniżej 16.';
    if (temp < 90) return 'Temperatura reaktora jest w normie od 16 do 90.';
    return 'Reaktor jest w stanie krytycznym powyżej 90.';
  });

  zwiekszTemperature() {
    if (this.temperaturaSignal() < 100) {
      this.temperaturaSignal.update(wartosc => wartosc + 10);
    }
  }
}
