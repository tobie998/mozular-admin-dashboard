import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { UserService } from 'src/app/services/user.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chip-autocomplete',
  templateUrl: './chip-autocomplete.component.html',
  styleUrls: ['./chip-autocomplete.component.scss'],
})
export class ChipAutocompleteComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() listOption = [];
  @Input() listValue = [];
  @Output() callBack = new EventEmitter();
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any = [];
  allFruits: any = [];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;

  globals: Globals = this.basethemeService.getGlobalValue();

  constructor(private basethemeService: BaseThemeService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: any | null) =>
        fruit ? this._filter(fruit) : this.allFruits.slice()
      )
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.allFruits = this.listOption;
    this.fruits = this.listValue;
  }

  ngOnInit(): void {}
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      const detail = {
        department_id: 'new',
        description: '',
        name: value,
        object_id: ''
      }
      this.fruits.push(detail);
      this.callBack.emit(this.fruits);
    }

    // Clear the input value
    // event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const selected = event.option.value;
    const check = this.fruits.filter((fruit) =>
        fruit.name === selected.name && fruit.department_id === selected.department_id
      );
      console.log(check);

    if (!check || check.length === 0) {
      this.fruits.push(event.option.value);
    }
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: any): any {
    if (typeof value === 'string' || value instanceof String) {
      const filterValue = value.toLowerCase();
      return this.allFruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(filterValue)
      );
    } else {
      const filterValue = value.name;
      return this.allFruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(filterValue)
      );
    }

  }
}
