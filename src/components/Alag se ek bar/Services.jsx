const Services=()=>{
    return(
        <div className=' xl:grid grid-cols-12 flex flex-col space-y-5 gap-5 h-full w-full'>
        <div className='col-span-8 order-2 xl:order-1 shadow-lg bg-white bg-white p-6.5 rounded-2xl'>
          
          <div className='flex justify-between'>
            <h1 className='text-2xl text-[#212529] font-semibold'>Services I Offered</h1>
            <a className='text-blue-500 border-b border-gray-300 inline-block '>See All Services <i className='ri ri-arrow-right-line' /></a>
          </div>

           <div className='grid xl:grid-cols-4 max-sm:grid-cols-1 grid-cols-2 justify-between gap-6 mt-8.5'>
  
          
          <div className='bg-[#F0F5F5] w-full p-4.5 rounded-xl flex flex-col items-center'>
            <div className='bg-white w-full py-7 flex items-center justify-center rounded-lg'>
              <img src='/Images/icons/mobile-app.png'
              className='h-[72px] object-cover'
              />
            </div>
            <label className='py-3 text-center leading-[20px]'>Frontend Development</label>
  
          </div>

          <div className='bg-[#F0F5F5] w-full p-4.5 rounded-xl flex flex-col items-center'>
            <div className='bg-white w-full py-7 flex items-center justify-center rounded-lg'>
              <img src='/Images/icons/product-design.png'
              className=' h-[72px] object-cover'
              />
            </div>
            <label className='py-3 text-center leading-[20px]'>Backend Development</label>
  
          </div>

          <div className='bg-[#F0F5F5] w-full p-4.5 rounded-xl flex flex-col items-center'>
            <div className='bg-white w-full py-7 flex items-center justify-center rounded-lg'>
              <img src='/Images/icons/ui-ux.png'
              className=' h-[72px] object-cover'
              />
            </div>
            <label className='py-3'>UI UX Design</label>
  
          </div>

          <div className='bg-[#F0F5F5] w-full p-4.5 rounded-xl flex flex-col items-center'>
            <div className='bg-white w-full px- py-7 flex items-center justify-center rounded-lg'>
              <img src='/Images/icons/branding.png'
              className=' h-[72px] object-cover'
              />
            </div>
            <label className='py-3 text-center leading-[20px]'>Full stack Web Apps</label>
          </div>

          </div>
  
        </div>

        <div className='col-span-4 order-1 h-fit p-6.5 bg-white p-5 rounded-2xl'>
          <div className='bg-[#F0F5F5] py-4 rounded-lg flex items-center'>
            <marquee className="text-gray-500 font-[500] text-lg">Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital Experiences 🎨</marquee>
          </div>
  
          <div className='my-6 text-gray-800 mt-7.5'>
            <h1 className='text-[2.6rem] font-semibold py-3 leading-none'>Let's 👋 </h1> <h1 className='text-[2.6rem] font-semibold leading-none py-2'> Work Together</h1>
          </div>
          <a className='text-blue-500 text-lg border-b border-gray-300 inline-block mb-6 font-[500]'>Let's Talk <i className='ri ri-arrow-right-line' /></a>
  
  
        </div>
  
      </div> 
    )
}

export default Services