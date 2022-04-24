import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/app/models/global/global';
import { Core } from 'src/app/models/home/core.model';
import { UserDetail } from 'src/app/models/home/user.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  globals: Globals = this.basethemeService.getGlobalValue();
  constructor(private basethemeService: BaseThemeService, public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close({ type: false });
  }
  active() {
    this.dialogRef.close({ type: true });

  }
}
