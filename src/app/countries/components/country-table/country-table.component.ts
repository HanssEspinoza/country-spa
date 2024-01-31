import { Component, Input } from '@angular/core';
import { Country } from '../../models';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [DecimalPipe],
  template: `
    @if(countries.length === 0) {
    <div class="alert alert-warning text-center">
      No hay países para mostrar
    </div>
    } @else {
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Icono</th>
          <th>Bandera</th>
          <th>Nombre</th>
          <th>Capital</th>
          <th>Población</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        @for(country of countries; track country; let i = $index) {
        <tr>
          <td>{{ i + 1 }}</td>
          <td>{{ country.flag }}</td>
          <td><img [src]="country.flags.svg" [alt]="country.flags.alt" /></td>
          <td>{{ country.name.common }}</td>
          <td>{{ country.capital }}</td>
          <td>{{ country.population | number }}</td>
          <td><a href="">Ver Más</a></td>
        </tr>
        }
      </tbody>
    </table>
    }
  `,
  styles: `
  img {
    width: 25px;
  }
  `,
})
export class CountryTableComponent {
  @Input()
  countries: Country[] = [];
}
