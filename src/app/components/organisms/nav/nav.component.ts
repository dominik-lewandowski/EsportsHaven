import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NavLinkComponent} from '~atoms/nav-link/nav-link.component';

@Component({
  standalone: true,
  selector: "eh-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslateModule, NavLinkComponent]
})
export class NavComponent {

}
