import React, {useState} from 'react'
import { Textarea } from './textarea'
import { Input } from './input'
import { Button } from './button'


const MessageForm = () => {

const [message, setMessage] = useState("");
// console.log(message)
const [delay, setDelay] = useState(10);
const [isSending, setIsSending] = useState(false);
const [timerId, setTimerId] = useState(null);
const [sentMessage, setSentMessage] = useState("");

const handleSend = () => {
  setIsSending(true)

  const id = setTimeout(() =>{
    setSentMessage(message)
    setMessage("")
    setIsSending(false)
  } , delay * 1000)

  setTimerId(id)
}

const handleCancel = () => {
  if(timerId) clearTimeout(timerId)
    setIsSending(false)
}



  return (
    <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
     <h2 className='text-2xl font-bold text-gray-800'>Dm Delay Button</h2>


    <Textarea 
    placeholder='Type your message here...' 
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    />

   <Input 
   type='number'
  //  placeholder='Enter the delay in seconds'
   value={delay}
   onChange={(e) => setDelay(Number(e.target.value))}
   disabled={isSending}
   />

  {!isSending ? (
       
<Button className='w-full' onClick={handleSend}>
  Sent with delay
</Button> ) : (   
<Button className='w-full'variant="destructive" onClick={handleCancel}>
  Cancel  Sending 
</Button>
)}

{sentMessage && (
  <div className='bg-green-100 border rounded p-3 text-green-900'>
   <p className='font-semibold'>Message Sent</p>
   <p>{sentMessage}</p>
  </div>)
}

    </div>
  )
}

export default MessageForm
