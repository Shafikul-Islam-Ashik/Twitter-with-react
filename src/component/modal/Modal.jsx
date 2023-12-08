// const Modal = () => {
//   return <div></div>;
// };

// export default Modal;

import { LiaTimesSolid } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import "./Modal.scss";

const Modal = ({ children, hide }) => {
  return (
    <div className="modal-blur-area">
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <button onClick={() => hide(false)}>
              <LiaTimesSolid />
            </button>
            <span>
              <BsTwitterX />
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
