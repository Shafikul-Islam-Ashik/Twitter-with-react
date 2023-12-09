import { LiaTimesSolid } from "react-icons/lia";
// import { BsTwitterX } from "react-icons/bs";
import "./CreateAccountModal.scss";

const CreateAccountModal = ({ children, hide }) => {
  return (
    <div className="create-acc-modal-blur-area">
      <div className="create-acc-modal-container">
        <div className="modal">
          <div className="modal-header">
            <button className="btn" onClick={() => hide(false)}>
              <LiaTimesSolid />
            </button>
            <span>Step 1 of 5</span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;
