import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from "react-router-dom";

window.$ = $;
window.jQuery = $;

const StafListTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
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
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        table.destroy();
      }
    };
  }, []);
  const taskList = [
    {
      id: 1,
      StafImage: "/05.jpg",
      StafName: "Andria lalena",
      Designation: " Compounder",
      Mobile: "+1-9124476789",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/3/2022",
    },
    {
      id: 2,
      StafImage: "/05.jpg",
      StafName: "Vince",
      Designation: "Senior Physician",
      Mobile: "+1-91325025989",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "04/06/2022",
    },
    {
      id: 3,
      StafImage: "/05.jpg",
      StafName: "Lisa",
      Designation: "Nurse",
      Mobile: "+1-9124988789",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/3/2022",
    },
    {
      id: 4,
      StafImage: "/05.jpg",
      StafName: "John lalena",
      Designation: "Dental Care",
      Mobile: "+1-9124458789",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/3/2022",
    },
    {
      id: 5,
      StafImage: "/05.jpg",
      StafName: "Jacob",
      Designation: "Health Department",
      Mobile: "+1-91325036990",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/8/2022",
    },
    {
      id: 6,
      StafImage: "/05.jpg",
      StafName: "Jacob",
      Designation: "Skin Care",
      Mobile: "+1-9132586989",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/3/2022",
    },
    {
      id: 7,
      StafImage: "/05.jpg",
      StafName: "Andrew",
      Designation: "Dental Care",
      Mobile: "+1-91325024989",
      Email: "andrew@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/6/2022",
    },
    {
      id: 8,
      StafImage: "/05.jpg",
      StafName: "Amull",
      Designation: "Senior Physician",
      Mobile: "+1-9124986989",
      Email: "demomail@gmail.com",
      Address: "Lorem ipsum dolor sit amet.",
      JoiningDate: "10/3/2022",
    },
  ];

  return (
    <table
      ref={tableRef}
      id="stafflisttd"
      className="table custom-data-table "
      style={{ width: "100%" }}
    >
      <thead>
        <tr>
          <td className="  no-sort">
            <input type="checkbox" className="" />
          </td>
          <td className=" ">Name</td>
          <td className=" ">Designation</td>
          <td className=" ">Mobile</td>
          <td className=" ">Email</td>
          <td className=" ">Address</td>
          <td className=" ">Joining Date</td>
          <td className="  no-sort">Action</td>
        </tr>
      </thead>
      <tbody>
        {taskList.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="d-flex">
                  <img
                    src={item.StafImage}
                    alt=""
                    width="25"
                    height="25"
                    className="rounded-circle"
                  />
                  <div className="ms-2 text-dark">{item.StafName}</div>
                </div>
              </td>
              <td className="text-dark">{item.Designation}</td>
              <td className="text-dark">{item.Mobile}</td>
              <td className="text-dark">{item.Email}</td>
              <td className="text-dark">
                <Link to="#">{item.Address}</Link>
              </td>
              <td className="text-dark">{item.JoiningDate}</td>
              <td>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#editstaff"
                >
                  <i className=" bi bi-pencil-square"></i>
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteconf"
                >
                  <i className=" bi bi-trash"></i>
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StafListTable;
