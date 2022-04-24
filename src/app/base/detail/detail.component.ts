import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import * as cloneDeep from 'lodash/cloneDeep';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnChanges {
  @Input() data: any;
  @Input() option?: any;
  @Input() dataModel?: any;
  @Input() button?: any;
  @Input() configCss?: any;
  @Output() callback = new EventEmitter<any>();
  @Input() isService = false;
  model: any = {};
  tempModel: any = {};
  profileImageString;
  typeImage = '';

  constructor() { }

  ngOnChanges(): void {
    this.data = this.data.filter(x => x.type !== 'link');
    this.model = this.dataModel || {};
    this.tempModel = cloneDeep(this.model);
    this.profileImageString = this.dataModel ? this.dataModel.MediaURL : 'assets/svg/logo-big.svg';
    if (this.profileImageString && this.profileImageString.includes('logo.jpg')) {
      this.profileImageString = 'assets/svg/logo-big.svg';
    }
  }

  handleEvent(typeButton): void {

    if (typeButton === 'edit') {
      this.callback.emit({
        type: typeButton,
      });
      this.button.isEventUpdate = true;
    } else if (typeButton === 'cancel') {
      this.typeImage = '';
      this.model.mediaType = '';
      // this.model.MediaType = '';
      this.callback.emit({
        type: typeButton,
        data: this.model
      });
      this.model = this.tempModel;
      this.profileImageString = this.tempModel ? this.tempModel.MediaURL : '';
      if (this.profileImageString && this.profileImageString.includes('logo.jpg')) {
        this.profileImageString = 'assets/svg/logo-big.svg';
      }
      this.button.isEventUpdate = false;
    } else if (typeButton === 'save') {
      this.model.mediaType = this.typeImage;
      this.callback.emit({
        type: typeButton,
        data: this.model
      });
    } else if (typeButton === 'resign' || typeButton === 'active') {
      this.callback.emit({
        type: typeButton,
        data: this.model
      });
    }

  }

  processFileProfileImage = (files) => {
    var reader = new FileReader();
    this.typeImage = files[0].type;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.profileImageString = reader.result;
      this.model.MediaURL = this.profileImageString.split(',')[1];
    };
  }
}

