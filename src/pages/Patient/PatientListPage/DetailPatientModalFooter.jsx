function DetailPatientModalFooter () {
    const data =[
        {
            id:1,
            date:"07-12-23",
            title:"Knee Pain",
            doctor:"Dr Anna",
            visit:"N/A",
            paymentStatus:"Paid",
            longBarbg:"badge-secondary",
            paymentStatusClass:"bg-success",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum velit eaque dignissimos sed odit sequi expedita debitis neque voluptatibus sit distinctio amet alias quasi quidem natus quam officiis quo incidunt, at sunt vero, quaerat, tenetur quod? Vel animi accusamus eum sed explicabo consectetur, obcaecati ratione amet sequi tempore aliquid nostrum!",
        },
        {
            id:2,
            date:"04-09-23",
            title:"Regular Checkup",
            doctor:"Dr Jacob",
            visit:"N/A",
            paymentStatus:"Paid",
            longBarbg:"badge-success",
            paymentStatusClass:"bg-success",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum velit eaque dignissimos sed odit sequi expedita debitis neque voluptatibus sit distinctio amet alias quasi quidem natus quam officiis quo incidunt, at sunt vero, quaerat, tenetur quod? Vel animi accusamus eum sed explicabo consectetur, obcaecati ratione amet sequi tempore aliquid nostrum!",
        },
        {
            id:3,
            date:"02-06-23",
            title:"Leg Fracture",
            doctor:"Dr Michaelle",
            visit:"N/A",
            paymentStatus:"Paid",
            longBarbg:"badge-orange",
            paymentStatusClass:"bg-success",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum velit eaque dignissimos sed odit sequi expedita debitis neque voluptatibus sit distinctio amet alias quasi quidem natus quam officiis quo incidunt, at sunt vero, quaerat, tenetur quod? Vel animi accusamus eum sed explicabo consectetur, obcaecati ratione amet sequi tempore aliquid nostrum!",
        },
    ]
    return (
        <>
            <div className="tab-pane fade show active py-3" id="pathistory-tab" role="tabpanel" aria-labelledby="pat-history">
                <div className="slim-outer">
                    <div id="pat-scroll" className="px-3 py-2">
                        <ul className="timeline-1 text-black">
                            {data.map((item,index)=>{
                                return (
                                <li className="event mb-3 border-b-dashed pb-4 px-3" key={index}>
                                    <div className="fs-12 text-slate mb-2">{item.date}</div>
                                    <div className="row mb-2 align-items-center">
                                        <div className="col-4">
                                            <h5 className="text-dark-primary mb-0 fw-bold">{item.title}</h5>
                                        </div>
                                        <div className={`col-8 ${item.longBarbg} rounded-pill py-2`}>
                                            <div className="d-flex flex-wrap justify-content-between align-items-center fs-14 gap-2">
                                                <div className="d-flex align-items-center justify-content-start">
                                                    <h6 className="text-dark-primary mb-1 fw-600 me-1">Assigned Doctor: </h6>{item.doctor}
                                                </div>
                                                <div className="d-flex align-items-center justify-content-start">
                                                    <h6 className="text-dark-primary mb-1 fw-600 me-1">Next Visit: </h6>{item.visit}
                                                </div>
                                                <div className="d-flex align-items-center justify-content-start">
                                                    <h6 className="text-dark-primary mb-1 fw-600 me-1">Payment Status: </h6><span
                                                    className={`badge custom-badge ${item.paymentStatusClass} fw-600 rounded-pill px-3 fs-10`}>{item.paymentStatus}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray">
                                        <h6 className="text-dark-primary mb-1 fw-600">Description:</h6>
                                        <span className="fs-14">{item.description}</span>
                                    </div>
                                </li>
                                );
                            })}
                         </ul>
                        </div>
                    </div>
                </div>
            <div className="tab-pane fade px-3 py-4" id="pat-settings" role="tabpanel" aria-labelledby="pat-settings">
                <p className="fs-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti repudiandae nam
                sed quod quo, quisquam sunt odio quidem, velit in enim aut reiciendis quae dolor consequatur. Quasi,
                temporibus quisquam.</p>
            </div>
        </>
    );
}
export default DetailPatientModalFooter;