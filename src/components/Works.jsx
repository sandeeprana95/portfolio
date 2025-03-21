import Layout from "./Layout";

const Works = () => {
    const works = [
        { id: 1, title: "PawsIndia", image: "/Images/projects/project-1.jpeg", link: 'https://pawsindia.com/' },
        { id: 2, title: "Plant Selling", image: "/Images/projects/project-2.jpeg", link: 'https://nurturinggreen.in/' },
        { id: 3, title: "Boxed Greens Delivers", image: "/Images/projects/project-3.jpeg", link: 'https://boxedgreens.com/' },
        { id: 4, title: "Religare Trading", image: "/Images/projects/project-4.jpeg", link: 'https://www.religareonline.com' },
        { id: 5, title: "Event Management", image: "/Images/projects/project-5.jpeg", link: 'https://eventsmanagementkerala.com/' },
        { id: 6, title: "Travelling", image: "/Images/projects/project-6.jpeg", link: 'https://www.veenaworld.com/' },
    ];

    return (
      
       

            <div className="bg-white p-6 rounded-2xl shadow-2xl">
                {/* Heading */}
                
                <div className="space-y-4">
                {
                 (location.pathname === "/works")? <>
   <h1 className="text-3xl font-semibold text-[#212529]">Check Out My Latest <span className="text-[#4770FF]">Projects</span></h1> 
   <p className="font-[500] text-lg text-[#798092]">
    I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
    </>
    :
    <h2 className="text-[#212529] text-3xl font-semibold">Works</h2>
  }

</div>

                {/* Works Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    {works.map((work) => (
                        <a
                            key={work.id}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={cardStyle}
                        >
                            <div style={imageContainerStyle} className="works-image-container">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="works-image"
                                    style={imageStyle}
                                />
                                {/* Title Overlay */}
                                <div style={titleOverlayStyle}>
                                    <h5 style={titleStyle}>{work.title}</h5>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        
    );
};

export default Works;

/* --- CSS Styles --- */
const cardStyle = {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    textDecoration: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "250px", // Fixed height for uniformity
    overflow: "hidden", // Hide overflowing parts of the image
    borderRadius: "8px",
};

const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 5s linear", // Smooth transition for scrolling effect
};

const titleOverlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    padding: "16px",
    textAlign: "center",
};

const titleStyle = {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0",
};

// Injecting hover effect dynamically
const hoverEffect = `
    .works-image-container:hover .works-image {
      transform: translateY(calc(-100% + 250px)); /* Moves the image upwards on hover */
    }

    a:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverEffect;
document.head.appendChild(styleSheet);