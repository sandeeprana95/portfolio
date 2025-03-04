import Layout from "./Layout";
import Works from "./Works";

const technologies = [
  {
    title: "Frontend Technologies",
    items: [
      { name: "Javascript", img: "/Images/icons/frontend/javascript.png" },
      { name: "React", img: "/Images/icons/frontend/react.png" },
      { name: "Next.js", img: "/Images/icons/frontend/nextjs.png" },
      { name: "Ant Design", img: "/Images/icons/frontend/ant-design.png" },
      { name: "Tailwind", img: "/Images/icons/frontend/tailwind-css.png" },
      { name: "HTML", img: "/Images/icons/frontend/html.png" },
      { name: "CSS", img: "/Images/icons/frontend/css.png" },
      { name: "Bootstrap", img: "/Images/icons/frontend/bootstrap.png" },
      { name: "GSAP", img: "/Images/icons/frontend/gsap.png" },
      { name: "Typescript", img: "/Images/icons/frontend/typescript.png" },
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      { name: "NodeJS", img: "/Images/icons/backend/nodejs.png" },
      { name: "ExpressJS", img: "/Images/icons/backend/express.png" },
      { name: "Next.js", img: "/Images/icons/backend/nextjs.png" },
      { name: "MongoDB", img: "/Images/icons/backend/mongodb.png" },
      { name: "AWS Cloud", img: "/Images/icons/backend/aws.png" },
    ],
  },
];

const awsTechnologies = [
  {
    title: "AWS Cloud & Scalability",
    items: [
      { name: "EC2", img: "/Images/icons/aws/EC2.jpg" },
      { name: "Route53", img: "/Images/icons/aws/Route53.png" },
      { name: "ACM", img: "/Images/icons/aws/ACM.png" },
      { name: "Lambda Serverless", img: "/Images/icons/aws/lambda.png" },
      { name: "MediaConvert", img: "/Images/icons/aws/media-convert.png" },
      { name: "Event Bridge", img: "/Images/icons/aws/event-bridge.png" },
      { name: "API Gateway", img: "/Images/icons/aws/api-gateway.png" },
      { name: "Load Balancer", img: "/Images/icons/aws/load-balancer.png" },
      { name: "Auto Scaling", img: "/Images/icons/aws/auto-scaling.png" },
      { name: "S3", img: "/Images/icons/aws/s3.png" },
      { name: "CloudWatch", img: "/Images/icons/aws/cloudwatch.png" },
      { name: "Cloudfront", img: "/Images/icons/aws/cloudfront.png" },
    ],
  },
  {
    title:"Scalability & Robust",
    items:[
      {name:"Docker",img:"/Images/icons/scalability/docker.png"},
      {name:"Redis",img:"/Images/icons/scalability/redis.png"},
      {name:"Kafka",img:"/Images/icons/scalability/kafka.png"},
      {name:"Queue",img:"/Images/icons/scalability/queue.png"},
      {name:"Git",img:"/Images/icons/scalability/git.png"},
      {name:"pub/sub",img:"/Images/icons/scalability/pub-sub.png"}
    ]
  }
];

const Resume = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Column: Frontend + Backend */}
        <div className="flex flex-col gap-5 ">
          {technologies.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-2xl">
              <h1 className="text-2xl pb-3 text-[#212529] font-semibold">{category.title}</h1>
              <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 mt-2.5 mb-2">
                {category.items.map((tech, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="px-2.5 py-3.5 bg-[#F0F2F5] rounded-lg">
                      <img src={tech.img} className="h-[32px] mx-auto " />
                    </div>
                    <label className="text-center font-bold pt-2 text-gray-700">{tech.name}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: AWS Cloud & Scalability */}
        <div className="flex flex-col gap-5">
          {awsTechnologies.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-2xl">
              <h1 className="text-2xl pb-3 text-[#212529] font-semibold">{category.title}</h1>
              <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 mt-2.5">
                {category.items.map((tech, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="px-2.5 py-3.5 bg-[#F0F2F5] rounded-lg">
                      <img src={tech.img} className="h-[32px] mx-auto rounded-lg" />
                    </div>
                    <label className="text-center font-bold pt-2 text-gray-700 leading-[20px]">{tech.name}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

 {/* Work section  */}
      </div>
      <div className="mt-5 shadow-2xl">

      <Works/>
      </div>

      <div className="mt-5 shadow-2xl p-6 bg-white rounded-2xl">
        <div className="space-y-4">
     <div className="">
     <h2 className="text-[#212529] text-3xl font-semibold mb-2 border-b pb-2 ">Objecitve</h2>
     <p className="font-[500] text-lg text-[#798092]">
     As a skilled Full-Stack MERN Developer, I excel in crafting robust web applications with a focus on MongoDB, Express.js, React, and Node.js technologies. My expertise spans both front-end and back-end development, allowing me to deliver user-friendly and scalable solutions that meet the highest standards of quality and performance.
     </p>
     </div>
     
     {/* Education */}
     <div>
     <h2 className="text-[#212529] text-3xl font-semibold mb-2  border-b pb-2 ">Education</h2>
     <div className="space-y-2">
      <div className="flex justify-between py-2">
        <h1 className="font-semibold ">Mastor of Computer Application (MCA)</h1>
        <span className="font-bold  text-sm text-[#79809]">2021</span>
      </div>
      <div className="flex justify-between">
        <h1 className="font-semibold  ">Bachelor of Computer Science (Bsc)</h1>
        <span className="font-bold  text-sm text-[#79809]">2018</span>
      </div>
      <div className="flex justify-between">
        <h1 className="font-semibold ">12th,Chhaju Ram Jat Senior Secondary School</h1>
        <span className="font-bold  text-sm text-[#79809]">2014</span>
      </div>
     </div>
     </div>

     <div className=" ">
     <h2 className="text-[#212529] text-3xl font-semibold mb-2 border-b pb-2 ">Soft Skills</h2>
          <ul className="list-disc ml-5 text-[#798092] font-semibold">
             <li>Work Culture</li>
             <li>Client Handling</li>
             <li>Team Management</li>
             <li>Completion Before Deadline</li>
         </ul>

     </div>

     </div>


      </div>

    </Layout>
  );
};

export default Resume;
