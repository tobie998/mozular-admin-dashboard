import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    search = false;
    @Output() callback = new EventEmitter<any>();

    handleChangeValueSearch = (keyword) => {
        this.callback.emit(keyword);
    }

    showSearch() {
        this.search = !this.search
    }

}

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule],
    exports: [SearchComponent]
})
export class SearchModule { }