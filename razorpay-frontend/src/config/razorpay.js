import axios from "axios";

export async function handlePayment(amount) {
  try {
    const { data } = await axios.post("http://localhost:7777/order", {
      amount,
    });
    const { id } = data;
    console.log(id);
    var options = {
      key: "rzp_test_6iTNJ3RolyFlwZ", // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //   "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      handler: handlerFunction,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    // document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    // e.preventDefault();
    // }
  } catch (error) {
    console.log(error.message);
  }
}

async function handlerFunction (response) {

try {
    const {data} = await axios.post("http://localhost:7777/verifyPayment", {
        razorpay_payment_id :response.razorpay_payment_id,
        razorpay_order_id :response.razorpay_order_id,
        razorpay_signature :response.razorpay_signature
    })
    console.log(data);
    

} catch (error) {
    console.error(error.message);
}
   }