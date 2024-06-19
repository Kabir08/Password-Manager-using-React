import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>

      <div className=" max-w-4xl  mycontainer">
        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-green-500 '> &lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-md text-center'>Your Own Password Manager</p>
        <div className=' flex items-center flex-col text-black p-4 gap-6'>
          <input placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
          <div className="flex w-full gap-8 justify-between ">
            <input placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
            <div className="relative">

            <input placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id='' />
            <span className="absolute right-2 cursor-pointer top-1.5"><img className=' w-[22px]' src="./public/show.svg" alt="eye" /></span>
            </div>
          </div>
          <button className='flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-3 py-2 w-fit'>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover">
            </lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  )
}

export default App
