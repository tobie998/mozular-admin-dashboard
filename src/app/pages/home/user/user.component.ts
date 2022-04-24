import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { Department } from 'src/app/models/home/department.model';
import { User } from 'src/app/models/home/user.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { DepartmentService } from 'src/app/services/department.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  globals: Globals = this.basethemeService.getGlobalValue();
  users: User[] = [];
  lstDe: Department[] = [];
  constructor(
    private basethemeService: BaseThemeService,
    private userService: UserService,
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res.Items;
      this.users.forEach((element) => {
        element.isCheck = false;
      });
    });
    this.departmentService.getMyDepartments().subscribe((res) => {
      this.lstDe = res.Items;
      console.log(res.Items);
    });
  }
  addMember(): void {
    this.router.navigateByUrl(`user/create`);
  }
  editMember(): void {
    const active = [];
    this.users.forEach((element) => {
      if (element.isCheck === true) {
        active.push(element);
      }
    });
    if (active.length === 1) {
      this.router.navigateByUrl(`user/detail/${active[0].user_id}`);
    }
  }
}
