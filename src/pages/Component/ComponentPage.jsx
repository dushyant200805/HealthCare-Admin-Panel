import { Link } from "react-router-dom";
import BackgorundColor from "./ReusedUIComponent/BackgroundColor";
import ButtonCard1 from "./ReusedUIComponent/ButtonCard1";
import ButtonCard2 from "./ReusedUIComponent/ButtonCard2";
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtonCard3 from "./ReusedUIComponent/ButtonCard3";
import ButtonCard4 from "./ReusedUIComponent/ButtonCard4";
import ButtonCard5 from "./ReusedUIComponent/ButtonCard5";
import ButtonCard6 from "./ReusedUIComponent/ButtonCard6";
import SocialCard from "./ReusedUIComponent/SocialCard";
import BageCard1 from "./ReusedUIComponent/BadgeCard1";
import BageCard2 from "./ReusedUIComponent/BageCard2";
import DeleteModal from "./ComponentModal/DeleteModal";
import AddModal from "./ComponentModal/AddModal";
import ToastModal from "./ComponentModal/ToastModal";
import PageTitle from "../../components/Common-Sections/PageTitle";
function ComponentPage() {
  return (
    <>
      <PageTitle title="HC-ERP-Components" />
      <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Components</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary">
              <Link to="/">Home</Link>
            </p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Components</p>
          </div>
        </div>
        <div className="bg-white rounded-10 my-3 p-4">
          <h5 className="fw-600 text-dark-primary text-capitalize mt-0 mb-4">
            Color Codes
          </h5>
          <div className="row">
            <BackgorundColor />
          </div>
        </div>
        <div className="bg-white  rounded-10 my-3 p-4">
          <h5 className="fw-600 text-dark-primary text-capitalize mt-0 mb-4">
            Buttons UI
          </h5>
          <div className="mb-2 py-3 border-b-dashed">
            <ButtonCard1 />
          </div>
          <div className="mb-2 py-3 border-b-dashed">
            <ButtonCard2 />
          </div>
          <div className="mb-2 ">
            <ButtonCard3 />
          </div>
          <div className="mb-2 pb-3 border-b-dashed">
            <ButtonCard4 />
          </div>
          <div className="mb-2">
            <ButtonCard5 />
          </div>
          <div className="mb-2 pb-3">
            <ButtonCard6 />
          </div>
        </div>
        <div className="bg-white rounded-10 my-3 p-4">
          <div className="social-icons mb-4 border p-3 rounded">
            <h5 className="fw-600 text-dark-primary text-capitalize mt-0 mb-4">
              Social Icons
            </h5>
            <div className="d-flex flex-wrap gap-2">
              <SocialCard />
            </div>
          </div>
          <div className="badges border p-3 mb-4 rounded">
            <h5 className="fw-600 text-dark-primary text-capitalize mt-0 mb-4">
              Badges
            </h5>
            <div className="my-3">
              <BageCard1 />
            </div>
            <div className="my-3">
              <BageCard2 />
            </div>
          </div>
          <div className="alert&toast border p-3 mb-4 rounded">
            <h5 className="fw-600 text-dark-primary text-capitalize mt-0 mb-4">
              Alerts & Toasts
            </h5>
            <div className="d-flex gap-2 align-items-center">
              <button
                className="btn btn-danger rounded-pill"
                data-bs-toggle="modal"
                data-bs-target="#deleteconf"
              >
                Delete
              </button>
              <button
                className="btn btn-success rounded-pill px-3"
                data-bs-toggle="modal"
                data-bs-target="#success"
              >
                Add
              </button>
              <div>
                <button
                  type="button"
                  className="btn btn-primary mw-120 rounded-pill"
                  id="liveToastBtn"
                >
                  Toast Btn
                </button>
                <div className="toast-container position-fixed top-0 end-0 p-3">
                  <ToastModal />
                </div>
              </div>
            </div>
          </div>
          <div className="links border p-3 rounded">
            <p className="m-0 mb-2">
              We have used icons of{" "}
              <Link
                to="https://icons.getbootstrap.com/"
                className="text-decoration-underline"
              >
                Bootstrap icons
              </Link>{" "}
              &{" "}
              <Link
                to="https://fontawesome.com/icons"
                className="text-decoration-underline"
              >
                {" "}
                Font Awesome 6
              </Link>
            </p>
            <p className="m-0 mb-2">
              You can access all images from images folder which is located at
              "" in the root of the folder.
            </p>
          </div>
        </div>
      </div>
      <DeleteModal />
      <AddModal />
    </>
  );
}
export default ComponentPage;
