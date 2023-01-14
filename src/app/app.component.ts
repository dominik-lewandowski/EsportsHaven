import {ApplicationRef, ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'eh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'EsportsHaven';

  constructor(private readonly appRef: ApplicationRef,
              private readonly translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  // With noop NgZone we need to manually trigger a change detection cycle in order to initiate lifecycle hooks
  triggerLifecycle(): void {
    this.appRef.tick();
  }
}
