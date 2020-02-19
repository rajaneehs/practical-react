import React from "react";

// react-toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom Notification (component)
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

// configure
toast.configure();

function NotificationsComponent() {
  const notify = () => {
    toast("default basic notification", {
      position: toast.POSITION.BOTTOM_CENTER
    });
    toast.warn("warning notification", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: false
    });
    toast.info("info notification", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 8000
    });
    toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_LEFT });
  };
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default NotificationsComponent;
