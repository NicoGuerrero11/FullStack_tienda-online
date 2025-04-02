import mongoose from "mongoose";

mongoose.connection.on("open", () => {
    console.log("DB conected");
})
mongoose.connection.on("disconnected", () => {
    console.log("DB disconnected");
})

mongoose.connect("mongodb://cluster0.02qkd/tienda_online")