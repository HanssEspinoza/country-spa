import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './shared';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SidebarComponent, RouterOutlet],
  template: `
    <div class="row mt-4">
      <div class="col-3">
        <!-- Sidebar -->
        <shared-sidebar />
      </div>
      <div class="col">
        <!-- Pages -->
        <router-outlet />
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'country-app';
}
