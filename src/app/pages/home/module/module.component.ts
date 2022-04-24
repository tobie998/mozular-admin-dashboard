import { Component, OnInit } from '@angular/core';
import { duration } from 'moment';
import { Globals } from 'src/app/models/global/global';
import { Duration, ModuleDetail } from 'src/app/models/home/module.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { CartService } from 'src/app/services/cart.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  durations: Duration[] = [];
  modules: ModuleDetail[] = [];
  listActive: ModuleDetail[] = [];
  listExpired: ModuleDetail[] = [];
  globals: Globals = this.basethemeService.getGlobalValue();
  constructor(private basethemeService: BaseThemeService, private cartService: CartService, private moduleService: ModuleService) { }
  isActive = false;
  isList = false;
  ngOnInit(): void {
    this.cartService.getMyCart().subscribe(res => {
      console.log(res);
    });
    this.moduleService.getMyModule().subscribe(res => {
      this.durations = res.Duration.Items;
      this.modules = res.Modules.Items;
      if (this.durations && this.durations.length !== 0) {
        // tslint:disable-next-line:no-shadowed-variable
        const active: string[] =  this.durations.filter((duration) => +duration.end_date > new Date().getTime() / 1000).map(res2 => {
          return res2.module_id;
        });
        // tslint:disable-next-line:no-shadowed-variable
        const expired =  this.durations.filter((duration) => +duration.end_date <= new Date().getTime() / 1000).map(res2 => {
          return res2.module_id;
        });
        this.listActive = this.modules.filter((module) => active.includes(module.module_id));
        this.listExpired = this.modules.filter((module) => expired.includes(module.module_id));

        // const ex =  this.durations.filter((duration) => +duration.end_date <= new Date().getTime());
      }
    });
  }
  changeModule(type: boolean): void {
    this.isActive = type;
    console.log(this.isActive , this.isList);

  }
}
