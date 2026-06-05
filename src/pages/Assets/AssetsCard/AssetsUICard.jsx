function AssetsUICard () {
    const data =[
        {
          id:1,
          AssetsImage:"/equipments/tool1.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Stethoscope",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"new"    
        },
        {
          id:2,
          AssetsImage:"/equipments/tool2.webp",
          CardTagName:"inventory Out",
          CardTag:"badge-danger text-danger",
          AssetsTitle:"Dental Instrument",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-danger",  
          quantity:"0",
          Conditionsbg:"bg-danger",
          Conditions:"-"    
        },
        {
          id:3,
          AssetsImage:"/equipments/tool3.webp",
          CardTagName:"inventory low",
          CardTag:"badge-warning text-warning",
          AssetsTitle:"scissors",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-warning",  
          quantity:"10",
          Conditionsbg:"bg-danger",
          Conditions:"Old"    
        },
        {
          id:4,
          AssetsImage:"/equipments/tool4.webp",
          CardTagName:"inventory full",
          CardTag:"badge-warning text-warning",
          AssetsTitle:"injections",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
        {
          id:5,
          AssetsImage:"/equipments/tool5.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"trial frame",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
        {
          id:6,
          AssetsImage:"/equipments/tool6.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Thermometer",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
         {
          id:7,
          AssetsImage:"/equipments/tool7.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Dental Equipment",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
         {
          id:8,
          AssetsImage:"/equipments/tool8.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Digital Thermometer",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
         {
          id:9,
          AssetsImage:"/equipments/tool9.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Crutches",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
         {
          id:10,
          AssetsImage:"/equipments/tool10.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Blood Pressure Monitor",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
         {
          id:11,
          AssetsImage:"/equipments/tool11.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Dental Cast",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
         {
          id:12,
          AssetsImage:"/equipments/tool11.webp",
          CardTagName:"inventory full",
          CardTag:"badge-success text-success",
          AssetsTitle:"Dental Forceps",
          Description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, iste.",
          quantitybg:"bg-success",  
          quantity:"40",
          Conditionsbg:"bg-success",
          Conditions:"New"    
        },
    ];
    return (
        <>
        {data.map((item,index)=>{
            return (

           <div className="col-sm-6 col-md-4 col-xxl-3" key={index}>
                  <div className="card rounded-4 overflow-hidden p-2 shadow-sm">
                    <div className="card-img position-relative">
                      <img src={item.AssetsImage} className="w-100 rounded-4 mb-2"  alt=""/>
                      <p className={`m-3 px-3 rounded-pill ${item.CardTag}  fw-600 text-capitalize position-absolute top-0`}>{item.CardTagName}</p>
                    </div>
                    <h3 className="fw-600 text-dark-primary text-capitalize">{item.AssetsTitle}</h3>
                    <p className=" fs-14 text-capitalize text-light fw-medium">{item.Description}</p> 
                        <table className="table table-bordered text-capitalize">
                            <tbody>
                                <tr>
                                    <td className="fw-bold p-2">
                                        quantity
                                    </td>
                                    <td className={`fw-medium p-2 ${item.quantitybg} text-white`}>
                                        {item.quantity}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td className="fw-bold p-2">
                                        Conditions
                                    </td>
                                    <td className={`fw-medium p-2 ${item.Conditionsbg} text-white`}>
                                        {item.Conditions}
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    <div>
                        <button className="btn btn-primary text-capitalize rounded-pill fw-semibold"  
                        data-bs-toggle="modal" data-bs-target="#productinventory">view more detail</button>
                    </div>
                  </div>
            </div>
            );
        })}
        </>
    );
}
export default AssetsUICard