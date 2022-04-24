import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from 'src/app/models/global/global';
import { Department } from 'src/app/models/home/department.model';
import { UserAdd } from 'src/app/models/home/user.model';
import { BaseThemeService } from 'src/app/services/base-theme.service';
import { DepartmentService } from 'src/app/services/department.service';
import { PostFileS3Service } from 'src/app/services/post-file-s3.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
})
export class DetailUserComponent implements OnInit {
  constructor(
    private basethemeService: BaseThemeService,
    private userService: UserService,
    private departmentService: DepartmentService,
    private postFileS3Service: PostFileS3Service,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) {}
  id = '';
  statusEdit = false;
  addForm = this.fb.group({
    user_id: ['', [Validators.required, Validators.maxLength(255)]],
    first_name: [''],
    last_name: [''],
    // Email: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    email: ['', [Validators.required, Validators.maxLength(255)]],
    phone: ['', [Validators.required, Validators.maxLength(255)]],
  });
  contentType = '';
  fileName = '';
  lstDe: Department[] = [];
  imgUrl = '';
  file: File;
  lstSelected: Department[] = [];
  detail: UserAdd = new UserAdd();
  globals: Globals = this.basethemeService.getGlobalValue();
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService
      .profileGetDetailById({ user_id: this.id })
      .subscribe((res) => {
        this.detail = res.Items[0];
        this.addForm.patchValue({
          user_id: this.detail.user_id,
          first_name: this.detail.first_name,
          email: this.detail.email,
          last_name: this.detail.last_name,
          phone: this.detail.phone,
        });
      });
  }

  handleFileInput(data: File[]) {
    let reader = new FileReader();
    this.file = data[0];
    this.contentType = this.file.type;
    reader.readAsDataURL(data[0]);
    const herf = this;
    reader.onload = function () {
      herf.imgUrl = reader.result as string;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  save() {
    this.userService.profileUpdateUserInfo(this.addForm.value).subscribe(res => {
      console.log(res);
      const req = {
        user_id: this.addForm.value.user_id,
        type: 'IMAGES',
        folder: 'AVATAR',
        file_name: this.fileName,
        content_type: this.contentType
      };
      if (this.file) {
        this.userService.profileGenerateUserPresignedUrl(req).subscribe((res1: any) => {
          this.postFileS3Service.postUserProfileFileS3(res1.content,  this.file,  this.file.type).subscribe(res2 => {
            console.log(res2);
            this.router.navigateByUrl(`user`);
          });
        });
      } else {
        this.router.navigateByUrl(`user`);
      }

    });
  }
}
