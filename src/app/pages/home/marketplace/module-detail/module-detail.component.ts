import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { ModuleDetail } from 'src/app/models/home/module.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { CartService } from 'src/app/services/cart.service';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {
  moduleDetail: ModuleDetail = new ModuleDetail();
  showMore = false;
  showAdd = true;
  id = '';
  globals: Globals = new Globals();
  constructor(
    private router: Router,
    private basethemeService: BaseThemeService,
    private moduleService: ModuleService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.globals = this.basethemeService.getGlobalValue();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.cartService.getMyCart().subscribe(res => {
      const listCart = res.Items.find(cart => cart.module_id == this.id);
      this.showAdd = listCart ? true : false;
    })
    this.moduleService.getMarketModules({"module_id": this.id}).subscribe(res => {
      if (res && res.length !== 0) {
        this.moduleDetail = res.Items[0];
        
       }
    })
  }

  addCart() {
    this.cartService.addCartItem({"module_id": this.id, "count": 1}).subscribe(res => {
      this.showAdd = false;
    })
  }

}
