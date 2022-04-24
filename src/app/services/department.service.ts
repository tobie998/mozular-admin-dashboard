import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(protected http: HttpClient) {}
  /**
   *
   * @returns
   */
  getMyDepartments() {
    return this.http
      .get(`proUrl/department-get-my-departments`)
      .pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"name\":\"dept 4\",\"description\":\"test purpose\"}"
   * @returns
   */
  addDepartment(param: any) {
    return this.http
      .post(`proUrl/department-add-department`, param)
      .pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"department_id\":\"USER#c4e7ef55-de40-4aae-9ed7-a9c2a314c483DEPARTMENT#5e661ba5-c9f8-4e1c-a3a0-bef5b8619bd1\",\"name\":\"2 updated dept 4\",\"description\":\"test purpose\"}"
   * @returns
   */
  updateDepartmentInfo(param: any) {
    return this.http
      .post(`proUrl/department-update-department-info`, param)
      .pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"department_id\":\"USER#c4e7ef55-de40-4aae-9ed7-a9c2a314c483DEPARTMENT#5e661ba5-c9f8-4e1c-a3a0-bef5b8619bd1\"}"
   * @returns
   */
  getDepartmentUsers(param: any) {
    return this.http
      .get(`proUrl/department-get-department-users`, {
        params: param,
      })
      .pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "{\"department_id\":\"USER#c4e7ef55-de40-4aae-9ed7-a9c2a314c483DEPARTMENT#5e661ba5-c9f8-4e1c-a3a0-bef5b8619bd1\",\"user_id\":\"ci_login2\"}"
   * @returns
   */
  addDepartmentUser(param: any) {
    return this.http
      .post(`proUrl/department-add-department-user`, param)
      .pipe(map((res: any) => res.content));
  }
  /**
   * 
   * @param param "{\"department_id\":\"USER#c4e7ef55-de40-4aae-9ed7-a9c2a314c483DEPARTMENT#5e661ba5-c9f8-4e1c-a3a0-bef5b8619bd1\",\"user_id\":\"ci_login2\"}"
   * @returns 
   */
  removeDepartmentUser(param: any) {
    return this.http
      .post(`proUrl/department-remove-department-user`, param)
      .pipe(map((res: any) => res.content));
  }
}
