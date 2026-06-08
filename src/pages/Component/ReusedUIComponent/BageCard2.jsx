function BageCard2 () {
    const data = [
        { id:1,  BageColorCLass:"bg-primary", texColor:"text-white"},
        { id:2,  BageColorCLass:"bg-secondary", texColor:"text-white"},
        { id:3,  BageColorCLass:"bg-info", texColor:"text-white" },
        { id:4,  BageColorCLass:"bg-light", texColor:"text-black"},
        { id:5,  BageColorCLass:"bg-warning", texColor:"text-black"},
        { id:6,  BageColorCLass:"bg-dark", texColor:"text-white"},
        { id:7,  BageColorCLass:"bg-danger", texColor:"text-white" },
        { id:8,  BageColorCLass:"bg-success", texColor:"text-white"},
        { id:9,  BageColorCLass:"bg-orange", texColor:"text-white"},
    ];
     return (
        <>
          {data.map((item,index)=>{
             return (
                 <div className={`badge ${item.BageColorCLass} rounded-pill mx-1 text-capitalize ${item.texColor}`} key={index}>Dark Badge</div>
             );
          })}
        </>
     );
}
export default BageCard2