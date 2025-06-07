import { OrderModel } from "./order.model"

export interface UserModel{
    email: string
    firstName : string
    LastName: string
    phone : string
    adress : string
    password: string
    genre: string
    orders: OrderModel[]
}