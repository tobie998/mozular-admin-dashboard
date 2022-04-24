import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() data;
    @Output() listCallBack = new EventEmitter();
    @Output() tableCallBack = new EventEmitter();
    @Output() tableAddResult = new EventEmitter();
    constructor() { }

    callbackFromList(ev) {
        this.listCallBack.emit(ev)
    }
    callbackFromTable(ev) {
        this.tableCallBack.emit(ev)
    }
    onClickAddResult(ev){
        this.tableAddResult.emit(ev);
    }
}
