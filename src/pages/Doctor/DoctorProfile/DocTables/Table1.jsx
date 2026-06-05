function Table1 () {

    const Data = [
        {
           id:1,
           ShadeName:"badge-success",
           ShadeText:"text-success", 
           name :"professional",
           description:"Certified Skin Treatment",
        },
         {
           id:2,
           ShadeName:"badge-orange",
           ShadeText:"text-orange", 
           name :"Certified",
           description:"Cold Laser Operation",
        },
         {
           id:3,
           ShadeName:"badge-secondary",
           ShadeText:"text-info", 
           name :"Medication Laser",
           description:"Hair Lose Product",
        },
         {
           id:4,
           ShadeName:" badge-secondary",
           ShadeText:"text-success", 
           name :"Medication Laser",
           description:"Hair Lose Product",
        },
         {
           id:5,
           ShadeName:"badge-orange",
           ShadeText:"text-orange", 
           name :"Certified",
           description:"Cold Laser Operation",
        },
         {
           id:6,
           ShadeName:"badge-secondary",
           ShadeText:"text-info", 
           name :"Medication Laser",
           description:"Hair Lose Product",
        },
    ]
    return (
        <>
          {Data.map((item,index)=>{
            return (
                 <div key={index} className="d-flex flex-wrap align-items-center py-2 mb-2 border-b-dashed">
                  <div
                    className={`rounded-circle ${item.ShadeName} reward-circle d-flex align-items-center justify-content-center me-3`}>
                    <i className={`bi bi-trophy-fill ${item.ShadeText}`}></i>
                  </div>
                  <div>
                    <h6 className="text-dark-primary mb-1">{item.name}</h6>
                    <span className="text-gray">{item.description}</span>
                  </div>
                </div>
            );
          }
        )}
                
        </>
    );
}
export default Table1