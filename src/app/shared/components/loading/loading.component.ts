import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading',
  standalone: true,
  imports: [],
  template: `
    <div class="z-3 position-absolute">
      <div class="card">
        <div class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <h1>Cargando...</h1>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class LoadingComponent {}
