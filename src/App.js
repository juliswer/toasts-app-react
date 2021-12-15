import React from 'react'
import {Toaster, toast} from 'react-hot-toast';

export default function App() {
  return (
    <div>
      <h1>Hello world</h1>

      <button onClick={() => toast.error('Hello world')}>Hello</button>

      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          }
        }}
      />
    </div>
  )
}
