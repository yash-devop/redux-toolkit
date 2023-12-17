import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slices/CartSlice';
import {useSelector} from 'react-redux'
const Products = () => {
    const dispatch = useDispatch();
    const [data , setData] = useState([]);
    const handleData= async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setData(products)
    }
    useEffect(()=>{
        handleData()

    },[])

    const handleProduct=(item)=>{
        dispatch(addProduct(item));   // it will take the data to the Slice we have created
    }

  return (
    <>
        <div className=''>
            {
                data?.map((product , index)=>{
                    return(
                        <>
                            <div key={product.id} className='flex gap-4 border my-4 rounded-3xl p-3'>
                                <img src={product.image} alt="" className='w-40 object-contain'/>
                                <div className='flex flex-col gap-10 justify-between py-2'>
                                    <div>
                                        <h1 className='font-bold'>{product.title}</h1>
                                        <p className='text-gray-400'>{product.description}</p>
                                        <p className='text-gray-400'>{product.category}</p>
                                    </div>
                                    <h2 className='font-bold'>MRP {product.price} /-</h2>
                                    <button className='bg-blue-400 rounded-full py-2 px-10 text-white font-bold w-fit' onClick={()=>handleProduct(product)}>Add to Bag</button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>

  )
}

export default Products