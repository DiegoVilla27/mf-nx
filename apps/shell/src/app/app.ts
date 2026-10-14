import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="users">Users</a></li>
    <li><a routerLink="products">Products</a></li>
  </ul>
  <router-outlet/>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App { }
