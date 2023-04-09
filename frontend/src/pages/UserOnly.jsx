import React from 'react'
import { useSelector } from 'react-redux'

export default function UserOnly({element}) {
    const {UserLogin} = useSelector(state => state.alluser)

  return  UserLogin && UserLogin.token ? element : <>
    
  <h1 className='text-center'>
  <img src="https://cdn.pixabay.com/photo/2020/02/09/09/38/smiley-4832492_1280.png" alt=""height={400}  />
   </h1>
   <h1 className='text-center'> Login / Register User Please</h1>
  </>
}
