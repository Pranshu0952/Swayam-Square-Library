import React from 'react'

const Button = ({label}) => {
  return (
    <div >
        <button className='h-10 bg-primary px-4 rounded-xl text-gray-50' >{label}</button>
    </div>
  )
}

export default Button;