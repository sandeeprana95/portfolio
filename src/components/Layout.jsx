// import { useEffect,useState } from "react"
// import { Link} from "react-router-dom"
// import { useLocation } from "react-router-dom"
// import Services from "./services"

// const Layout=({children})=>{
//  const location= useLocation()
//  const [marginLeft,setMarginLeft]=useState(280)
//  console.log(marginLeft)

//  const drawer=()=>{
//   setMarginLeft(marginLeft === 280 ? 0 : 280)
//  }
 
//  const menu=[
//   {
//     name:"Home",
//     icon:"ri-home-smile-line text-2xl mr-2",
//     href:"/"
//   },
//   {
//     name:"Projects",
//     icon:"ri-stack-line text-2xl mr-2",
//     href:"/projects"
//   },
//   {
//     name:"Resume",
//     icon:"ri-file-list-line text-2xl mr-2",
//     href:"/resume"
//   }
 
//  ]

//   useEffect(() => {
//     const isFirstVisit = localStorage.getItem("visited");
//     if (!isFirstVisit) {
//       downloadCv()
//       localStorage.setItem("visited", "true");
//     }
//   }, []);


// const downloadCv=()=>{
//   const a = document.createElement("a");
//   a.href = "/My resume.pdf"; 
//   a.download = "Sandeep_Kaliraman_CV.pdf";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);

// }

// const [copied, setCopied] = useState(false);
// const email = "sandeeprana385@gmail.com"; // Apni email yaha likho

// const copyEmail = () => {
//   navigator.clipboard.writeText(email).then(() => {
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000); // 2s baad hide
//   });
// };



//     return(
//         <div className="min-h-screen relative bg-linear-to-r/srgb py-6 from-indigo-100 to-teal-100 animate__animated animate__fadeIn">
//       <div className='w-11/12 sm:11/12 md:10/12 lg:10/12 xl:10/12 mx-auto space-y-5 px-2.5 '>

//         <nav className="sticky z-80  top-0 xl:py-2.5 py-3.5  pl-6 pr-2.5 w-full  mx-auto flex bg-white justify-between rounded-2xl shadow-lg ">
           
//           <div className="flex items-center pl-1 lg:flex-1">
//             <img src="/Images/logo.png"/>
//           </div>
//           <div>
//             <button onClick={drawer}
//             className='xl:hidden  rounded-md mr-2.5'>
//               <i className='ri ri-menu-line text-2xl' />
//             </button>
//           </div>

//           <div className='xl:flex hidden items-center justify-between flex-1'>
//             {/* menu part-1 */}

//             <div className='flex justify-around flex-1 '>

//           {
//             menu.map((item,index)=>(
//               <Link key={index}
//               to={item.href} 
//               className={`${location.pathname === item.href ? 'bg-[#F0F2F5]' : 'bg-transparent'} hover:bg-[#F0F2F5] flex items-center  py-1.5  rounded-lg px-2 font-medium text-gray-700`}
//               >
//               <i className={item.icon} />  {item.name}
//               </Link>
//             ))
//           }
           

//             </div>

//               {/* menus part-2 */}
//               <div>
//             <Link to='/contact-us'
//              className="bg-[#1A1F2C] flex items-center py-1.5 rounded-lg px-5 py-3  font-medium text-gray-700 text-white flex hover:bg-[#4770FF]" 
//             ><i className="ri-mail-line text-xl mr-2 "></i>Contact Us</Link>
//             </div>

//           </div>

//         </nav>

//         {/* hero section */}
//     <div className='xl:grid  grid-cols-12 gap-5 space-y-5 xl:space-y-0'>
//     {/* section left 1 */}
//     <div className='col-span-4  xl:sticky top-23 left-0 h-fit  bg-white flex flex-col justify-between pt-6 rounded-2xl shadow-2xl'>
//     <div className='text-center mx-6 bg-[#F0F2F5] rounded-lg pt-2.5'>
//        <img src='/Images/photo1.png'
//        className='mx-auto sm:h-95 xl:h-63'
//        />
//      </div>
//      <div className='py-4 px-6 space-y-3'>
//       <div className="flex justify-between">
//       <h1 className='text-2xl text-[#212529] font-semibold'>Sandeep Kaliraman</h1>
//       <label className="text-2xl">👋</label>
//       </div>
//       <p className='text-[#798092] text-medium font-semibold'>A Passionate <span className='text-[#212529] font-bold'>Full Stack Developer 🖥️ & Product Designer</span> having <span  className="text-[#212529] font-bold">12 years</span> of Experiences over 24+ Country Worldwide.</p>
//      </div>
//       <div className='px-6 mt-2.5 flex flex-row max-sm:flex-col max-sm:gap-4 gap-0 justify-around '>
//         <Link to="https://wa.me/8398906669"
//          className='text-lg bg-[#25D366] border border-gray-500  hover:bg-green-600 text-white gap-2 py-3 shadow-2xl px-2 rounded-lg font-semibold  flex items-center justify-center'>
//           <img src="/Images/whatsapp1.png"
//           className="h-[30px]"
//           />
//            WhatsApp </Link>
//         <button onClick={copyEmail}
//         className='text-lg text-gray-700 hover:text-black hover:border-black gap-2 shadow-2xl bg-transparet shadow border border-gray-300 py-3 px-2 rounded-lg font-semibold flex items-center justify-center'>
//           <i className="ri-file-copy-line font-light text-xl" />Copy Email</button>
//           {/* Success Message */}
//       { copied && (
//         <div 
//         className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-2 rounded-md shadow-lg z-[999] max-sm:w-10/12 mx-auto ">
//   <label className="flex items-center justify-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-black  rounded-full "><i className="ri-check-line animate__animated animate__rotateIn"/> </span>Copied Successfully!</label>
//   </div>
//         )}    




