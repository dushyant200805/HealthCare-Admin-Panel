function BackgorundColor() {
    const data =[
        {
            id:1,
            color: "bg-primary"
        },
         {
            id:2,
            color: "bg-dark"
        },
         {
            id:3,
            color: "bg-secondary"
        },
         {
            id:4,
            color: "bg-light"
        },
         {
            id:5,
            color: "bg-info"
        },
         {
            id:6,
            color: "bg-success"
        },
         {
            id:7,
            color: "bg-danger"
        },
         {
            id:8,
            color: "bg-warning"
        },
         {
            id:9,
            color: "bg-dark-primary"
        },
         {
            id:10,
            color: "bg-orange"
        },
    ];
    return (
        <>
         {data.map ((item,index)=>{
            return (
                    <div className="col-sm-6 col-md-4 col-lg-3 p-3" key={item.id}>
                        <div className={`border rounded ${item.color} p-5 text-center`}>
                            <span className="text-white">{`.${item.color}`}</span>
                        </div>
                    </div>
                    );
                })}
        </>
    );
}
export default BackgorundColor;