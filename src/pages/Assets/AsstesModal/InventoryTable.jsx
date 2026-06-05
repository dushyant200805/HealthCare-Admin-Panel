import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


window.$ = $;
window.jQuery = $;
function InventoryTable (){
     const tableRef = useRef(null);
     
  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
      pageLength: 5,
      lengthMenu: [5, 10, 20, 25],
      ordering: true,
      searching: true,
      info: true,
      paging: true,
      pagingType: "simple_numbers",
      language: {
        search: "",
        searchPlaceholder: "Search Inventory",
        paginate: {
          previous: "Previous",
          next: "Next",
        },
        info: "Showing _START_ To _END_ Of _TOTAL_ Entries",
      },
      dom: '<"d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3"lf>rt<"d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3"ip>',
    });

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        table.destroy();
      }
    };
  }, []);

     const Data = [
        {
           id:1,
           date:"12.04.2025",
           Quantity:"500",
           Received:"Dr. John Smith",
        },
        {
           id:2,
           date:"13.04.2025",
           Quantity:"300",
           Received:"Dr. Emily Davis",
        },
        {
           id:3,
           date:"14.04.2025",
           Quantity:"700",
           Received:"Dr. Michael Brown",
        },
        {
           id:4,
           date:"15.04.2025",
           Quantity:"450",
           Received:"Dr. Sarah Johnson",
        },
        {
           id:5,
           date:"16.04.2025",
           Quantity:"650",
           Received:"Dr. Robert Lee",
        },
        {
           id:6,
           date:"17.04.2025",
           Quantity:"320",
           Received:"Dr. Olivia Martinez",
        },
        {
           id:7,
           date:"18.04.2025",
           Quantity:"540",
           Received:"Dr. David Wilson",
        },
        {
           id:8,
           date:"19.04.2025",
           Quantity:"400",
           Received:"Dr. Sophia Anderson",
        },
        {
           id:9,
           date:"20.04.2025",
           Quantity:"600",
           Received:"Dr. James Thomas",
        },
        {
           id:10,
           date:"21.04.2025",
           Quantity:"750",
           Received:"Dr. Elizabeth White",
        },
     ];

    return (
        <>
           <table  ref={tableRef}  className="table table-striped table-bordered custom-data-table" id="addedtd">
                      <thead>
                        <tr>
                          <th className="text-center">S.No</th>
                          <th className="text-center">Entry Date</th>
                          <th className="text-center">Item Quantity</th>
                          <th className="text-center">Received By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">{item.date}</td>
                                    <td className="text-center">{item.Quantity}</td>
                                    <td className="text-center">{item.Received}</td>
                                </tr> 
                            );
                        })}
                      </tbody>
                    </table>
        </>
    );
}
export default InventoryTable