//       </div>

//       <div className='py-2.5 text-center mt-8 bg-gray-300  w-full rounded-bl-xl rounded-br-xl' >
//         <button onClick={downloadCv}
//          className='bg-white font-semibold border border-blue-600 shadow-2xl hover:bg-black hover:text-white hover:border-green-500 text-xl px-4 py-2 rounded-lg '> 
//           <i className='ri ri-download-cloud-line mr-2 '/>Download CV</button>
//       </div>
//     </div>

//     {/* section right -2 */}
//     <div className='col-span-8  xl:flex gap-5 space-y-5 '>
//       {/* left dba iss mey 2 div upr niche */}
//      {children}
//     </div>


//     </div>

//     {
//       location.pathname==="/" && (
//       <Services/>

//       )

//     }


//     {/* last section */}
//     <div className='text-center text-sm '>
//       <label>@ BentoFolio 2024, Design By <span className='text-blue-500'>MarvelTheme</span></label>
//     </div>

//     </div>

//     <div  style={{marginLeft:-marginLeft,transition:"0.3s"}}
//     className="absolute top-0 xl:hidden h-full w-[280px] z-[999] bg-white"
//     >
//       <div className="p-7">
//         <div className="px-1 flex justify-between items-center">
//           <img src="/Images/logo.png"
//           className="h-[27px]"
//           />
//           {/* <button 
//            className="rounded-md text-2xl bg-gray-800 text-white"
//           ><i className="ri-close-line"/>
//           </button> */}
//         </div>
//         <div className="mt-8 flex flex-col gap-2">

//       {
//             menu.map((item,index)=>(
//               <Link key={index}
//               to={item.href} 
//               className={`${location.pathname === item.href ? 'bg-[#F0F2F5]' : 'bg-transparent'} hover:bg-[#F0F2F5] flex items-center  py-1.5  rounded-lg px-2 font-medium text-gray-700`}
//               >
//               <i className={item.icon} />  {item.name}
//               </Link>
//             ))
//           }
//          <Link 
//               to="/contact-us" 
//               className={`${location.pathname === "/contact-us" ? 'bg-[#F0F2F5]' : 'bg-transparent'} hover:bg-[#F0F2F5] flex items-center  py-1.5  rounded-lg px-2 font-medium text-gray-700`}
//               >
//               <i className="ri-message-line text-2xl mr-2" /> Contact
//               </Link>

//         </div>


//       </div>
//     </div>


//     </div>
//     )
// }

// export default Layout

import { useEffect,useState } from "react"
import { Link} from "react-router-dom"
import { useLocation } from "react-router-dom"
import Works from "./Works"

const Layout=({children})=>{

 const location= useLocation()
 const [marginLeft,setMarginLeft]=useState(280)
//  console.log(marginLeft)

 const drawer=()=>{
  setMarginLeft(marginLeft === 280 ? 0 : 280)
 }
 
 const menu=[
  {
    name:"Contact",
    icon:"ri-home-smile-line text-2xl mr-2",
    href:"/contact"
  },
  {
    name:"Works",
    icon:"ri-stack-line text-2xl mr-2",
    href:"/works"
  },
  {
    name:"Resume",
    icon:"ri-file-list-line text-2xl mr-2",
    href:"/"
  }
 
 ]

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("visited");
    if (!isFirstVisit) {
      downloadCv()
      localStorage.setItem("visited", "true");
    }
  }, []);


const downloadCv=()=>{
  const a = document.createElement("a");
  a.href = "/sandeep_CV (1).pdf"; 
  a.download = "sandeepResume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

}

const [copied, setCopied] = useState(false);
const email = "sandeeptechsunset385@gmail.com"; 

