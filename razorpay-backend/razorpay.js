import Razorpay from "razorpay";
import crypto from "crypto";

const RZP_KEY_ID= "rzp_test_6iTNJ3RolyFlwZ";
const RZP_KEY_SEC= "gAfa82t15CGZ1OPG2st2Vns0";

// create an order 
export async function createOrder(req, res){
    // const {amount } = req.body;
    // console.log(amount);
    
    
try {
    const instance  = new Razorpay({
        key_id: RZP_KEY_ID,
        key_secret: RZP_KEY_SEC,
    })
    
    var options = {
        amount: 500*100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
    
    const result =  instance.orders.create(options, (err, order)=> {
        // console.log(order);
        res.json(order);
    })
    // console.log(result);
    
  
} catch (error) {
    console.log(error.message);
    res.status(500).send("Not good");
    
}
}

export async function verifyPayment(req, res) {
    // console.log("first")
    try {
        const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;
        
        const generated_signature = crypto
        .createHmac("sha256", RZP_KEY_SEC)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");
       if(generated_signature==razorpay_signature){
        // console.log("VErified")
        res.json({message: "Payment verified"})
        return;
       }
       else{
        // console.log(" not VErified")

        throw new Error("Payment varification failed");
       }

    } catch (error) {
        res.status(500).send(error.message);
    }

}
