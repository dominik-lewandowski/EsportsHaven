import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'eh-nav-link',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
      <div class="navLink" [routerLink]="link" routerLinkActive="navLink--active">
          <div class="navLink__content">
              <ng-content></ng-content>
          </div>
      </div>
  `,
  styles: [`
    @use "../../../../styling/colors";
    @use "../../../../styling/variables";

    .navLink {
      height: min-content;
      cursor: pointer;
      outline: none;
      border: none;
      color: colors.$white;
      border-radius: 5px;
      padding: .375rem 0;
      padding-left: .5rem;
      width: 100%;
      transition: background-color variables.$animation-length-regular;

      &:hover {
        background-color: colors.$dark;
      }
    }

    .navLink--active {
      cursor: default;
      pointer-events: none;
      background: colors.$dark;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent {
  @Input() link!: string;
}
