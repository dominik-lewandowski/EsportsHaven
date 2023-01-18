import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavLinkComponent} from '~atoms/nav-link/nav-link.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'eh-side-nav',
  standalone: true,
  imports: [CommonModule, NavLinkComponent, TranslateModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  // TODO
  user = {
    id: 69
  }
}
