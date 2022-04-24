import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'colorbytext',
})
export class ColorbytextPipe implements PipeTransform {
  transform(str: string): string {
    let hash = 0;
    if (!str) {
      return '#fffff';
    }
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xff;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
}
@NgModule({
  declarations: [ColorbytextPipe],
  exports: [ColorbytextPipe],
})
export class ColorbytextPipeModule {}
