import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Globals } from 'src/app/models/global/global';
import { Module } from 'src/app/models/home/module.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Module;
  @Output() callBack = new EventEmitter();
  globals: Globals = new Globals();
  constructor(private basethemeService: BaseThemeService) { this.globals = this.basethemeService.getGlobalValue();}

  ngOnInit(): void {

    //throw new Error('Method not implemented.');
  }
  showDetail() {
    this.callBack.emit();
  }
}
