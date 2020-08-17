import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu: boolean;
  contentClass: string;

  constructor(
    public translate: TranslateService,
    private cookieService: CookieService,
    public breakpointObserver: BreakpointObserver
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    if (this.cookieService.get('language')) {
      this.translate.use(this.cookieService.get('language'));
    }

    this.breakpointObserver.observe('(min-width: 992px)').subscribe(result => {
      this.showMenu = result.matches;
      this.contentClass = result.matches ? 'col-10' : 'col-12';
    });
  }
}
