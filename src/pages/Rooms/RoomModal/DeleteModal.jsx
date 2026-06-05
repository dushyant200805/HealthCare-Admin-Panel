function DeleteModal() {
  return (
    <>
      <div
        className="modal fade"
        id="deleteconf"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-body">
              <div className="px-4 text-center">
                <i className="bi bi-exclamation-triangle-fill text-danger fs-1"></i>
                <h6 className="text-dark mb-3">
                  Are you sure you want to delete this ?
                </h6>
                <button
                  className="btn btn-outline-danger me-3 rounded-pill"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
                <button className="btn btn-danger rounded-pill">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeleteModal;
