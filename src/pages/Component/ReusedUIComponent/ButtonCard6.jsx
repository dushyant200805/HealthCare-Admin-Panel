import { Link } from "react-router-dom";
function ButtonCard5 () {
    const data = [
        {
            id:1,
            color: "btn-outline-primary"
        },
         {
            id:2,
            color: "btn-outline-secondary"
        },
         {
            id:3,
            color: "btn-outline-success"
        },
         {
            id:4,
            color: "btn-outline-dark"
        },
         {
            id:5,
            color: "btn-outline-danger"
        },
         {
            id:6,
            color: "btn-outline-light"
        },
         {
            id:7,
            color: "btn-outline-warning"
        },
         {
            id:8,
            color: "btn-outline-info"
        },
         {
            id:9,
            color: "btn-outline-dark"
        },
         {
            id:10,
            color: "btn-outline-orange"
        },
    ];
     return (
        <>
         {data.map((item,index)=>{
             return (
                 <Link to="#" className={`btn ${item.color} rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize m-2`} key={index}>
                     Cancel
                 </Link>
             );
         })}
        </>
     );
}
export default ButtonCard5 