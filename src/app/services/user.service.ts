import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProfileUpdate } from '../models/home/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) {
  }
  getMyProfile() {
    return this.http.get(`proUrl/profile-get-my-profile`);
  }
  getUpdateProfile(param: ProfileUpdate) {
    return this.http.post(`proUrl/profile-update-my-info`, param);
  }
  getAllUsers() {
    return this.http.get(`proUrl/profile-get-all-users`).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param {\"user_id\":\"ci_login4\",\"password\":\"123456\",\"first_name\":\"FN\",\"last_name\":\"LN\",\"phone\":\"+84123\",\"email\":\"usr1@ci.com\"}"
   * @returns
   */
  profileAddUser(param: any) {
    return this.http.post(`proUrl/profile-add-user`, param).pipe(map((res: any) => res.content));
  }
  /**
   *
   * @param param "type in [\"IMAGES\",\"DOCUMENTS\"]\nfolder in [\"AVATAR\",\"BACKGROUND\"]"
   * {\"type\":\"IMAGES\",\"folder\":\"AVATAR\",\"file_name\":\"gifgit1.png\",\"content_type\":\"image/png\"}
   * @returns []
   */
  profileGeneratePresignedUrl(param: any) {
    return this.http.post(`proUrl/profile-generate-presigned-url`, param);
  }
  /**
   * @param "{\"type\":\"IMAGES\",\"folder\":\"AVATAR\",\"url\":\"https://mozular-customer-data.s3.ap-southeast-1.amazonaws.com/c4e7ef55-de40-4aae-9ed7-a9c2a314c483/IMAGES/AVATAR/5fe5af29-5dfd-4304-95c3-e74bdc57ee90gifgit1.png\"}"
   */
  profileUpdateProfileImage(param: any) {
    return this.http.post(`proUrl/profile-update-profile-image`, param);
  }
  /**
   *
   * @param param "{\"user_id\":\"ci_login3\",\"first_name\":\"3FN3\",\"last_name\":\"3LN3\",\"phone\":\"3+84123\",\"email\":\"3usr3@ci.com\"}"
   * @returns
   */
  profileUpdateUserInfo(param: any) {
    return this.http.post(`proUrl/profile-update-user-info`, param);
  }
  /**
   *
   * @param param {\"user_id\":\"ci_login1\",\"password\":\"654321\"}
   * @returns
   */
  profileUpdateUserPassword(param: any) {
    return this.http.post(`proUrl/profile-update-user-password`, param);
  }
  /**
   *
   * @param param {\"user_id\":\"ci_login1\",\"type\":\"IMAGES\",\"folder\":\"AVATAR\",\"file_name\":\"gifgit1.png\",\"content_type\":\"image/png\"}
   * "description": "type in [\"IMAGES\",\"DOCUMENTS\"]\nfolder in [\"AVATAR\",\"BACKGROUND\"]"
   * @returns
   */
   profileGenerateUserPresignedUrl(param: any) {
    return this.http.post(`proUrl/profile-generate-user-presigned-url`, param);
  }
  /**
   *
   * @param param "{\"user_id\":\"ci_login1\",\"type\":\"IMAGES\",\"folder\":\"AVATAR\",\"url\":\"https://mozular-customer-data.s3.ap-southeast-1.amazonaws.com/c4e7ef55-de40-4aae-9ed7-a9c2a314c483/ci_login1/IMAGES/AVATAR/e54475b6-9190-4f14-87a2-8dec65b4546dgifgit1.png\"}"
   * @returns
   */
  profileUpdateUserProfileImage(param: any) {
    return this.http.post(`proUrl/profile-update-user-profile-image`, param);
  }
  /**
   *
   * @param param "{\"user_id\":\"ci_login1\"}"
   * @returns
   */
  profileGetDetailById(param: any) {
    return this.http.get(`proUrl/profile-get-user-profile`,  {
      params: param,
    }).pipe(map((res: any) => res.content));
  }
}
