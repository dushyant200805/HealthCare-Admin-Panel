import { Link } from "react-router";

function Table3 () {
    const data =[
        {
           id:1,
           image:"/public/01.jpg",
           name:"Dr. Mark",
           message:"added new task patient appointment booking",
           time:"25 mins ago"
        },
        {
           id:2,
           image:"/public/02.jpg",
           name:"Dr. Allen",
           message:"added new task patient appointment booking",
           time:"25 mins ago"
        },
        {
           id:3,
           image:"/public/03.jpg",
           name:"Dr.June",
           message:"Deleted task patient appointment booking",
           time:"25 mins ago"
        },
        {
           id:4,
           image:"/public/01.jpg",
           name:"Dr. Mark",
           message:"added new task patient appointment booking",
           time:"25 mins ago"
        },
        {
           id:5,
           image:"/public/02.jpg",
           name:"Dr. Allen",
           message:"added new task patient appointment booking",
           time:"25 mins ago"
        },
        {
           id:6,
           image:"/public/03.jpg",
           name:"Dr.June",
           message:"Deleted task patient appointment booking",
           time:"25 mins ago"
        }
    ]
    return (
        <>
                 {data.map((item,index)=>{
                    return (
                        <li className="p-2 rounded-end-3" key={index}>
                    <Link to="#">
                      <div className="d-flex align-items-center notification-row">
                        <div className="d-flex align-items-center text-center p-0 notification-user-img">
                          <img src={item.image} width="48" height="48" alt=""/>
                        </div>
                        <div className="notification-content">
                          <div className="text-dark mb-0 fw-500 notification-msg">
                            <span className="text-dark fw-bold mb-0"> {item.name}</span>
                            <span className="fw-light fs-14 ">{item.message}</span>
                          </div>
                          <p className="text-dark  text-end  mb-0 fs-12 fw-500">{item.time}</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                    );
                 })}
               
        </>
    );  
}
export default Table3