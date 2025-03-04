import Layout from "./Layout"

const Contact=()=>{
    return(
        <Layout>
            <div className="p-8 max-sm:p-4 space-y-14 bg-white rounded-2xl shadow-lg ">
                <div className="space-y-4 ">
                    <h1 className="text-3xl max-sm:text-[27px] font-semibold text-[#212529]">Let's 👋 <span className="text-[#4770FF]">Work</span> Together</h1>
                    <p className="text-[#798092] font-[500] text-lg max-sm:text-[17px] ">I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
                </div>

                <form className=" bg-[#F0F2F5] space-y-6 rounded-md  px-12 max-sm:px-1 py-16  ">
                    <div className="flex xl:flex-row flex-col  sm:flex-col gap-4 w-11/12 sm:11/12 md:10/12 lg:10/12 xl:10/12 mx-auto justify-center xl:space-y-0 space-y-4">
                        {/* name field */}
                    <div className="flex flex-col flex-1">
                        <label className="text-[#252129] font-[500] text-sm mb-2">Name</label>
                        <input type="text"
                        className="border border-[#DCDEE3] rounded-md bg-white  p-4 "
                        placeholder="Enter Your Name"
                        name="name"
                        />
                    </div>
                    {/* Email field */}
                    <div className="flex flex-col flex-1">
                        <label className="text-[#252129] font-[500] text-sm mb-2">Email</label>
                        <input type="email"
                        className="border border-[#DCDEE3] p-4 rounded-md bg-white "
                        placeholder="Enter Your email"
                        name="name"
                        />
                    </div>

                    </div>
                    
                        {/* subject field */}
                  <div className="flex xl:flex-row flex-col  sm:flex-col gap-4 w-11/12 sm:11/12 md:10/12 lg:10/12 xl:10/12 mx-auto justify-center xl:space-y-0 space-y-4">
                        {/* mobile field */}
                    <div className="flex flex-col flex-1">
                        <label className="text-[#252129] font-[500] text-sm mb-2">Mobile</label>
                        <input type="text"
                        className="border border-[#DCDEE3] rounded-md bg-white  p-4 "
                        placeholder="Enter Your mobile number"
                        name="mobile"
                        />
                    </div>
                    {/* subject field */}
                    <div className="flex flex-col flex-1">
                        <label className="text-[#252129] font-[500]  text-sm mb-2">Subject</label>
                        <input type="email"
                        className="border border-[#DCDEE3] p-4 rounded-md bg-white "
                        placeholder="Enter Your subject"
                        name="subject"
                        />
                    </div>

                    </div>
                
                      {/* textarea field  */}
                    <div className="flex  flex-col  sm:flex-col  w-11/12 sm:11/12 md:10/12 lg:10/12 xl:10/12 mx-auto justify-center xl:space-y-0 space-y-4">
                        <label className="text-[#252129] font-[500] text-sm ">Message</label>
                        <textarea rows={4}
                        className="border border-[#DCDEE3] p-4 rounded-lg bg-white "
                        placeholder="Type details about your inquiry"
                        name="message"
                        />
                    </div>
  
                     {/* send message button  */}
                    <div className="flex flex-col mx-auto w-11/12 sm:11/12 md:10/12 lg:10/12 xl:10/12 mt-6 ">
                        <input type="submit"
                        value="Send Message"
                        className="bg-[#4770FF] text-white text-sm py-4 rounded-lg"
                        />
                    </div>

                </form>

            </div>
        </Layout>
    )
}

export default Contact