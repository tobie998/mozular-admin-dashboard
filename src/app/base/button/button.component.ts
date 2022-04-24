import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() buttonType;
    @Input() position;
    @Output() callback = new EventEmitter<any>();
    @Input() isSmall = false;

    handleEventDetail = (type) => {
        this.callback.emit(type);
    }

}
