import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Globals } from 'src/app/models/global/global';
import { Core } from 'src/app/models/home/core.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.scss'],
})
export class ListPaymentComponent implements OnInit {
  constructor(private basethemeService: BaseThemeService) { }
  @Input() dataInput:any = [];
  @Output() callback = new EventEmitter();
  globals: Globals = this.basethemeService.getGlobalValue();
  ngOnInit(): void { }
  active(data: any) {
    console.log(data);
    this.callback.emit(data);
    
  }
}
