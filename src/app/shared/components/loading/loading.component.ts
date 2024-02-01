import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading',
  standalone: true,
  imports: [],
  template: `
    <div class="overlay">
      <div class="position-relative">
        <div class="card">
          <div class="text-center p-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h1>Cargando...</h1>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(74, 74, 74, .8);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }`,
})
export class LoadingComponent {}
