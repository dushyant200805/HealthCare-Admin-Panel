function DashBoardCard () {
    const data = [
        {
            id:1,
            img:"public/taimg.svg",
            title:"Total Appointments",
            count:"2500",
            percentageClass:"text-success",
            percentage:"+20%",
            trend:"Increased",
            icon:"bi bi-arrow-up-right-circle-fill",
            
        },
        {
            id:2,
            img:"public/tp.svg",
            title:"Patients",
            count:"3145",
            percentageClass:"text-danger",
            percentage:"-15%",
            trend:"Decreased",
            icon:"bi bi-arrow-down-right-circle-fill",
        },
        {
            id:3,
            img:"public/tsimg.svg",
            title:"Total Staffs",
            count:"350",
            percentageClass:"text-success",
            percentage:"+10%",
            trend:"Increased",
            icon:"bi bi-arrow-up-right-circle-fill",
        },
        {
            id:4,
            img:"public/tbimg.svg",
            title:"Total Beds",
            count:"345",
            percentageClass:"text-danger",
            percentage:"-30%",
            trend:"Decreased",
            icon:"bi bi-arrow-down-right-circle-fill",
        },
    ]
    return (
        <>
        {data.map((item,index)=>{
            return (
            <div className="col-sm-6 col-xxl-3 px-4 py-2" key={index}>
                <div className="row align-items-center flex-row-reverse bg-white shadow-sm p-3 h-100  rounded-10">
                <div className="col-5 text-end">
                    <img src={item.img} alt=""/>
                </div>
                <div className="col-7">
                    <h6 className="text-slate my-2 mt-xl-0 mb-xl-3 fs-6 fw-medium">
                    {item.title}
                    </h6>
                    <h3 className="text-primary mb-2 fw-bold lh-sm">{item.count}</h3>
                    <div className="text-nowrap">
                    <span className={`fs-12 ${item.percentageClass}  fw-500`}><i className={`${item.icon} mx-1`}></i>
                        {item.percentage}</span>
                    <span className="px-1 fs-12 fw-medium text-slate">{item.trend}</span>
                    </div>
                </div>
                </div>
            </div>
            );
        })}
        </>
    ) ;
}

export default DashBoardCard