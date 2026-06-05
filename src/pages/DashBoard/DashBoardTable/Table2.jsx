function Table2 () {
    const data=[
        {
            id:1,
            title:"Invoice has been issued",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"10 min ago"
        },
        {
            id:2,
            title:"Bill paid",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"30 mins ago"
        },
        {
            id:3,
            title:"Bill Due",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"45 mins ago"
        },
        {
            id:4,
            title:"Bill paid",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"1hr ago"
        },
        {
            id:5,
            title:"Bill Due",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"45 mins ago"
        },
        {
            id:6,
            title:"Bill Due",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"45 mins ago"
        },
        {
            id:7,
            title:"Bill paid",
            description:"Lorem ipsum dolor sit amet adipiscing elit",
            time:"1hr ago"
        },
    ]
    return (
        <>
           {data.map((item,index)=>{
            return (
                    <li className="event mb-3" key={index}>
                      <div className="d-flex align-items-center flex-wrap justify-content-between">
                        <div>
                          <h6 className="text-dark-primary mb-0">{item.title}</h6>
                          <span className="text-slate fw-medium fs-12">{item.description}</span>
                        </div>
                        <div className="text-slate fs-14">{item.time}</div>
                      </div>
                    </li>
            );
           })}
                   
                
        </>
    );
}
export default Table2;