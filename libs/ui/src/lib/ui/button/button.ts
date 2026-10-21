import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'selector-name',
  template: `
  <button
    class="bg-primary text-white hover:opacity-90 px-4 py-2 font-medium transition-all rounded-token shadow-sm"
  >
    <ng-content />
  </button>
  `
})

export class Button { }