const copyEmail = () => {
  navigator.clipboard.writeText(email).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  });
};



    return(
        <div className="min-h-screen relative bg-linear-to-r/srgb py-6 from-indigo-100 to-teal-100 animate__animated animate__fadeIn">
      <div className='w-11/12 sm:w-11/12 max-sm:w-full md:10/12 lg:10/12 xl:10/12 mx-auto space-y-5 px-2.5'>

           {/* navbar */}
        <nav className="flex justify-end sticky top-5 z-[999] ">
           
      
          <div>
            <button onClick={drawer}
            className='hidden  rounded-md mr-2.5'>
              <i className='ri ri-menu-line text-2xl' />
            </button>
          </div>

          <div className='w-fit  bg-white rounded-xl shadow-lg p-3'>


            <div className='flex gap-2'>

          {
            menu.map((item,index)=>(
              <Link key={index}
              to={item.href} 
              className={`${ location.pathname === item.href ? 
                'bg-linear-to-r/decreasing from-red-500 to-red-400 text-white shadow-2xl' : 
                'bg-[#F0F2F5]'} hover:bg-[#F0F2F5] flex flex-col items-center justify-center gap-2 w-25 h-25 text-md rounded-lg font-medium text-gray-700
                `}
              >
              <i className={item.icon} />  {item.name}
              </Link>
            ))
          }
           

            </div>

          </div>

        </nav>

        {/* hero section */}
    <div className='xl:grid  grid-cols-12 gap-5 space-y-5 xl:space-y-0 '>
    {/* section left 1 */}
    <div className='col-span-4  bg-white xl:sticky  top-23 left-0 h-fit flex flex-col justify-between pt-5 rounded-2xl xl:rounded-t-none xl:rounded-b-2xl shadow-2xl'>
    <div className=' w-11/12 xl:w-9/12 mx-auto mx-6 bg-[#F0F2F5] rounded-2xl pt-1.5  relative top-0 xl:-top-22'>
       <img src='/sandeepjob.png'
       className='mx-auto sm:h-95 max-sm:h-80 sm:w-80 xl:h-63 object-cover xl:w-40 object-top  '
       />
     </div>
     <div className='py-4 px-6 max-sm:px-4 space-y-3 mt-0 xl:-mt-20 '>
      <div className="flex justify-center">
      <h1 className='text-3xl text-[#212529] font-semibold'>Sandeep Kaliraman</h1>
      {/* <label className="text-2xl">👋</label> */}
      </div>
      <p className='text-[#798092] text-medium font-semibold text-center'>A Passionate <span className='text-[#212529] font-bold'>Full Stack Developer </span> having <span  className="text-[#212529] font-bold">4+ years</span> of Experience.</p>
     </div>
      <div className='px-6 max-sm:px-2.5 mt-2.5 flex flex-col gap-4  justify-around '>
        <Link to="https://wa.me/+918398906669"
         className='text-lg bg-[#25D366] border tracking-wider border-gray-500  hover:bg-green-600 text-white gap-2 py-3 shadow-2xl px-2 rounded-lg font-semibold  flex items-center justify-center w-full lg:w-[80%] xl:w-full 2xl:w-full mx-auto'>
          <img src="/Images/whatsapp1.png"
          className="h-[30px]"
          />
           8398906669 </Link>
        <button onClick={copyEmail}
        className='text-lg text-gray-700  hover:text-black hover:border-black max-sm:gap-1 gap-2 shadow-2xl bg-transparet shadow border border-gray-300 py-3 px-2 rounded-lg font-semibold flex items-center justify-center w-full lg:w-[80%]  xl:w-full 2xl:w-full mx-auto'>
          <i className="ri-file-copy-line  font-light text-xl" />sandeeptechsunsest@gmail.com</button>
          {/* Success Message */}
      { copied && (
        <div 
        className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-2 rounded-md shadow-lg z-[999] max-sm:w-10/12 mx-auto ">
  <label className="flex items-center justify-center gap-3"><span className="w-5 h-5 flex items-center justify-center bg-black  rounded-full "><i className="ri-check-line animate__animated animate__rotateIn"/> </span>Copied Successfully!</label>
  </div>
        )}    




      </div>

      <div className='py-2.5 text-center mt-8 bg-gray-300  w-full rounded-bl-xl rounded-br-xl' >
        <button onClick={downloadCv}
         className='bg-white font-semibold border border-blue-600 shadow-2xl hover:bg-black hover:text-white hover:border-green-500 text-xl px-4 py-2 rounded-lg '> 
          <i className='ri ri-download-cloud-line mr-2 '/>Download CV</button>
      </div>
    </div>

    {/* section right -2 */}
    <div className='col-span-8 '>
      {/* left dba iss mey 2 div upr niche */}
    {

      (location.pathname === "/" || location.pathname === "/contact" ) ?
       children : <Works/>

    }
    </div>


    </div>

    {
      location.pathname === "/" && (
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

       {/* last section */}
       <div className='text-center text-sm  '>
      <label>@ copyright 2024, Design By <span className='text-blue-500'>Sandeep Kaliraman</span></label>
    </div>

    </div>

   


    </div>
    )
}

export default Layout