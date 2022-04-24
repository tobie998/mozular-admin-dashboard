import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
    providedIn: 'root'
})
export class FormatDateService {

    constructor() { }

    formatDate = (date: any, format: string) => moment.unix(new Date(date).getTime() / 1000).format(format);
}
