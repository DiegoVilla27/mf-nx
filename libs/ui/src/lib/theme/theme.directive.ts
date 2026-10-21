import { Directive, ElementRef, effect, inject, input } from '@angular/core';
import { ThemeTokens } from './theme-tokens';

const DEFAULT_TOKENS: ThemeTokens = {
  primary: 'oklch(60.6% 0.25 292.717)',
  secondary: 'oklch(69.6% 0.17 162.48)'
}

@Directive({
  selector: '[theme]',
  standalone: true,
})
export class ThemeDirective {
  public readonly tokens = input<ThemeTokens>(DEFAULT_TOKENS);
  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    effect(() => {
      const tokens = this.tokens();

      const style = this.el.nativeElement.style;
      if (tokens.primary) style.setProperty('--color-primary', tokens.primary);
      if (tokens.secondary) style.setProperty('--color-secondary', tokens.secondary);
    });
  }
}
