export class UserAdd {
    user_id: string;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
}
export interface User {
    isCheck: boolean;
    user_id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
}

export interface UserDetail {
    AVATAR: string;
    user_id: string;
    last_name: string;
    dob: string;
    first_name: string;
    organization_name: string;
    show_name: string;
    user_meta: string;
    email: string;
    phone: string;
}
