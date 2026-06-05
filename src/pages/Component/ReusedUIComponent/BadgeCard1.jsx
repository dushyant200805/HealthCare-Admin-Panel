function BageCard1 () {
    const data = [
        { id:1,  BageColorCLass:"badge-primary text-primary"},
        { id:2,  BageColorCLass:"badge-secondary text-secondary"},
        { id:3,  BageColorCLass:"badge-info text-info" },
        {  id:4,  BageColorCLass:"badge-light text-light"},
        {  id:5,  BageColorCLass:"badge-warning text-warning"},
        {  id:6,  BageColorCLass:"badge-dark text-dark"},
        {  id:7,  BageColorCLass:"badge-danger text-danger" },
        {  id:8,  BageColorCLass:"badge-success text-success"},
        {  id:9,  BageColorCLass:"badge-orange text-orange"},
    ];
     return (
        <>
          {data.map((item,index)=>{
             return (
                 <div className={`badge ${item.BageColorCLass} rounded-pill mx-1`} key={index}>Light Badge</div>
             );
          })}
        </>
     );
}
export default BageCard1