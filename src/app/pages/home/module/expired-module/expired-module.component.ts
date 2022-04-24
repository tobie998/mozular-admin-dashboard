import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-expired-module',
  templateUrl: './expired-module.component.html',
  styleUrls: ['./expired-module.component.scss']
})
export class ExpiredModuleComponent implements OnInit {
  @Input() dataInput = [];
  globals: Globals = this.basethemeService.getGlobalValue();
  constructor(private basethemeService: BaseThemeService, private router: Router) { }
  ngOnInit() {
    console.log(this.dataInput);

  }
  showDetail(item) {
    this.router.navigateByUrl(`module/detail/${item.module_id}`);
  }

}
