import {APP_INITIALIZER, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConfigInterface } from '../models/global/AppConfigInterface';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  static settings: AppConfigInterface;

  constructor(private http: HttpClient) {

  }

  loadSetting() {
    const jsonFile = 'assets/environments/app-config.json';
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: AppConfigInterface) => {
        AppConfigService.settings = response as AppConfigInterface;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load config file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
export function ConfigFactory(config: AppConfigService) {
  return () => config.loadSetting();
}

export function init() {
  return {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [AppConfigService],
      multi: true
  }
}

const ConfigModule = {
  init: init
}

export { ConfigModule };