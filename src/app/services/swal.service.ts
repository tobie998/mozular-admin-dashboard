import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class SwalService {

    constructor() { }

    success(title) {
        Swal.fire({
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }

    error(title) {
        Swal.fire({
            icon: 'error',
            title: title,
            showConfirmButton: false,
            timer: 3000
        })
    }

    info(title) {
        Swal.fire({
            icon: 'info',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }

    warning(title) {
        Swal.fire({
            icon: 'warning',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }
}
