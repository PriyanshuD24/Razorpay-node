<!-- create order id on backend -->

create Order on backend
send api req to that route from client and gets the order id
client call handlePayment function and then inside it call the create order api and recives order id

<!-- now handling main payment -->
add razorpay checkout script in index.html now razorpay is added to window obj.
add options in handlePayment func
x= new window.Razorpay(options);
x();


<!-- verify payment -->
in handlerFunction call verify payment api with response comes from razorpay in cb fn
genrated hash = hmac sha256 (order_id+ "|" + "payment_id", secretRZP);
genrated hash== rzp signature verified : else not:\
