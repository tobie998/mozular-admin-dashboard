import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { AuthService } from 'src/app/services/auth.service';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent implements OnInit {
  @ViewChild('input0') input0Element: ElementRef;
  @ViewChild('input1') input1Element: ElementRef;
  @ViewChild('input2') input2Element: ElementRef;
  @ViewChild('input3') input3Element: ElementRef;
  @ViewChild('input4') input4Element: ElementRef;
  @ViewChild('input5') input5Element: ElementRef;
  @Input() email = '';
  @Output() codeCallBack = new EventEmitter();
  focusInput = 0;
  textEmail = '';
  globals: Globals = new Globals();
  constructor(
    private basethemeService: BaseThemeService,
    private router: Router,
    private authService: AuthService
  ) {
    this.globals = this.basethemeService.getGlobalValue();
  }
  time = 30;
  // success = false;
  code: Array<string> = new Array(6);
  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    // if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 67)
    //     console.log('CTRL + C');
    if (($event.ctrlKey || $event.metaKey) && $event.keyCode == 86) {
      setTimeout(() => {
        console.log('CTRL +  V', $event, this.code[0]);
        let value = this[`input${this.focusInput-1}Element`].nativeElement.value;
        let text = value > 6?value.substring(1, 7):value;
        this.code = [
          (text.length > 0)?text[0]: '',
          (text.length > 1)?text[1]: '',
          (text.length > 2)?text[2]: '',
          (text.length > 3)?text[3]: '',
          (text.length > 4)?text[4]: '',
          (text.length > 5)?text[5]: '',
        ];
        this.focusInput = 0;
        this[`input${this.focusInput}Element`].nativeElement.focus();
      }, 100);
    }
    if ($event.keyCode == 37 && this.focusInput !== 0) {
      this.focusInput--;
      this[`input${this.focusInput}Element`].nativeElement.focus();
      // let strLength = this.code[this.focusInput].length;
      // this[`input${this.focusInput}Element`].nativeElement.setSelectionRange(
      //   strLength,
      //   strLength
      // );
    }
    if ($event.keyCode == 39 && this.focusInput !== 4) {
      this.focusInput++;

      console.log($event);

      this[`input${this.focusInput}Element`].nativeElement.focus();
      // let strLength = this.code[this.focusInput].length;
      // this[`input${this.focusInput}Element`].nativeElement.setSelectionRange(
      //   strLength,
      //   strLength
      // );
    }
  }
  ngOnInit(): void {
    let index = this.email.indexOf('@');
    let length = this.email.length;
    this.textEmail =
      this.textEmail.slice(0, 2) +
      '*****' +
      this.textEmail.slice(index - 2, length);
    setTimeout(() => {
      this.input0Element.nativeElement.focus();
    }, 0);
    setInterval(() => {
      if (this.time !== 0) {
        this.time--;
      }
    }, 1000);
  }
  channgeFocus(type: number) {
    if (this.code[type - 1] !== '') {
      this.focusInput = type;
      this[`input${type}Element`].nativeElement.focus();
    } else {
    }
  }
  back(text) {
    this.router.navigate([text]);
  }
  confirm() {
    this.codeCallBack.emit(this.code.join(''));
  }
}
