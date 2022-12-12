import { IProduct } from "./IProduct";

export interface CartItem {
    articleNumber: number
    product: IProduct
    quantity: number 
}

