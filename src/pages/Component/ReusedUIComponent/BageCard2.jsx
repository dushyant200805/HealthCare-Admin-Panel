function BageCard2 () {
    const data = [
        { id:1,  BageColorCLass:"bg-primary"},
        { id:2,  BageColorCLass:"bg-secondary"},
        { id:3,  BageColorCLass:"bg-info" },
        { id:4,  BageColorCLass:"bg-light"},
        { id:5,  BageColorCLass:"bg-warning"},
        { id:6,  BageColorCLass:"bg-dark"},
        { id:7,  BageColorCLass:"bg-danger" },
        { id:8,  BageColorCLass:"bg-success"},
        { id:9,  BageColorCLass:"bg-orange"},
    ];
     return (
        <>
          {data.map((item,index)=>{
             return (
                 <div className={`badge ${item.BageColorCLass} text-white rounded-pill mx-1 text-capitalize`} key={index}>Dark Badge</div>
             );
          })}
        </>
     );
}
export default BageCard2