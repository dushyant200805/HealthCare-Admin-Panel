import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


window.$ = $;
window.jQuery = $;
function DepartmentTable (){
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
           DeliveredBy:"Ms. Elizabeth White",
           Received:"Dr. John Smith",
        },
        {
           id:2,
           date:"13.04.2025",
           Quantity:"300",
           DeliveredBy:"Mr. Henry Scott",
           Received:"Dr. Emily Davis",
        },
        {
           id:3,
           date:"14.04.2025",
           Quantity:"700",
           DeliveredBy:"Mr. Richard Lee",
           Received:"Dr. Michael Brown",
        },
        {
           id:4,
           date:"15.04.2025",
           Quantity:"450",
           DeliveredBy:"Mr. Alex Carter",
           Received:"Dr. Sarah Johnson",
        },
        {
           id:5,
           date:"16.04.2025",
           Quantity:"650",
           DeliveredBy:"Ms. Sarah Johnson",
           Received:"Dr. Robert Lee",
        },
        {
           id:6,
           date:"17.04.2025",
           Quantity:"320",
           DeliveredBy:"Mr. Daniel Clark",
           Received:"Dr. Olivia Martinez",
        },
        {
           id:7,
           date:"18.04.2025",
           Quantity:"540",
           DeliveredBy:"Ms. Olivia Martinez",
           Received:"Dr. David Wilson",
        },
        {
           id:8,
           date:"19.04.2025",
           Quantity:"400",
           DeliveredBy:"Mr. David Wilson",
           Received:"Dr. Sophia Anderson",
        },
        {
           id:9,
           date:"20.04.2025",
           Quantity:"600",
           DeliveredBy:"Ms. Sophia Anderson",
           Received:"Dr. James Thomas",
        },
        {
           id:10,
           date:"21.04.2025",
           Quantity:"750",
           DeliveredBy:"Mr. James Thomas",
           Received:"Dr. Elizabeth White",
        },
     ];

    return (
        <>
           <table  ref={tableRef}  className="table table-striped table-bordered custom-data-table" id="distributedtd">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Date</th>
                          <th>Quantity</th>
                          <th>Delivered By</th>
                          <th>Received By</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Data.map((item,index)=>{
                            return (
                                <tr key={index}>
                                    <td className="text-start">{item.id}</td>
                                    <td className="text-start">{item.date}</td>
                                    <td className="text-start">{item.Quantity}</td>
                                    <td className="text-start">{item.DeliveredBy}</td>
                                    <td className="text-start">{item.Received}</td>
                                </tr> 
                            );
                        })}
                      </tbody>
                    </table>
        </>
    );
}
export default DepartmentTable