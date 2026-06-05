import { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

window.$ = $;
window.jQuery = $;

const UserTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      responsive: true,
      pageLength: 4,
      lengthMenu: [4, 15, 20, 25],
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
            patientName: "Peter",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.john",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "12/10/2023",
            disease: "Fracture"
        },
        {
            id: 2,
            patientName: "Michael",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.doe",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "14/10/2023",
            disease: "Skin Care"
        },
        {
            id: 3,
            patientName: "John",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.june",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "16/10/2023",
            disease: "Dental Care"
        },
        {
            id: 4,
            patientName: "David",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.adam",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "12/10/2023",
            disease: "Physician"
        },
        {
            id: 5,
            patientName: "Peter",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.john",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "12/10/2023",
            disease: "Fracture"
        },
        {
            id: 6,
            patientName: "David",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.adam",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "12/10/2023",
            disease: "Physician"
        },
        {
            id: 7,
            patientName: "Peter",
            patientImg: "public/05.jpg",
            doctorTeam: "Dr.john",
            doctorImgs: ["public/01.jpg", "public/02.jpg", "public/03.jpg"],
            date: "12/10/2023",
            disease: "Fracture"
        }
    ];
  

  return (
    
                     <table ref={tableRef}  id="operationtd"  className="table custom-data-table" style={{ width: "100%" }} >
                       <thead>
                            <tr>
                                <th className="text-dark-primary  py-2 px-3">
                                    patient name
                                </th>
                                <th className="text-dark-primary  py-2 px-3">
                                    doctor team
                                </th>
                                <th className="text-dark-primary  py-2 px-3">
                                    date of operation
                                </th>
                                <th className="text-dark-primary  py-2 px-3">
                                    report
                                </th>
                                <th className="text-dark-primary  py-2 px-3">
                                    diseaseses
                                </th>
                            </tr>
                      </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="d-flex">
                                            <div>
                                                 <img src={item.patientImg} alt="" width="25" height="25" className="rounded-circle me-2"/>
                                            </div>
                                            <div className="ms-2 text-dark ">{item.patientName}</div>
                                        </td>
                                        <td className="position-relative">
                                            <div className="h-100 d-flex">
                                                <img src={item.doctorImgs[0]} alt="" width="25" height="25"
                                                    className="rounded-circle operation-team-img border border-white img-1"/>
                                                <img src={item.doctorImgs[1]} alt="" width="25" height="25"
                                                    className="rounded-circle operation-team-img border border-white img-2"/>
                                                <img src={item.doctorImgs[2]} alt="" width="25" height="25"
                                                    className="rounded-circle operation-team-img border border-white img-3"/>
                                                <div className="ms-2 text-dark-primary fw-600  text-capitalize">
                                                    <a href="#">{item.doctorTeam}</a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-dark ">{item.date}</td>
                                        <td className="text-dark ">
                                            <Link to="#"><i className="bi bi-file-pdf text-danger"></i></Link>
                                        </td>
                                        <td className="text-dark ">{item.disease}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                  </table>  
                
  );
};

export default UserTable;
