import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
function DocCard () {
    const data =[
        {
            id:1,
            name:'Dr.james',
            specialist:'cardiologist',
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro rerum quam atque molestias qui. Impedit minus porro veritatis reiciendis est natus dolores!",
            image:'public/doctor-2337835_1280.jpg',
            facebook:'https://www.facebook.com/',
            twitter:'https://www.twitter.com/',
            linkedin:'https://www.linkedin.com/',
        },
        {
            id:2,
            name:'Dr.james',
            specialist:'cardiologist',
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro rerum quam atque molestias qui. Impedit minus porro veritatis reiciendis est natus dolores!",
            image:'public/06_1.png',
            facebook:'https://www.facebook.com/',
            twitter:'https://www.twitter.com/',
            linkedin:'https://www.linkedin.com/',
        },
        {
            id:2,
            name:'Dr.james',
            specialist:'cardiologist',
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro rerum quam atque molestias qui. Impedit minus porro veritatis reiciendis est natus dolores!",
            image:'public/01_2.png',
            facebook:'https://www.facebook.com/',
            twitter:'https://www.twitter.com/',
            linkedin:'https://www.linkedin.com/',
        },
        {
            id:2,
            name:'Dr.james',
            specialist:'cardiologist',
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro rerum quam atque molestias qui. Impedit minus porro veritatis reiciendis est natus dolores!",
            image:'public/07_1.png',
            facebook:'https://www.facebook.com/',
            twitter:'https://www.twitter.com/',
            linkedin:'https://www.linkedin.com/',
        },
    ]
    return (
        <>
        {data.map((item,index)=>{
            return (          
                <div className="col-sm-6 col-xl-4 col-xxl-3 mb-4" key={index}>
                    <div className="bg-white overflow-hidden shadow-sm doctor-card-main rounded-10">
                        <div
                        className="d-flex justify-content-center mb-5 doctor-card-bg h-100 doctor-card-bg1  py-5 position-relative">
                        <div
                            className="card-img doctor-list-img rounded-circle position-absolute bg-white  d-flex justify-content-center align-items-center shadow-sm">
                            <div className=" doctor-img-outer d-flex align-items-center justify-content-center overflow-hidden">
                            <img src={item.image} alt="" className="w-100"/>
                            </div>
                        </div>
                        </div>
                        <div className="card-body p-3">
                        <h5 className="doctor-name fs-5 fw-bold text-capitalize">{item.name}</h5>
                        <p className="fs-12 text-dark fw-500 text-capitalize text-light">{item.specialist}</p>
                        <div className="doctor-about mb-5">
                            <p className="text-dark fs-14 fw-normal mb-0">
                                {item.description}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="doctor-profile d-flex justify-content-start align-items-center gap-3">
                            <Link to={`${item.facebook}`} className="bg-light-primary px-3 py-2 rounded-10">
                                <FontAwesomeIcon icon={faFacebookF} className="text-primary fs-5"/>
                            </Link>
                            <Link to={`${item.twitter}`} className="bg-light-primary px-3 py-2 rounded-10">
                                <FontAwesomeIcon icon={faXTwitter} className="text-primary fs-5"/>
                            </Link>
                            <Link to={`${item.linkedin}`} className="bg-light-primary px-3 py-2 rounded-10">
                                <FontAwesomeIcon icon={faLinkedinIn} className="text-primary fs-5"/>
                            </Link>
                            </div>
                            <div className="text-center doctor-card-btn">
                            <Link to="/doctorprofile" className="text-primary fs-14 fw-500 text-primary text-decoration-underline">View Profile</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            );
        })}
            
        
        </>
    );
}
export default DocCard;