import React from 'react'
import {Toaster, toast} from 'react-hot-toast';

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>

      <button onClick={() => toast.success('Hello world', {
        position: 'top-right',
        autoClose: 5000,
        style: {
          background: '#212121',
          color: 'white',
        } 
        })
      }>Hello</button>

      <Toaster />
    </div>
  )
}
