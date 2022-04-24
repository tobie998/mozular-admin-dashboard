import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { CardComponent } from './card/card.component';
// import { ModalExamsComponent } from './modal-exams/modal-exams.component';
// import { NgxPaginationModule } from 'ngx-pagination';
import { ChipAutocompleteComponent } from './chip-autocomplete/chip-autocomplete.component';
// import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations: [
        // ListComponent,
        // DetailComponent,
        // TableComponent,
        // TabComponent,
        // ButtonComponent,
        // ModalComponent,
        CardComponent,
        ChipAutocompleteComponent,
        // ModalExamsComponent,
        // CompanyDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatDialogModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        RouterModule,
    ],
    providers: [],
    exports: [
        // ListComponent,
        // DetailComponent,
        // CompanyDetailComponent,
        // TableComponent,
        // TabComponent,
        // ButtonComponent,
        // ModalComponent,
        ChipAutocompleteComponent,
        CardComponent,
    ]
})
export class BaseModule { }
