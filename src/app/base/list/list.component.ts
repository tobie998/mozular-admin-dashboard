import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
    @Input() create;
    @Input() config;
    @Input() data;
    @Output() callback = new EventEmitter<any>();
    check = false;
    checkLayout;

    constructor() { }

    ngOnChanges() {
        this.checkLayout = this.data.length;

    }

    ngOnInit() {
        const checkLink = this.config.find(x => x.type === 'link');
        this.check = checkLink ? true : false;
    }

    routeTo(item) {
        this.callback.emit(item);
    }
    setDefaultPic(item){
        item.MediaURL = item.DefaultIMG;
    }

}
