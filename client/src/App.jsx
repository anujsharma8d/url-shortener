import React from 'react'

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen flex justify-center items-center'>
      <form action="" className='flex flex-col gap-2'>
        <div>
          Enter url: </div>
        <input type="text" className='bg-gray-300'/>
        <div>
          <button className='bg-gray-600 p-2'>Shorten</button>
        </div>
      </form>
    </div>
  )
}

export default App

