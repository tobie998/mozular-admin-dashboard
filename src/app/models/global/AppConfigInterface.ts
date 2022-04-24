enum Languages {en, ja}

export interface AppConfigInterface {
  readonly production: boolean;
  readonly apiUrl: string;
  readonly imgUrl: string;
  readonly socketUrl: string;
  readonly defaultLanguage: string;
  readonly supportedLanguages: Languages;
  readonly sentryDSN: string;
  readonly homeUrl: string;
  readonly homeUrlBefore: string;
  readonly themeColors: string;
  // readonly themeColors2: string;
  readonly apiImagesSource:string;
  readonly userPoolId:string;
  readonly clientId:string;
  readonly modUrl: string;
  readonly carUrl: string;
  readonly proUrl: string;

}
