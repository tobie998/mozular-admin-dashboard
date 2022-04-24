import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { ModuleDetail } from 'src/app/models/home/module.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {

  moduleDetail: ModuleDetail = new ModuleDetail();
  showMore = false;
  id = '';
  globals: Globals = new Globals();
  constructor(
    private router: Router,
    private basethemeService: BaseThemeService,
    private moduleService: ModuleService,
    private route: ActivatedRoute
  ) {
    this.globals = this.basethemeService.getGlobalValue();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    
    this.moduleService.getMarketModules({"module_id": this.id}).subscribe(res => {
      if (res && res.length !== 0) {
        this.moduleDetail = res.Items[0];
        
       }
    })
  }

}
