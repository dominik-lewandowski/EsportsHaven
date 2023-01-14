import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TitleStrategy} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageTitleStrategy} from './_core/utils/page-title-strategy/page-title-strategy';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "en"
    })
  ],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
