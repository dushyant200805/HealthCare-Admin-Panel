import{ useEffect, useRef } from "react";

import $ from "jquery";
window.$ = $;
window.jQuery = $;

// DataTable

import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

// Responsive
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
function PatientDataTable(){
     const tableRef1 = useRef(null);

  useEffect(() => {
    const table = $(tableRef1.current).DataTable({
      responsive: true,
      pageLength: 5,
      lengthMenu: [5, 15, 20, 25],
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
      if ($.fn.DataTable.isDataTable(tableRef1.current)) {
        table.destroy();
      }
    };
  }, []);

  const DoctorData=[
        {
            id: 1,
            patientId: "#004",
            dateCheckIn: "26/02/2022",
            patientName: "Cive Slauw",
            doctorAssigned: "Dr.samantha",
            diseases: "Sleep problem",
            status: "New patient",
            statusClass: "bg-primary",
            roomNo: "ab-004"
        },
        {
            id: 2,
            patientId: "#005",
            dateCheckIn: "28/02/2022",
            patientName: "Andrew",
            doctorAssigned: "Dr.samantha",
            diseases: "Eye care",
            status: "Recovered",
            statusClass: "bg-secondary",
            roomNo: "ab-007"
        },
        {
            id: 3,
            patientId: "#006",
            dateCheckIn: "28/02/2022",
            patientName: "John",
            doctorAssigned: "Dr.Jacob",
            diseases: "Eye sight week",
            status: "old patient",
            statusClass: "bg-secondary",
            roomNo: "ab-004",
        },
        {
            id: 4,
            patientId: "#007",
            dateCheckIn: "28/02/2022",
            patientName: "Lisa",
            doctorAssigned: "Dr.august",
            diseases: "Skin rashes",
            status: "Recovered",
            statusClass: "bg-secondary",
            roomNo: "ab-007",
        },
        {
            id: 5,
            patientId: "#008",
            dateCheckIn: "01/03/2022",
            patientName: "Andria",
            doctorAssigned: "Dr.samantha",
            diseases: "Sleep problem",
            status: "New patient",
            statusClass: "bg-primary",
            roomNo: "ab-004",
        },
        {
            id: 6,
            patientId: "#009",
            dateCheckIn: "02/03/2022",
            patientName: "james",
            doctorAssigned: "Dr.samantha",
            diseases: "	Eye care",
            status: "Recovered",
            statusClass: "bg-secondary",
            roomNo: "ab-007",
        },
       
    ];
    return(
        <>
           <table className="table custom-data-table" ref={tableRef1} id="patientlistdt"  style={{ width: "100%" }}>
            <thead>
              <tr>
                <th className="text-dark-primary no-sort  ">
                  <input type="checkbox" className=""/>
                </th>
                <th className="text-dark-primary  ">
                  Patient ID
                </th>
                <th className="text-dark-primary  ">
                  Date Check In
                </th>
                <th className="text-dark-primary  ">
                  Patient Name
                </th>
                <th className="text-dark-primary  ">
                  Doctor Assigned
                </th>
                <th className="text-dark-primary  ">
                  diseases
                </th>
                <th className="text-dark-primary  ">
                  Status
                </th>
                <th className="text-dark-primary  ">
                  Room No
                </th>
                <th className="text-dark-primary no-sort  ">Action</th>
              </tr>
            </thead>
            <tbody>
                {DoctorData.map((item,index)=>{
                    return (
                     
                        <tr key={index}>
                            <td> <input type="checkbox"/></td>
                            <td>{item.patientId}</td>
                            <td>{item.dateCheckIn}</td>
                            <td>{item.patientName}</td>
                            <td>{item.doctorAssigned}</td>
                            <td>{item.diseases}</td>
                            <td>
                            <span
                                className={`custom-badge badge ${item.statusClass} text-white align-items-center rounded-pill text-capitalize`}>
                                {item.status}
                            </span>
                            </td>
                            <td>{item.roomNo}</td>
                            <td>
                            <div className="dropdown">
                                <button className="btn rounded-10" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-three-dots-vertical"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end p-0 border-0  rounded-10 bg-transparent">
                                <div className="animate slideIn card bg-white rounded-2">
                                    <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="dropdown-item py-2 border-b-dashed text-dark-primary fs-14 fw-600"
                                        data-bs-toggle="modal" data-bs-target="#viewpatientmodal" href="#">
                                        <span className="px-2 py-1 me-2"><i className="bi bi-eye"></i></span>Quick View</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item py-2 border-b-dashed text-dark-primary fs-14 fw-600"
                                        data-bs-toggle="modal" data-bs-target="#detailpatientmodal" href="#">
                                        <span className="px-2 py-1 me-2"><FontAwesomeIcon icon={faFile}/> </span>Detail View / History</a>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item py-2 border-b-dashed text-dark-primary fs-14 fw-600"
                                        to="/editpatient">
                                        <span className="px-2 py-1 me-2"><i className="bi bi-pen-fill"></i></span>Edit</Link>
                                    </li>
                                    <li>
                                        <a href="#"
                                        className="dropdown-item border-b-dashed py-2 text-dark-primary fs-14 fw-600"
                                        data-bs-toggle="modal" data-bs-target="#deleteconf">
                                        <span className="px-2 py-1 me-2"><i className=" bi bi-trash"></i></span>Delete</a>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                       
                    );
                })}
            </tbody>
          </table>
        </>
    );
}
export default PatientDataTable