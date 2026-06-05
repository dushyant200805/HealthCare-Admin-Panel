import { Link } from "react-router-dom";
function ButtonCard3 () {
    const data = [
        {
            id:1,
            color: "btn-primary"
        },
         {
            id:2,
            color: "btn-secondary"
        },
         {
            id:3,
            color: "btn-success"
        },
         {
            id:4,
            color: "btn-dark"
        },
         {
            id:5,
            color: "btn-danger"
        },
         {
            id:6,
            color: "btn-light"
        },
         {
            id:7,
            color: "btn-warning"
        },
         {
            id:8,
            color: "btn-info"
        },
         {
            id:9,
            color: "btn-dark-primary"
        },
         {
            id:10,
            color: "btn-orange"
        },
    ];
    return (
        <>
         {data.map((item,index)=>{
             return (
                <Link to="#"
                     className={`btn ${item.color} rounded-4 fw-500 py-2 rounded-pill px-4 text-capitalize m-2`} key={index}> 
                   <i className="bi bi-grid-1x2-fill"></i>
                </Link>
             );
         })}
        </>
    );
}
export default ButtonCard3