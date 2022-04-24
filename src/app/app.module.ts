import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LoaderModule } from './base/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { APIInterceptor } from './utils/interceptors/api.interceptor';
import { AuthGuard } from './utils/interceptors/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { Globals } from './models/global/global';
import { AppConfigService, ConfigModule } from './services/app-config.service';


export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        LoaderModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
            // useFactory: () => appConfig.loadSetting()
        },
        AppConfigService,
        ConfigModule.init(),
        CookieService,
        AuthGuard,
        LoaderService,
        Globals
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
