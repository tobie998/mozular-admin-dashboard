import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Globals } from 'src/app/models/global/global';
import { Core } from 'src/app/models/home/core.model';
import { UserDetail } from 'src/app/models/home/user.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { CoreService } from 'src/app/services/core.service';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  globals: Globals = this.basethemeService.getGlobalValue();
  constructor(private basethemeService: BaseThemeService, private coreService: CoreService, public dialog: MatDialog) { }
  /**
   * check mode header 
   * status: true => mode search
   * status: true => mode normal
   */
  status = false;
  listData: Core[] = [];
  text = '';
  ngOnInit(): void {
    this.searchInvoice('');
  }
  searchInvoice(text: string) {
    this.text = text;
    this.listData = [];
    this.coreService.searchInvoices({ term: text }).subscribe(res => {
      this.listData = res.Items;
      const list = res.Users.Items;
      this.listData.forEach(element => {
        // element.total = element.subtotal
        element.created_date = element.created_date.substring(0, 19);
        element.active = element.cart_meta.includes('CONFIRM')??false;
        element.user = list.find(item => item.user_id === element.user_id);
      });
      console.log(this.listData, res);
    })
  }
  search(data: any) {
    if (data.type === 'search') {
      this.searchInvoice(data.value);
    }
  }
  active(data) {
    console.log(data);
    this.openCon(data);

    // this.coreService.getInvoiceInfo({invoice_number:data.invoice_number}).subscribe(res => {
    // });
    
  }
  openCon(data) {
    const dialogRef = this.dialog.open(ModalConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.type === true) {
        this.coreService.confirmInvoice({invoice_number: data.invoice_number}).subscribe(res => {
          this.searchInvoice(this.text);
        });
      }
    });
  }

}
