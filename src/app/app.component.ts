import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private cookieService: CookieService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    if (this.cookieService.get('language')) {
      this.translate.use(this.cookieService.get('language'));
    }
  }
}
