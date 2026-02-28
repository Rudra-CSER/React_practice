import React from 'react'
import { useState } from 'react'
import CARDS from './components/cards'
const App = () => {
 const [userName, setuserName] = useState('')
 const [imageURL, setImageURL] = useState('')
 const [phoneNo, setPhoneNo] = useState('')
 const [description, setDescription] = useState('')
 const [allUsers, setallUsers] = useState([])
   
//  const localData = JSON.parse(localStorage.getItem('all-users') )|| []
//  console.log(localData);
 

const submitHandler = (e) => {
  e.preventDefault()
 console.log(`from sub ${userName} + ${imageURL} + ${phoneNo} + ${description}`);
 
 //for creating new array and pushing new user data into it and then setting it to allUsers state
 const OldUser =[...allUsers]
 OldUser.push({
  userName,
  imageURL,
  phoneNo,
  description
})
 setallUsers(OldUser)
localStorage.setItem('all-users', JSON.stringify(OldUser))
 setuserName('')
 setImageURL('')
 setPhoneNo('')
 setDescription('')
 
}

const deleteHandler = (idx) => {
 const copyUser = [...allUsers]
  copyUser.splice(idx,1)
  setallUsers(copyUser)
localStorage.setItem('all-users', JSON.stringify(copyUser))

}

  return (
    <div className="h-screen bg-black text-white">
      <form className="flex flex-wrap justify-center " onSubmit={(e)=>submitHandler(e)}>
        <input type="text" 
        className="border-2 text-xl font-semibold px-5 py-2 m-2 bg-gray-800 rounded w-[45%] " 
        placeholder='Enter Name'
        onChange={(e) => setuserName(e.target.value)}
        value={userName}
        required
         />
        <input type="text" 
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        className="border-2 text-xl font-semibold px-5 py-2 m-2 bg-gray-800 rounded w-[45%] " 
        placeholder='Image URL'
         />
        <input type="text" 
        value={phoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}  
        className="border-2 text-xl font-semibold px-5 py-2 m-2 bg-gray-800 rounded w-[45%] " 
        placeholder='Phone no' 
        />
        <input type="text" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 text-xl font-semibold px-5 py-2 m-2 bg-gray-800 rounded w-[45%] "
        placeholder='Description'

         />
        <button className="p-2 m-2 bg-emerald-500 text-white rounded-md w-[90%]"
        >Create Account</button>
      </form>
      <div className='flex flex-wrap gap-4 mt-5 px-4 py-10'>
         {allUsers.map((elem, idx) => {
          return <CARDS  elem={elem} key={idx} deleteHandler={deleteHandler}/>
         })}
      
      </div>
    </div>
  )
}

export default App