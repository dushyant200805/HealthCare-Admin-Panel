import { Link } from "react-router";

function Footer () {
    return (
        <>
         <div className="shadow-sm py-4 px-4 bg-white footer d-flex flex-wrap justify-content-between align-items-center  fs-14">
        <div>
          {new Date().getFullYear()} © All Rights Reserved By Health Care ERP
        </div>
        <div>
          <Link to="#" className="text-primary text-decoration-underline fw-600">Privacy Policy</Link> | <Link
            to="#" className="text-primary text-decoration-underline fw-600">Terms & Conditions</Link>
        </div>
      </div>
        </>
    );
}
export default Footer;