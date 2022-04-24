import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    template: ` <div class="wrapper">
                    <section id="sidebar" style="z-index: 101" [ngClass]="{'sidebar-small': small === true}" >
                        <app-menu-bar (callBacck)="small = $event;"></app-menu-bar>
                    </section>
                    <!-- <div  >
                        <app-menu-bar></app-menu-bar>
                    </div> -->
                    <div id="main" [ngClass]="{'main-small': small === true}">
                        <main>
                            <app-menu-header></app-menu-header>
                            <router-outlet></router-outlet>
                        </main>
                    </div>
                    <!-- <div >
                        <router-outlet></router-outlet>
                    </div> -->
                </div>`,
})
export class HomeComponent {
    small = false;
    title = 'TITILE';
}
