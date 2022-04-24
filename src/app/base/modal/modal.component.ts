import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  images: string[] = [];
  config: any;
  dataModal: any;
  ngOnInit() {

    this.config = this.data.configModal;
    this.dataModal = this.data.dataModal;
    console.log(this.dataModal);

  }
  onSwiper(swiper) {
  }
  onSlideChange() {
  }
  onSelectFile(event): void {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.images.push(event.target.result);
          this.images.splice(5, 5);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  removeImage(i) {
    this.images.splice(i, 1);
  }
  handleEventDetail(ev) {
    if(ev == 'cancel') {
      this.dialogRef.close();
    }
    if(ev == 'save') {
      this.dialogRef.close({
        data: this.data.data
      })
    }
  }
}
