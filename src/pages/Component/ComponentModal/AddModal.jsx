function AddModal() {
  return (
    <>
      <div className="modal fade" id="success" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 position-relative">
            <div className="position-absolute top-0 end-0 p-4 z-3">
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="py-4 text-center">
                <i className="fa-solid fa-circle-check text-success fs-1 my-3"></i>
                <h4 className="text-success mb-3">Successfull</h4>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  harum, laborum odit magni quam tenetur, atque accusamus sint,
                  adipisci itaque vitae. Animi a pariatur tempore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddModal;
