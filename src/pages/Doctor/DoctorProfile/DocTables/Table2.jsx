function Table2 () {
    const Data= [
        {
            id:1,
            title:"Registration",
            description:"Get here on time"
        },
        {
            id:2,
            title:"Opening Ceremony",
            description:"Get ready for an exciting event."
        },
        {
            id:3,
            title:"Main Event",
            description:"This is where it all goes down"
        },
        {
            id:4,
            title:"Registration",
            description:"Get here on time"
        },
        {
            id:5,
            title:"Opening Ceremony",
            description:"Get ready for an exciting event."
        },
    ]

    return (
        <>
        {Data.map((item,index)=>{
            return(
                  <li key={index} className="event mb-3">
                      <h6 className="text-dark-primary mb-1">{item.title}</h6>
                      <span className="text-gray">{item.description}</span>
                    </li>
            )
        })}
        </>
    );
}
export default Table2