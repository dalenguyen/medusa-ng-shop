import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
   <h1>Medusa Shop</h1>
  `,
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
