export class HearderModel {
  public get create(): Array<any> {
    return [
      {
        path: '/marketplace',
        title: 'Marketplace',
      },
      {
        path: '/marketplace/detail/',
        title: 'Chi tiết module',
        back: true,
        backUrl: '/marketplace'
      },
      {
        path: '/module',
        title: 'Danh sách module',
      },
      {
        path: '/module/detail/',
        title: 'Chi tiết module',
        back: true,
        backUrl: '/marketplace'
      },
      {
        path: '/payment',
        title: 'Danh sách hóa đơn',
      },
      {
        path: '/setting',
        title: 'Cài đặt',
      },
      {
        path: '/user',
        title: 'Danh sách người dùng',
      },
      {
        path: '/user/create',
        title: 'Thêm thành viên',
        back: true,
        backUrl: '/user'
      },
      {
        path: '/user/detail/',
        title: 'Thông tin thành viên',
        back: true,
        backUrl: '/user'
      },
    ];
  }
}
