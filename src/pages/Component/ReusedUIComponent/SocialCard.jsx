import { faFacebookF, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function SocialCard () {
       const data = [
        {
            id:1,
            Bgcolor: "bg-light-primary",
            colorText:"text-primary"
        },
         {
            id:2,
            Bgcolor: "bg-light-success",
            colorText:"text-success"
        },
         {
            id:3,
            Bgcolor: "bg-light-secondary",
            colorText:"text-secondary"
        },
         {
            id:4,
            Bgcolor: "bg-light-info",
            colorText:"text-info"
        },
         {
            id:5,
            Bgcolor: "bg-light-dark",
            colorText:"text-dark"
        },
         {
            id:6,
            Bgcolor: "bg-light-danger",
            colorText:" text-danger"
        },
         {
            id:7,
            Bgcolor: "bg-light-warning",
            colorText:"text-warning"
        },
         {
            id:8,
            Bgcolor: "bg-light-orange",
            colorText:"text-orange"
        }
    ];
     return (
        <>
           {data.map((item,index)=>{
              return (
                 <div className="d-flex flex-wrap gap-3 mb-2" key={index}>
                    <Link to="#" className={` ${item.Bgcolor} px-3 py-2 rounded-10`}>
                        <FontAwesomeIcon icon={faFacebookF} className={` ${item.colorText} fs-5`}/>
                    </Link>
                     <Link to="#" className={` ${item.Bgcolor} px-3 py-2 rounded-10`}>
                        <FontAwesomeIcon icon={faXTwitter} className={` ${item.colorText} fs-5`}/>
                    </Link>
                     <Link to="#" className={` ${item.Bgcolor} px-3 py-2 rounded-10`}>
                        <FontAwesomeIcon icon={faLinkedinIn} className={` ${item.colorText} fs-5`}/>
                    </Link>
               </div>
              );
           })}

        </>
     );
}
export default SocialCard