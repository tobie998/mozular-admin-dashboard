import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AppConfigService } from './services/app-config.service';
import { BaseThemeService } from './services/base-theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MOZULAR_ADMIN';
  subscription: Subscription;
  constructor(
    public translate: TranslateService,
    private appSettingsThemeService: BaseThemeService,
  ) {
    translate.addLangs(['en', 'vn']);
    translate.setDefaultLang('vn');
    const type = localStorage.getItem('translate');
    if (type) {
      translate.use(type);
    }
  }
  ngOnInit(): void {
    this.appSettingsThemeService.setInitValue();
  }
}
