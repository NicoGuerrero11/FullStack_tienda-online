import { Router } from "express";
import { gertOrder, createOrder } from "../controllers/order.controller.js";

const orderRouter = Router()

// regresa rodas las ordenes del usuario que haga la peticion
orderRouter.get('/', gertOrder)

// crea una nueva peticion
orderRouter.post('/', createOrder)

export default orderRouter