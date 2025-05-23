import express from "express";
import authRouter from "./routes/auth.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";
import productRouter from "./routes/product.routes.js";
import "./database.js"

const api = express();
api.use(express.json());

api.get('/', (req, res) => {
    res.json({
        message: "API Live!",
    });
});

// TODO: registar todas las rutas
api.use('/api/auth', authRouter);
api.use('/api/carts', cartRouter);
api.use('/api/orders', orderRouter);
api.use('/api/products', productRouter);

export default api
