import { Component, OnInit } from '@angular/core';
import { TranslateService} from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";
import { faLeaf, faDna, faUserCircle, faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faLeaf = faLeaf;
  faDna = faDna;
  faUserCircle = faUserCircle;
  faDice = faDice;

  constructor(
    public translate: TranslateService,
    protected cookieService: CookieService
  ) { }

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    this.cookieService.set('language', lang, 60*60*24*365, '/');
  }
}
