import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-home',
  template: `<h1>Home</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Home { }