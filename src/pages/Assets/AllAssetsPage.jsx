import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import AssetsUICard from "./AssetsCard/AssetsUICard";
import AssetsModal from "./AsstesModal/AssetsModal";
import PageTitle from "../../components/Common-Sections/PageTitle";
function AllAssetsPage () {
    return (
        <>
         <PageTitle title="HC-ERP-AllAssets"/>
          <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">all assets</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-600 text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0">All Assets</p> 
          </div>
          <Link to="/assetslist" className="btn btn-primary rounded-4 fw-500 py-2 rounded-pill mw-120 px-4 text-capitalize"> Assets list 
               <FontAwesomeIcon icon={faEye} className="ms-2"/> 
          </Link>
        </div>
        <div className="mb-4 rounded-10">
          <div className="border-0 shadow-sm h-100 bg-white  rounded-10">
            <div className="card-body p-3 poppins asset-main">
              <div className="row g-2">
                <AssetsUICard/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AssetsModal/>
        </>
    );
}
export default AllAssetsPage