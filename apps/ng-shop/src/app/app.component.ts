import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
   <h1>Medusa Shop</h1>
   <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
