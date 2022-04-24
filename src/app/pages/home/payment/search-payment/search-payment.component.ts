import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-search-payment',
  templateUrl: './search-payment.component.html',
  styleUrls: ['./search-payment.component.scss'],
})
export class SearchPaymentComponent implements OnInit {
  @Output() callback = new EventEmitter();
  constructor(private basethemeService: BaseThemeService) {}
  /**
   * check mode header
   * status: true => mode search
   * status: true => mode normal
   */
  status = false;
  textSearch = '';
  globals: Globals = this.basethemeService.getGlobalValue();
  ngOnInit(): void {
    console.log(this.status);
    
  }
  changeStatus() {
    this.status = !this.status;
  }
  search() {
    console.log(this.textSearch);
    this.callback.emit({
      type: 'search', 
      value: this.textSearch
    })
  }
}
