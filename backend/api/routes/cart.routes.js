import { Router } from "express";
import { getCart, updateCart } from "../controllers/cart.controller.js"

const cartRouter = Router()

cartRouter.get('/', getCart)
cartRouter.put('/', updateCart)



export default cartRouter;