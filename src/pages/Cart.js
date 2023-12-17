import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../store/slices/CartSlice';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
const Cart = () => {
    const [showModal , setShowModal] = useState(false);
    
    const dispatch = useDispatch()
    const products = useSelector((state)=>{
        console.log('products',state.cart.cart);
        return state.cart.cart;
    })
    const totalPrice = useSelector((state)=>{
        return state.cart.total;
    })
    const handleDelete=(product)=>{
        dispatch(deleteProduct(product))
    }
    const handleModal=()=>{
        setShowModal(true)
    }
  return (
    <>
        <Navbar />
        <div className='max-w-[1300px] mx-auto  flex gap-6 w-full'>
            <div className='flex flex-col gap-6 w-full '>
                {
                    products.length === 0 ? (
                            <>
                                <div className='flex items-center justify-center w-full'>
                                    <h1 className='py-12'>Your Cart is Empty !</h1>
                                </div>
                            </>
                    ) : products?.map((product)=>{
                        return(
                            <>
                                <div className='flex gap-4  my-4 rounded-3xl p-3 w-full border'>
                                    <img src={product.image} alt="" className='w-40 object-contain h-40'/>
                                    <div className='flex flex-col gap-10 justify-between py-2'>
                                        <div>
                                            <h1 className='font-bold'>{product.title}</h1>
                                            <p className='text-gray-400'>{product.description}...</p>
                                            <p className='text-gray-400'>Category: {product.category}</p>
                                        </div>
                                        <h2 className='font-bold'>MRP {product.price} /-</h2>
                                        <AiOutlineDelete size={25} onClick={()=>handleDelete(product)} className='cursor-pointer'/>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                {/* {
                    
                } */}
            
            </div>




            <div className='w-full pt-4 '>
                <h1 className='font-bold text-3xl'>Summary</h1>
                <div className='p-3 border-t border-b flex justify-between'>
                    <p className='font-medium'>Total</p>
                    <p>₹ {totalPrice}</p>
                </div>
                <button className='w-full text-center py-3 bg-black text-white font-medium mt-2'>Go to Payment</button>
                <button className='w-full text-center py-3 bg-blue-400 text-white font-medium mt-2' onMouseEnter={handleModal} onMouseLeave={()=>setShowModal(false)}>
                    <Link to={'/'}>
                    Want to add more items ?
                    </Link></button>
            </div>
            
        </div>
        {
            showModal ? <Modal /> : null
        }
    </>
  )
}

export default Cart