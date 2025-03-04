
<div className="bg-white h-full p-6 rounded-2xl space-y-8">
<div className="space-y-4">
   <h1 className="text-3xl font-semibold text-[#212529]">Check Out My Latest <span className="text-[#4770FF]">Projects</span></h1> 
   <p className="font-[500] text-lg text-[#798092]">I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
</div>

<div className="px-2">

<div className="p-6 rounded-2xl bg-[#F0F2F5]">
    <img src="/Images/projects/portfolio-img-1.jpg"
    className="rounded-t-md"
    />
    </div>
    <div className="p-5 flex justify-between">
        <div>
        <h1 className="text-xl hover:text-[#4770FF] hover:border-b mb-1">FlowArch - Architecture Service</h1>
        <p className="text-gray-400">SaaS App | UI UX Design</p>
        </div>
        <a className="text-gray-400 text-sm">Visit Site <i className="ri ri-arrow-right-up-line" /></a>

    </div>
</div>

<div className="px-2">

<div className="p-6 rounded-2xl bg-[#F0F2F5]">
    <img src="/Images/projects/portfolio-img-2.jpg"
    className="rounded-t-md"
    />
    </div>
    <div className="p-5 flex justify-between">
        <div>
        <h1 className="text-xl hover:text-[#4770FF] hover:border-b mb-1">FlowArch - Architecture Service Website</h1>
        <p className="text-gray-400">SaaS App | UI UX Design</p>
        </div>
        <a className="text-gray-400 text-sm">Visit Site <i className="ri ri-arrow-right-up-line" /></a>

    </div>
</div>

<div className="px-2">

<div className="p-6 rounded-2xl bg-[#F0F2F5]">
    <img src="/Images/projects/portfolio-img-3.jpg"
    className="rounded-t-md"
    />
    </div>
    <div className="p-5 flex justify-between">
        <div>
        <h1 className="text-xl hover:text-[#4770FF] hover:border-b mb-1">AIMug-AI Writing Application Tools</h1>
        <p className="text-gray-400 ">SaaS App | UI UX Design</p>
        </div>
        <a className="text-gray-400 text-sm">Visit Site <i className="ri ri-arrow-right-up-line" /></a>

    </div>
</div>

<div className='bg-[#F0F5F5] py-6 rounded-lg flex items-center'>
<marquee className="text-gray-500 text-3xl">Let's 👋 Work Together Let's 👋 Work Together Let's 👋 Work Together Let's 👋 Work Together Let's 👋 Work Together Let's 👋 Work Together </marquee>
</div>
</div>


// side mey nav-bar
{/* <div  style={{marginLeft:-marginLeft,transition:"0.3s"}}
className="absolute top-0 xl:hidden h-full w-[280px] z-[999] bg-white"
>
  <div className="p-7">
    <div className="px-1 flex justify-between items-center">
      <img src="/Images/logo.png"
      className="h-[27px]"
      />
      <button 
       className="rounded-md text-2xl bg-gray-800 text-white"
      ><i className="ri-close-line"/>
      </button>
    </div>
    <div className="mt-8 flex flex-col gap-2">

  {
        menu.map((item,index)=>(
          <Link key={index}
          to={item.href} 
          className={`${location.pathname === item.href ? 'bg-[#F0F2F5]' : 'bg-transparent'} hover:bg-[#F0F2F5] flex items-center  py-1.5  rounded-lg px-2 font-medium text-gray-700`}
          >
          <i className={item.icon} />  {item.name}
          </Link>
        ))
      }
  

    </div>


  </div>
</div> */}


// khud se project mey transition or transfrom 
<div className="bg-white p-6 mt-5 rounded-2xl shadow-2xl">
<div>
<h1 className="text-3xl font-semibold text-[#212529] border-b-[2px] border-[#4770FF] w-fit ">Works</h1> 
</div>

<div className="grid grid-cols-3 p-3">
  <div className="shadow-xl relative h-60 w-70 overflow-hidden ">
    <img src="/Images/project-4.jpg"
     className="absolute object-cover w-full transition-transform duration-800 ease-in-out hover:-translate-y-70"
/>
<div className="absolute bottom-0 left-0 w-full ">
  <h1 className="text-center bg-gray-200 py-2">E-Commerce App</h1>
</div>
  </div>

</div>

 </div>