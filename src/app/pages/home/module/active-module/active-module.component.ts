import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-active-module',
  templateUrl: './active-module.component.html',
  styleUrls: ['./active-module.component.scss']
})
export class ActiveModuleComponent implements OnInit {
  @Input() dataInput = [];
  globals: Globals = this.basethemeService.getGlobalValue();
  constructor(private basethemeService: BaseThemeService,
    private router: Router
    ) { }
  ngOnInit() {

  }
  showDetail(item) {
    this.router.navigateByUrl(`module/detail/${item.module_id}`);
  }

}
