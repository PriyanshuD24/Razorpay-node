import { useState } from 'react'
import Razorpay from './components/Razorpay'
import { handlePayment } from './config/razorpay'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<h1>RAZORPAY</h1>
<input value={count} min={0}  onChange={(e)=> setCount(e.target.value)} type="number" />
<button style={{
  marginLeft: "10px"
}}
onClick={()=>handlePayment(count)}
>ADD</button>



</div>
  )
}

export default App
