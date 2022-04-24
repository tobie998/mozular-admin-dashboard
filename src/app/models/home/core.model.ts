import { UserDetail } from "./user.model";

export class Core {
    subtotal: string;
    created_date: string;
    user_id: string;
    cart_meta: string;
    discount: string;
    payment_code: string;
    payment_method: string;
    invoice_number: string;
    user: UserDetail;
    total: number;
    active: boolean;
}