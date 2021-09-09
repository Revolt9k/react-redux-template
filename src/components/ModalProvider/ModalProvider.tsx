import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { actionSetModal } from "store/actions/app";
import { RootState } from "store/index";

Modal.setAppElement("#root");

const ModalProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.app.modal);

  return (
    <>
      <Modal
        isOpen={modal === "main"}
        contentLabel='Main'
        shouldCloseOnEsc
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => dispatch(actionSetModal("disabled"))}
        className='modal'
        overlayClassName='modalContainer'
      >
        main modal window
      </Modal>
      {children}
    </>
  );
};

export default ModalProvider;
