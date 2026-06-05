import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import PageTitle from "../../components/Common-Sections/PageTitle";
function PaymentInvoicePage() {
    return (
        <>
         <PageTitle title="HC-ERP-Payment Invoice"/>
          <div className="px-4 mb-4 min-vh-100 outer-main">
        <h3 className="fw-600 text-dark-primary text-capitalize">Payment Invoice</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-3">
          <div className="d-flex flex-wrap text-capitalize align-items-center">
            <p className="mb-0 pb-0 fw-bold text-dark-primary"><Link to="/">Home</Link></p>
            <i className="bi bi-chevron-right pagination-arrow text-dark-primary"></i>
            <p className="mb-0 pb-0 text-dark">Payment Invoice</p>
          </div>
        </div>
        <div className="bg-white  rounded-10 my-3 py-4 px-3">
          <div className="row justify-content-between mb-4">
            <div className="col-12">
              <span>Invoice:</span><span>#3456778</span>
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3">
              400 Turnpike Drive Birmingham
            </div>
            <div className="col-sm-6 col-md-4 col-xl-3 text-end">
              <div>To,</div>
              <div>
                Michale Joseph 
              </div>
              <div>
                Alabama
              </div>
              <div>
                <span>Invoice Date:</span><span>20-10-23</span>
              </div>
              <div>
                <span>Due Date:</span><span>26-10-23</span>
              </div>
            </div>
          </div>
          <div className="billing-list table-responsive mb-4">
            <table className="table ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Unit Cost</th>
                  <th>Charges</th>
                  <th>Discount</th>
                  <th className="text-start text-md-end">total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Visiting Charges</td>
                  <td>-</td>
                  <td>-</td>
                  <td>$100</td>
                  <td>-</td>
                  <td className="text-start text-md-end">$100</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Medicines</td>
                  <td>10</td>
                  <td>$15</td>
                  <td>$150</td>
                  <td>-</td>
                  <td className="text-start text-md-end">$150</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row flex-md-row-reverse justify-content-between mb-4 me-1">
            <div className="col-md-6 col-xxl-3 border rounded d-flex flex-column justify-content-between py-2">
              <div className="row">
                <div className="col-6 col-xl-8   text-primary ">
                  Sub - Total amount:
                </div>
                <div className="col-6 col-xl-4 text-end">
                  $250
                </div>
                <div className="col-6 col-xl-8 text-primary ">
                  Tax (10%) :
                </div>
                <div className="col-6 col-xl-4 text-end">
                  $25
                </div>
                <div className="col-6 col-xl-8 text-primary  ">
                  Discount -
                </div>
                <div className="col-6 col-xl-4 text-end">
                  $5
                </div>
              </div>
              <div className="d-flex justify-content-between border-top py-1">
                <span className="text-primary fw-600">Total Amount :</span>
                <span className=""> $270</span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-4">
                <div className="text-primary">
                  Notes
                </div>
                <div className="text-dark">
                  notes for patients
                </div>
              </div>
              <div>
                <div className="text-primary">
                  Terms And Condition:
                </div>
                <div className="text-dark">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quo blanditiis quas eaque incidunt
                  iure neque eligendi molestiae pariatur vel.
                </div>
              </div>
            </div>
          </div>
          <div className="text-end">
            <button className="btn btn-outline-dark mb-3 mb-sm-0 me-sm-3 py-2 rounded-pill mw-120"><i
                className="bi bi-printer-fill"></i> Print</button>
            <button className="btn btn-primary mb-3 mb-sm-0 mw-120 py-2 rounded-pill">Payment</button>
          </div>
        </div>
          </div>
        </>
    );
}
export default PaymentInvoicePage;