import React from 'react'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
    <div className="bg-top bg-cover bg-gray-300 h-full max-h-20 relative bg-gradient-to-r from-violet-300 to-fuchsia-300">
      <ul className='absolute right-6 bottom-4 mb-2 mr-4 space-x-3 list-none flex items-end'>
        
      <Link to={'/'}>Home</Link>
        <Link to={'Signup'}>Signup</Link>
        <Link to={'Login'}>Login</Link>
      </ul>

      <div className="flex-1 flex items-center">
        <h1 className='max-w-60 text-3xl ml-6 mt-4 mb-4'>DEV ZONE</h1>
      </div>
    </div>
    </div>
  )
}
export default Header;
