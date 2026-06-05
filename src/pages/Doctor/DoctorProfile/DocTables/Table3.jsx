import { Link } from "react-router";

function Table3 () {
    const patNotes = [
        {
            id:1,
            ShadeClass:"badge-success text-success", 
            name: "James Williams",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, et facilis unde quod itaque aspernatur cum odit quis nobis officia doloribus at velit accusamus error laborum suscipit voluptatem iure eos ea, a ipsam tempora necessitatibus delectus? A, earum! Vel harum quam temporibus sunt velit sequi similique saepe praesentium eum aspernatur.",
            status: "Open"
        },
        {
            id:2,
            ShadeClass:"badge-orange text-orange", 
            name: "Anna Martin",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, et facilis unde quod itaque aspernatur cum odit quis nobis officia doloribus at velit accusamus error laborum suscipit voluptatem iure eos ea, a ipsam tempora necessitatibus delectus? A, earum! Vel harum quam temporibus sunt velit sequi similique saepe praesentium eum aspernatur.",
            status: "Closed"
        },
        {
            id:3,
            ShadeClass:"badge-success text-success", 
            name: "Britney",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, et facilis unde quod itaque aspernatur cum odit quis nobis officia doloribus at velit accusamus error laborum suscipit voluptatem iure eos ea, a ipsam tempora necessitatibus delectus? A, earum! Vel harum quam temporibus sunt velit sequi similique saepe praesentium eum aspernatur.",
            status: "Open"
        },
        {
            id:4,
            ShadeClass:"badge-orange text-orange", 
            name: "Anna Martin",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, et facilis unde quod itaque aspernatur cum odit quis nobis officia doloribus at velit accusamus error laborum suscipit voluptatem iure eos ea, a ipsam tempora necessitatibus delectus? A, earum! Vel harum quam temporibus sunt velit sequi similique saepe praesentium eum aspernatur.",
            status: "Closed"
        },
        {
            id:5,
            ShadeClass:" badge-success text-success", 
            name: "Britney",
            note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, et facilis unde quod itaque aspernatur cum odit quis nobis officia doloribus at velit accusamus error laborum suscipit voluptatem iure eos ea, a ipsam tempora necessitatibus delectus? A, earum! Vel harum quam temporibus sunt velit sequi similique saepe praesentium eum aspernatur.",
            status: "Open"
        }
    ]
    return (
        <>     
           {patNotes.map((item,index)=>{
                 return (
                  <li className="py-2 px-3" key={index}>
                    <Link to="#" data-bs-toggle="modal" data-bs-target="#patnotes">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-dark poppins w-75">
                          <span className="d-block text-capitalize text-dark fw-600 px-0 fs-14 mb-2">{item.name}</span>
                          <div className="w-100 text-truncate overflow-hidden fs-14">{item.note}</div>

                        </div>
                        <div className="w-25 text-end">
                          <div className={`badge ${item.ShadeClass} rounded-pill px-3`}>{item.status}</div>
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