import { useEffect, useRef } from "react";
import { Toast } from "bootstrap";

function ToastModal() {
  const toastRef = useRef(null);

  useEffect(() => {
    const toastEl = toastRef.current;

    if (!toastEl) return;

    const toastInstance = Toast.getOrCreateInstance(toastEl);

    const handleClick = () => {
      toastInstance.show();
    };

    const button = document.getElementById("liveToastBtn");

    button?.addEventListener("click", handleClick);

    return () => {
      button?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        ref={toastRef}
        id="liveToast"
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="/02.jpg" width="25" className="rounded me-2" alt="..." />
          <strong className="me-auto">Hi There ! How Can I help you</strong>
          <small>now</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            accusantium enim distinctio. Repellat, non odio quidem, a
            perspiciatis neque excepturi voluptas eaque ut ex officia adipisci
            quibusdam repellendus veritatis deleniti.
          </p>
        </div>
      </div>
    </>
  );
}
export default ToastModal;
