import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Form() {
  return (
    <div className="max-w-sm mx-auto px-6 py-4 bg-white shadow-md rounded-md" style={{marginTop:'20px',margin:'10px',marginLeft:'100px'}}>
      <div className="text-3xl font-medium text-center mb-6" style={{color:'white',marginLeft:'50px'}}>Get started with your free trial</div>
      <form>
        <div className="mb-4" style={{marginTop:'20px'}}>
          <input type="text" id="name" name="name" placeholder="Enter your full name" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-600" 
          style={{borderRadius:'5px',width:'300px',height:'30px'}} />
        </div>
        <div className="mb-4" style={{marginTop:'20px'}}>
          <input type="email" id="email" name="email" placeholder="Enter your email address" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-600" 
          style={{borderRadius:'5px',width:'300px',height:'30px'}}/>
        </div>
        <div className="mb-4" style={{marginTop:'20px'}}>
          <input type="password" id="password" name="password" placeholder="Enter your password" className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-600" 
          style={{borderRadius:'5px',width:'300px',height:'30px'}}/>
        </div>
        <div className="mb-4" style={{marginTop:'20px'}}>
           <PhoneInput className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-600"
      international={false}
      defaultCountry="AE"
      placeholder="Enter phone number"
      style={{borderRadius:'5px',width:'310px',height:'30px'}}/>
        </div>
        <button 
        style={{marginTop:'30px',fontSize:'20px',padding:'5px',color:'white',backgroundColor:'red',borderRadius:'5px',width:'310px',height:'50px'}}
        >Get Started</button>
      </form>
    </div>
  )
}