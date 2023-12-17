import React from 'react'

const Modal = () => {
  return (
    <>
        <div className='fixed inset-0 bg-[#36363685] w-full h-full flex items-center justify-center'>
            <div className='bg-red-400 w-[400px] h-[400px] flex items-center justify-center'>
                <p>Close </p>
            </div>
        </div>
    </>
  )
}

export default Modal