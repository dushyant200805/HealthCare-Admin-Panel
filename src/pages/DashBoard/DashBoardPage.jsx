import { Link } from "react-router"
import ChartUI1 from "../../components/Common-Sections/charts/Chart-1"
import ChartUI2 from "../../components/Common-Sections/charts/Chart-2"
import Table1 from "./DashBoardTable/Table1"
import DashBoardCard from "./DashBoardCard"
import DataTable1 from "../../components/Common-Sections/datatables/DataTable1"
import ChartUI3 from "../../components/Common-Sections/charts/Chart-3"
import ChartUI4 from "../../components/Common-Sections/charts/Chart-4"
import Table2 from "./DashBoardTable/Table2"
import Table3 from "./DashBoardTable/Table3"
import ChartUI5 from "../../components/Common-Sections/charts/Chart-5"
import PageTitle from "../../components/Common-Sections/PageTitle"

function DashBoardPage() {
    return (
        <>
        
         <PageTitle title="HC-ERP-Dashboard"/>
          <div className="px-4 mb-4 min-vh-100 outer-main">
            <h4 className="mb-4 fw-600 text-dark-primary mt-2">Dashboard</h4>
            <div className="row mb-3 total-count-cards">
              <DashBoardCard/>
            </div>
            <div className="row mb-2 mb-lg-4">
              <div className="mb-4 mb-xl-0 col-xl-7 col-xxl-8">
                <div className="bg-white h-100 shadow-sm  rounded-10 mb-4">
                  <h5 className="text-dark-primary fw-600 px-4 py-3 py-md-4 mb-0">
                    Patient By Department
                  </h5>
                  <ChartUI1/>
                </div>
              </div>
              <div className="mb-4 mb-xl-0 col-xl-5 col-xxl-4">
                <div className=" rounded-10 h-100 shadow-sm bg-white  rounded-10">
                  <h5 className="text-dark-primary fw-600 mb-0 px-4 ps-3 pb-1 pt-3  py-md-4">
                    Overall Progress
                  </h5>
                  <div className="card-body px-3">
                    <ChartUI2/>
                  </div>

                </div>
              </div>
            </div>
            <div className="row mb-2 mb-lg-4">
              <div className="mb-4 mb-xxl-0 col-xl-5 col-xxl-4">
                <div className="border-0 h-100 shadow-sm mb-4 bg-white  rounded-10 top-department slim-outer">
                  <div className="d-flex justify-content-between p-3 py-md-4">
                    <h5 className="text-dark-primary fw-600 mb-0">
                      Top Departments
                    </h5>
                    <Link to="#" className="text-primary fw-600">View All</Link>
                  </div>
                  <div className="card-body px-3" id="top_department">
                    <Table1/>
                  </div>
                </div>
              </div>
              <div className="mb-4 mb-xxl-0 col-xl-7 col-xxl-8">
                <div className="bg-white h-100 shadow-sm  rounded-10 mb-4 ">
                  <div className="d-flex justify-content-between p-3 py-md-4">
                    <h5 className="text-dark-primary fw-600 mb-0">
                      Operations
                    </h5>
                    <Link to="#" className="text-primary fw-600">View All</Link>
                  </div>
                  <div className="table-responsive px-2 pt-1">
                    <DataTable1/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-2 mb-lg-4">
              <div className="mb-4 mb-xxl-0 col-xl-6 ">
                <div className="h-100 shadow-sm bg-white  rounded-10 align-items-center">
                  <h5 className="text-dark-primary fw-600 mb-0 px-4 ps-3 pb-1 pt-3  py-md-4">
                    Total Death Reports
                    <span className="text-primary fw-bold ms-2">15k</span>
                  </h5>
                  <ChartUI3/>
                </div>
              </div>
              <div className="mb-4 mb-xxl-0 col-xl-6">
                <div className=" rounded-10 h-100 shadow-sm bg-white  rounded-10">
                  <div className="p-4 ps-3">
                    <h5 className="text-dark-primary fw-600 mb-0">
                      Total Accident Reports
                      <span className="text-primary fw-bold ms-2">10k</span>
                    </h5>
                  </div>
                  <ChartUI4/>
                </div>
              </div>
            </div>
            <div className="row mb-2 flex-row-reverse mb-lg-4 notification-bottom-card">
              <div className="mb-4 mb-xxl-0 col-xl-6 col-xxl-4">
                <div className="border-0 h-100 shadow-sm mb-4 bg-white  rounded-10 slim-outer">
                  <div className="d-flex justify-content-between p-3 py-md-4">
                    <h5 className="text-dark-primary fw-600 mb-0">
                      Recent Activity
                    </h5>
                    <a href="#" className="text-primary fw-600">View All</a>
                  </div>

                  <div className="card-body px-4" id="recent_activity">
                    <div id="content">
                      <ul className="timeline-1 text-black">
                        <Table2/>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 mb-xxl-0 col-xl-6 col-xxl-5">
                <div className="border-0 h-100 shadow-sm mb-4 bg-white rounded-10 slim-outer">
                  <div className="d-flex justify-content-between p-3 py-md-4">
                    <h5 className="text-dark-primary fw-600 mb-0">
                      Notification
                    </h5>
                    <a href="#" className="text-primary fw-600">View All</a>
                  </div>
                  <div className="card-body px-3" id="notification">
                    <ul className="list-unstyled text-dark-primary mb-0 click-menu">
                      <Table3/>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mb-4 mb-xxl-0  col-xxl-3">
                <div className="border-0 h-100 shadow-sm mb-4 bg-white rounded-10">
                  <div className="p-0 bg-transparent">
                    <h5 className="text-dark-primary fw-600 mb-0 px-4 ps-3 pb-1 pt-3  py-md-4">Earnings<span
                        className="text-primary fs-10 ms-2">in thousand</span></h5>
                  </div>
                  <div className="card-body px-3">
                    <ChartUI5/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default DashBoardPage