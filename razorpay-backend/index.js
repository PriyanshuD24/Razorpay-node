import express from "express";
import cors from "cors";
import { createOrder, verifyPayment } from "./razorpay.js";


const app = express();


app.use(express.json());
app.use(cors());

app.post("/order", createOrder);
app.post("/verifyPayment", verifyPayment);






app.listen(7777, ()=> {
    console.log("App is runnnig")
});
