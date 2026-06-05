function Table4 () {
    const data =[
        {
            id:1,
            time:"Today 09:00 AM",
            name:"Ruby Saul",
            status:"New Patient",
            tagbg:"bg-primary",
        },
        {
             id:2,
            time:"Today 10:00 AM",
            name:"Anna",
            status:"Old Patient",
            tagbg:"bg-orange",
        },
        {
            id:3,
            time:"Today 02:00 PM",
            name:"James",
            status:"New Patient",
            tagbg:"bg-primary",
        },
        {
            id:4,
            time:"Today 03:00 PM",
            name:"Bryan",
            status:"Old Patient",
            tagbg:"bg-orange",
        }
    ]
    return (
        <>
        {data.map((item,index)=>{
            return (

            <div className="py-2 mb-2 border-b-dashed" key={index}>
                <div className="fs-12 text-gray">{item.time}</div>
                <div className="d-flex align-items-center justify-content-between">
                    <h6 className="text-dark-primary mb-1 fw-normal">{item.name}</h6>
                    <div>
                        <span className={`custom-badge badge ${item.tagbg} text-white align-items-center rounded-pill text-capitalize me-2`}>{item.status}</span>
                    </div>
                </div>
            </div>
            );
        })}
              
        </>
    );
}
export default Table4