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

          <div class="navLink__line">
          </div>
      </div>
  `,
  styles: [`
    @use "../../../../styles/colors";

    .navLink {
      width: min-content;
      height: min-content;
      cursor: pointer;
      outline: none;
      border: none;
      color: colors.$white;
      font-weight: 500;

      &:hover {
        .navLink__line {
          width: 100%;
        }
      }
    }

    .navLink__line {
      cursor: pointer;
      width: 0;
      height: 2px;
      margin-bottom: -2px;
      margin-top: 2px;
      background-color: colors.$primary-lightest;
      transition: width .2s;
    }

    .navLink--active {
      cursor: default;
      pointer-events: none;

      .navLink__line {
        width: 100%;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent {
  @Input() link!: string;
}
