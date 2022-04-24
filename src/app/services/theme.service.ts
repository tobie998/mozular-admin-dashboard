import { Injectable } from '@angular/core';
import { ReadJsonService } from './read-json.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private readJsonService: ReadJsonService
  ) { }
  updateTheme(url): void {
    this.readJsonService.getJSON(url).subscribe(data => {
      const keyNames = Object.keys(data);
      keyNames.forEach(key => {
        document.documentElement.style.setProperty(key, data[key]);
      });
  });
  }
}
