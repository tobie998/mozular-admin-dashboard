import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { Module } from 'src/app/models/home/module.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  globals: Globals = new Globals();
  lstModule: Module[] = [];
  constructor(
    private router: Router,
    private basethemeService: BaseThemeService,
    private moduleService: ModuleService
  ) {
    this.globals = this.basethemeService.getGlobalValue();
  }

  ngOnInit(): void {
    this.moduleService.searchMarketModules({ term: '' }).subscribe((res) => {
      this.lstModule = res.Items;
    });
  }
  showDetail(item: any) {
    this.router.navigateByUrl(`marketplace/detail/${item.module_id}`);
  }
}
