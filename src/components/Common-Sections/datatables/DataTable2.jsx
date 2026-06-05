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

const DataTable2 = () => {
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

    const taskList = [
        {
            id: 1,
            name:"Amull",
            image: "public/05.jpg",
            department: "Radiology",
            specialization: "Cancer",
            degree: "MBBS",
            address: "east road",
            joinDate: "10/3/2022"
        },
        {
            id: 2,
            name:"Lisa",
            image: "public/05.jpg",
            department: "Radiology",
            specialization: "Cancer",
            degree: "MBBS",
            address: "west road",
            joinDate: "12/3/2022"
        },
        {
            id: 3,
            name:"John",
            image: "public/05.jpg",
            department: "Physician",
            specialization: "operator",
            degree: "MBBS,MS",
            address: "downtown",
            joinDate: "10/3/2022"
        },
        {
            id: 4,
            name:"Andria Lalena",
            image: "public/05.jpg",
            department: "Physician",
            specialization: "operator",
            degree: "MBBS,MS",
            address: "downtown",
            joinDate: "14/3/2022"
        },
        {
            id: 5,
            name:"Amull",
            image: "public/05.jpg",
            department: "Radiology",
            specialization: "Cancer",
            degree: "MBBS",
            address: "east road",
            joinDate: "10/3/2022"
        },
        {
            id: 6,
            name:"Brian",
            image: "public/05.jpg",
            department: "Orthopedic",
            specialization: "Skeleton",
            degree: "MBBS,MS",
            address: "downhill",
            joinDate: "14/3/2022"
        },
       
    ];
  

  return (
     
               
                
                     <table ref={tableRef1}   className="table custom-data-table" style={{ width: "100%" }} >
                        <thead className="border-bottom pb-3">
                              <tr>
                                <th className="no-sort">
                                     <input type="checkbox" className=""/>
                                </th>
                                <th>
                                             Name
                                </th>
                                <th>
                                          Departments
                                </th>
                                <th>
                                            Specialization
                                </th>
                                <th>
                                             Degree
                                </th>
                                <th>
                                           Address
                                </th>
                                <th>
                                              Join Date
                                </th>
                                <th className="no-sort">Action</th>
                            </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                   
                                    <tr key={index}>
                            <td>
                            <input type="checkbox"/>
                            </td>
                            <td>
                            <div className="d-flex">
                                <img src={item.image} alt="" width="25" height="25" className="rounded-circle"/>
                                <div className="ms-2 text-dark">{item.name}</div>
                            </div>
                            </td>
                            <td className="text-dark">
                            {item.department}
                            </td>
                            <td className="text-dark">
                            {item.specialization}
                            </td>
                            <td className="text-dark">
                            {item.degree}
                            </td>
                            <td className="text-dark">
                            {item.address}
                            </td>
                            <td className="text-dark">
                            {item.joinDate}
                            </td>
                            <td>
                            <div className="dropdown">
                                <button className="btn rounded-10" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-three-dots-vertical"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end p-0 border-0  rounded-10 bg-transparent">
                                <div className="animate slideIn card bg-white rounded-2">
                                    <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to="/doctorprofile" className="dropdown-item border-b-dashed text-dark-primary py-2 fw-500 fs-14"
                                        >
                                        <i className="bi bi-eye-fill me-2 fs-12"></i>View</Link>
                                    </li>
                                    <li>
                                        <Link to="/editdoctor" className="dropdown-item text-dark-primary py-2 fw-500 fs-14">
                                        <i className="bi bi-pen-fill me-2 fs-12"></i> Edit</Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>
                                )
                            })}
                        </tbody>
                  </table>
               
              
  );
};

export default DataTable2;
