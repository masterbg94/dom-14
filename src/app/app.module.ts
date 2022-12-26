import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./modules/home/home.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationMenuModule} from "./shared/components/navigation/navigation-menu.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {customMaterialModule} from "./shared/customMaterial.module";
import {FooterModule} from "./shared/components/footer/footer.module";
import {ObjectsService} from "./shared/services/object.service";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    customMaterialModule,
    HomeModule,
    NavigationMenuModule,
    FooterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }, defaultLanguage: 'sr'
    }),
    HttpClientModule
  ],
  providers: [ObjectsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
