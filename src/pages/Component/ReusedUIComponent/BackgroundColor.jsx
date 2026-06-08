function BackgorundColor() {
    const data =[
        {
            id:1,
            color: "bg-primary",
            textcolor:"text-white",
        },
         {
            id:2,
            color: "bg-dark",
            textcolor:"text-white",
        },
         {
            id:3,
            color: "bg-secondary",
            textcolor:"text-white",
        },
         {
            id:4,
            color: "bg-light",
            textcolor:"text-black",
        },
         {
            id:5,
            color: "bg-info",
            textcolor:"text-white",
        },
         {
            id:6,
            color: "bg-success",
            textcolor:"text-white",
        },
         {
            id:7,
            color: "bg-danger",
            textcolor:"text-white",
        },
         {
            id:8,
            color: "bg-warning",
            textcolor:"text-white",
        },
         {
            id:9,
            color: "bg-dark-primary",
            textcolor:"text-white",
        },
         {
            id:10,
            color: "bg-orange",
            textcolor:"text-white",
        },
    ];
    return (
        <>
         {data.map ((item)=>{
            return (
                    <div className="col-sm-6 col-md-4 col-lg-3 p-3" key={item.id}>
                        <div className={`border rounded ${item.color} p-5 text-center`}>
                            <span className={`${item.textcolor}`}>{`.${item.color}`}</span>
                        </div>
                    </div>
                    );
                })}
        </>
    );
}
export default BackgorundColor;