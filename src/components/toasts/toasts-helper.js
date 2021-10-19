import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastOptions =  {
    position: "top-right",
    autoClose: 1360,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };

export const showToast = (type, msg) => {
  switch (type) {
    case "success": {
      toast.success(msg, toastOptions);
      break;
    }
    case "error": {
      toast.error(msg, toastOptions);
      break;
    }
  }
};
