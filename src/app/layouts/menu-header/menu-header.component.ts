import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchModule } from './search/search.component';
import { UserProfileModule } from './user-profile/user-profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { HearderModel } from 'src/app/models/home/header.model';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent {
  @Input() option;
  @Output() callback = new EventEmitter<any>();
  hearder: HearderModel = new HearderModel()
  globals: Globals = this.basethemeService.getGlobalValue();
  listValue: Array<any>  = [];
  url='';

  constructor(private router: Router, private basethemeService: BaseThemeService, private authService: AuthService,) {
    router.events.subscribe((val) => {
      this.url = this.router.url;
      this.listValue = this.hearder.create;
      this.listValue.forEach(value => {
        if (this.url.includes(value.path)) {
          value.showId = true;
        }
      });
    });
    // this.globals.urlFolder =  AppConfigService.settings.apiImagesSource;

  }
  onChangeValueInputSearch = (value) => {
    this.callback.emit(value);
  };
  back(url) {
    this.router.navigateByUrl(url);
  }
  logout(): void {
    this.authService.onLogout();
  }
}
@NgModule({
  declarations: [MenuHeaderComponent],
  imports: [
    CommonModule,
    UserProfileModule,
    SearchModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [MenuHeaderComponent, UserProfileModule],
})
export class MenuHeaderModule {}
