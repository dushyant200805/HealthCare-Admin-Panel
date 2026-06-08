import { StrictMode, useState, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client'
import './index.css'

import './jquery-setup.js';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// Import slimscroll after jQuery is global
import 'jquery-slimscroll';
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoardPage from './pages/DashBoard/DashBoardPage.jsx';
import DoctorListPage from './pages/Doctor/DoctorList/DoctorListPage.jsx';
import AddDoctorFormPage from './pages/Doctor/Adddoctor/AddDoctorFormPage.jsx';
import EditDoctorFormPage from './pages/Doctor/Editdoctor/EditDoctorFormPage.jsx';
import DoctorProfilePage from './pages/Doctor/DoctorProfile/DoctorProfilePage.jsx';
import PatientListPage from './pages/Patient/PatientListPage/PatientListPage.jsx';
import AddPatientFormPage from './pages/Patient/AddPateint/AddPatientFormPage.jsx';
import EditPatientPage from './pages/Patient/EditPatient/EditPatientPage.jsx';
import StaffPage from './pages/Staff/StaffPage.jsx';
import ReportsPage from './pages/Reports/ReportsPage.jsx';
import AddAssetsPage from './pages/Assets/AddAssetsPage.jsx';
import AsstesListTablePage from './pages/Assets/AssetsListTablePage.jsx';
import AllAssetsPage from './pages/Assets/AllAssetsPage.jsx';
import AppointmentListPage from './pages/Appointment/AppointmentListPage.jsx';
import BookAppointmentPage from './pages/Appointment/BookAppointmentPage.jsx';
import EditAppointmentPage from './pages/Appointment/EditAppointmentPage.jsx';
import DepartmentList from './pages/Department/DepartmentList.jsx';
import RoomsList from './pages/Rooms/RoomsList.jsx';
import PaymentList from './pages/Payment/PaymentList.jsx';
import PaymentInvoicePage from './pages/Payment/PaymentInvoicePage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import RagisterPage from './pages/Ragister/RagisterPage.jsx';
import ForgetPassPage from './pages/ForgetPass/ForgetPassPage.jsx';
import ComponentPage from './pages/Component/ComponentPage.jsx';
import NotFoundPage from "./pages/notfound/NotFoundPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App user={true}/>,
    children: [
      {
        path: "/",
        element: <DashBoardPage />,
      },
      {
        path: "/doctorlist",
        element: <DoctorListPage />,
      },
      {
        path: "/adddoctor",
        element: <AddDoctorFormPage />,
      },
      {
        path: "/editdoctor",
        element: <EditDoctorFormPage />,
      },
       {
        path: "/doctorprofile",
        element: <DoctorProfilePage />,
      },
       {
        path: "/patientlist",
        element: <PatientListPage />,
      },
       {
        path: "/addpatient",
        element: <AddPatientFormPage />,
      },
       {
        path: "/editpatient",
        element: <EditPatientPage/>,
      },
      {
        path: "/stafflist",
        element: <StaffPage/>,
      },
      {
        path: "/reports",
        element: <ReportsPage/>,
      },
       {
        path: "/addassets",
        element: <AddAssetsPage/>,
      },
      {
        path: "/assetslist",
        element: <AsstesListTablePage/>,
      },
      {
          path: "/allassets",
          element: <AllAssetsPage/>,
      },
      {
          path: "/appointmentlist",
          element: <AppointmentListPage/>,
      },
      {
          path: "/bookappointment",
          element: <BookAppointmentPage/>,
      },
       {
          path: "/editappointment",
          element: <EditAppointmentPage/>,
      },
      {
          path: "/departmentlist",
          element: <DepartmentList/>,
      },
      {
          path: "/allotedrooms",
          element: <RoomsList/>,
      },
       {
          path: "/paymentlist",
          element: <PaymentList/>,
      },
      {
          path: "/paymentinvoice",
          element: <PaymentInvoicePage/>,
      },
      {
          path: "/components",
          element: <ComponentPage/>,
      },
    ],
  },
 {
  path: "/login",
  element: <App user={false} />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
  ],
},
{
  path: "/register",
  element: <App user={false} />,
  children: [
    {
      index: true,
      element: <RagisterPage />,
    },
  ],
},
{
  path: "/resetpass",
  element: <App user={false} />,
  children: [
    {
      index: true,
      element: <ForgetPassPage />,
    },
  ],
},
 {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const RootApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      {loading && (
        <div id="preloader">
          <div className="loader"></div>
        </div>
      )}
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)
