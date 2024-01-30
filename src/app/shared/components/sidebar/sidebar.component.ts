import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <h2>Países</h2>
    <hr />

    <div class="list-group">
      <!-- <li routerLink="home" routerLinkActive="active" class="list-group-item">
        Home
      </li>
      <li routerLink="about" routerLinkActive="active" class="list-group-item">
        About
      </li>
      <li routerLink="contact" routerLinkActive="active" class="list-group-item">
        Contact
      </li> -->
      <li routerLink="countries/by-capital" routerLinkActive="active" class="list-group-item">
        Por capital
      </li>
      <li routerLink="countries/by-country" routerLinkActive="active" class="list-group-item">
        Por País
      </li>
      <li routerLink="countries/by-region" routerLinkActive="active" class="list-group-item">
        por Region
      </li>
    </div>
  `,
  styles: ``,
})
export class SidebarComponent {}
