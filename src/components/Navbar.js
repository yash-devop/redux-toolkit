import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link , useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const cartItemsCount = useSelector((state)=>{
    console.log('data from redux' , state);
    return state.cart.cart.length
}) 

  return (
    <>
        <div className="flex items-center justify-between border-b">
            <h1 className="font-bold text-3xl">ReduxToolkit</h1>
            <div className='relative'>
              <Link to={'/cart'}>
                <IoCartOutline  className="w-10 h-10 rounded-full cursor-pointer"/>
                <div className='absolute top-0 right-2 w-4 h-4 bg-red-400 rounded-full flex items-center justify-center'>
                  <p className='text-sm text-white'>{cartItemsCount || 0}</p>
                </div>
              </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar