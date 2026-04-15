import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-standalone',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './lista-standalone.component.html',
  styles: ``
})
export class ListaStandaloneComponent {
  elementy: string[] = [
    'ListaStandaloJeden',
    'ListaStandaloDwa',
    'ListaStandaloTrzy',
    'ListaStandaloCztery              '
  ];
}
