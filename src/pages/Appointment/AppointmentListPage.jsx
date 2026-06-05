import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import PageTitle from "../../components/Common-Sections/PageTitle";

window.$ = $;
window.jQuery = $;

function AppointmentListPage() {
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

    const data = [
        {
          id:1,
          patientImage: "public/05.jpg",
          patientName: "Andria Lalena",
          consultingDoctor: "Dr. Jacob",
          treatment: "Infertility",
          mobile: "+1-12344567890",
          email: "peter@gmail.com",
          date: "1/10/2022",
          time: "7:30 PM"
        },
        {
          id:2,
          patientImage: "public/05.jpg",
          patientName: "Bryan",
          consultingDoctor: "Dr.Vince",
          treatment: "Eye Care",
          mobile: "87578448511",
          email: "vince@gmail.com",
          date: "4/10/23",
          time: "10:30 PM"
        },
        {
          id:3,
          patientImage: "public/05.jpg",
          patientName: "Lisa",
          consultingDoctor: "Dr. Jacob",
          treatment: "Infertility",
          mobile: "+1-12344567890",
          email: "andrew@gmail.com",
          date: "3/10/2022",
          time: "9:30 PM"
        }
    ];

  return (
    <>
         <PageTitle title="HC-ERP-Booking List"/>
         <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Appointment List</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Appointment List</p>
          </div>
          <Link to="/bookappointment"
            className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"><i
              className="bi bi-plus-circle me-2"></i> Book Appointment</Link>
        </div>
        <div className="bg-white  rounded-10 my-3">
          <div className="p-4">
            <table className="table custom-data-table" ref={tableRef}  id="appointmentlist">
              <thead>
                <tr>
                  <td className="text-capitalize text-dark no-sort">
                    <input type="checkbox" className="" name="check" value="check"/>
                  </td>
                  <td className="text-capitalize text-dark">
                    Name
                  </td>
                  <td className="text-capitalize text-dark">
                    Consulting Doctor
                  </td>
                  <td className="text-capitalize text-dark">
                    Treatment
                  </td>
                  <td className="text-capitalize text-dark">
                    Mobile
                  </td>
                  <td className="text-capitalize text-dark">
                    Email
                  </td>
                  <td className="text-capitalize text-dark">
                    Date
                  </td>
                  <td className="text-capitalize text-dark">
                    Time
                  </td>
                  <td className="text-capitalize text-dark no-sort">Action</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item,index)=>{
                    return (
                            <tr key={index}>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <div className="d-flex">
                                    <img src={item.patientImage} alt="" width="25" height="25" className="rounded-circle"/>
                                    <div className="ms-2 text-dark">{item.patientName}</div>
                                    </div>
                                </td>
                                <td>{item.consultingDoctor}</td>
                                <td>{item.treatment}</td>
                                <td>{item.mobile}</td>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>
                                    <Link to="/editappointment" className="btn"><i className=" bi bi-pencil-square"></i></Link>
                                    <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#deleteconf"><i
                                        className=" bi bi-trash"></i></a>
                                </td>
                            </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
        </div>
        <DeleteModal/>
    </>
  );
}
export default AppointmentListPage;