import React from 'react'

const Fotter = () => {
  return (
    <>
        <div className='grid grid-cols-1 text-center gap-7 sm:grid-cols-4 bg-primary p-4 py-8 text-gray-50 items-center'> 
            <div>
                <div className='flex items-center gap-4 '>

                <span><img src="/logo.png" alt=""  className=' hidden md:block w-16  rounded-full'/></span>
                <h1  className='text-xl sm:text-2xl pb-5  '>Swayam Square Libaray </h1>
                </div>
                <p>High-speed internet, RO water, and a peaceful AC environment for your success.</p>
            </div>
            <div>
                <h1 className='text-xl sm:text-2xl pb-5'>Quick Link</h1>
                <ul className='style-none'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contect</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#">Location</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl sm:text-2xl pb-5'>Follows US</h1>
                <ul className='style-none'>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twiter</a></li>
                    <li><a href="#">Youtube</a></li>
                    <li><a href="#">Google</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl sm:text-2xl pb-5'>Contect Me</h1>
                <ul>
                    <li>9876543211</li>
                    <li>9876543211</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Fotter