import React from 'react'
import { useState } from 'react'


const cards = (props) => {
  return (
    <div className=" border-2 p-5 text-black bg-amber-100 rounded-xl  lg:w-[23vw]  md:w-[30vw] sm:w-[45vw] h-80 md:h-90 m-2 px-6 flex flex-col items-center ">
     <img className='h-20 w-20 rounded-full' src={props.elem.imageURL} alt="User" />
     <h1 className='text-2xl font-bold mt-1' >{props.elem.userName}</h1>
      <h5 className='text-xl font-mono text-emerald-600 my-2'  >{props.elem.phoneNo}</h5>
      <p className='text-s font-normal leading-tight '>{props.elem.description}</p>
      <button className='bg-red-600 text-white p-1 m-1 px-4 py-2 rounded-lg cursor-pointer active:scale-95 hover:bg-red-800 transition-colors mt-3' onClick={()=>{props.deleteHandler(props.idx)}}>Delete</button>
    </div>
  )
}

export default cards
