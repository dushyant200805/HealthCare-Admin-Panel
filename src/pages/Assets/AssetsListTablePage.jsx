import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import PageTitle from "../../components/Common-Sections/PageTitle";

window.$ = $;
window.jQuery = $;

const AsstesListTablePage = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
      pageLength: 10,
      lengthMenu: [10, 15,],
      ordering: true,
      searching: true,
      info: true,
      paging: true,
      pagingType: "simple_numbers",
      language: {
        search: "",
        searchPlaceholder: "Search Operation",
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
    const taskList = [
        {
            id: 1,
            AssetName: "ECG Machine",
            AssetCondition: "Good",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Jacob",
            AssignDate: "1/10/2024",
            Department: "Cardiology",
            Notes: "Regular maintenance required"
        },
        {
            id: 2,
            AssetName: "X-Ray Machine",
            AssetCondition: "Excellent",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Vince",
            AssignDate: "4/10/2023",
            Department: "Radiology",
            Notes: "Recently servicedd"
        },
        {
            id: 3,
            AssetName: "Defibrillator",
            AssetCondition: "Good",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Andrew",
            AssignDate: "3/10/2024",
            Department: "Emergency",
            Notes: "Battery replaced last month"
        },
         {
            id: 4,
            AssetName: "Ultrasound Machine",
            AssetCondition: "Fair",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Smith",
            AssignDate: "12/10/2024",
            Department: "Gynecology",
            Notes: "Needs software update"
        },
         {
            id: 5,
            AssetName: "Blood Pressure Monitor",
            AssetCondition: "Excellent",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Brown",
            AssignDate: "5/11/2023",
            Department: "General Medicine",
            Notes: "Portable model"
        },
         {
            id: 6,
            AssetName: "Oxygen Cylinder",
            AssetCondition: "Good",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Kevin",
            AssignDate: "9/02/2024",
            Department: "ICU",
            Notes: "Refilled monthly"
        },
         {
            id: 7,
            AssetName: "Ventilator",
            AssetCondition: "Excellent",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Williams",
            AssignDate: "18/07/2023",
            Department: "ICU",
            Notes: "Recently serviced"
        },
         {
            id: 8,
            AssetName: "Wheelchair",
            AssetCondition: "Fair",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Harris",
            AssignDate: "25/03/2024",
            Department: "Orthopedics",
            Notes: "One wheel needs repair"
        },
         {
            id: 9,
            AssetName: "Dental Chair",
            AssetCondition: "Good",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Patel",
            AssignDate: "14/06/2023",
            Department: "Dentistry",
            Notes: "Hydraulic system checked"
        },
         {
            id: 10,
            AssetName: "Defibrillator",
            AssetCondition: "Good",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Andrew",
            AssignDate: "3/10/2024",
            Department: "Emergency",
            Notes: "Battery replaced last month"
        },
         {
            id: 11,
            AssetName: "Ultrasound Machine",
            AssetCondition: "Fair",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Smith",
            AssignDate: "12/08/2023",
            Department: "Gynecology",
            Notes: "Needs software update"
        },
         {
            id: 12,
            AssetName: "Blood Pressure Monitor",
            AssetCondition: "Excellent",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Brown",
            AssignDate: "5/11/2023",
            Department: "General Medicine",
            Notes: "Portable model"
        },
         {
            id: 13,
            AssetName: "Oxygen Cylinder",
            AssetCondition: "Good",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Kevin",
            AssignDate: "9/02/2024",
            Department: "ICU",
            Notes: "Refilled monthly"
        },
         {
            id: 14,
            AssetName: "Patient Monitor",
            AssetCondition: "Excellent",
            DrImage:"public/05.jpg",
            AssignTo: "Dr. Wilson",
            AssignDate: "7/01/2024",
            Department: "ICU",
            Notes: "Refilled monthly"
         }
    ];
  

  return (
     <>
        <PageTitle title="HC-ERP-Booking List"/>
       <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Assets List</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Assets List</p>
          </div>
          <Link to="/allassets"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"><i
              className="bi bi-plus-circle me-2"></i> view all assets</Link>
        </div>
        <div className="bg-white  rounded-10 my-3">
          <div className="p-4">
            <table className="table custom-data-table" ref={tableRef}   style={{ width: "100%" }} id="assetslisttd">
              <thead>
                <tr>
                  <td className="text-capitalize text-dark no-sort">
                    <input type="checkbox" className="" name="check" value="check"/>
                  </td>
                  <td className="text-capitalize text-dark">Asset Name</td>
                  <td className="text-capitalize text-dark">Asset Condition</td>
                  <td className="text-capitalize text-dark">Assign To</td>
                  <td className="text-capitalize text-dark">Assign Date</td>
                  <td className="text-capitalize text-dark">Department</td>
                  <td className="text-capitalize text-dark no-sort">Notes</td>
                </tr>
              </thead>
              <tbody>
                {taskList.map((item,index)=>{
                    return (
                <tr key={index}>
                  <td><input type="checkbox"/></td>
                  <td>{item.AssetName}</td>
                  <td>{item.AssetCondition}</td>
                  <td>
                    <div className="d-flex">
                      <img src={item.DrImage} alt="" width="25" height="25" className="rounded-circle"/>
                      <div className="ms-2 text-dark">{item.AssignTo}</div>
                    </div>
                  </td>
                  <td>{item.AssignDate}</td>
                  <td>{item.Department}</td>
                  <td>{item.Notes}</td>
                </tr>
                    );
                })}
              </tbody>
            </table>
            
          </div>
        </div>
       </div>
     </>

                
  );
};

export default AsstesListTablePage;
