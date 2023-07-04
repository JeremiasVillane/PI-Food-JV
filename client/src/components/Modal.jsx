import { ModalContent, ModalWrapper } from "../styles/StyledModal.styled";
import ReactDom from "react-dom";
import { Button } from "../styles/common/Button";

const Modal = ({ message, mode, handleClose }) => {
  return ReactDom.createPortal(
    <>
      <ModalWrapper>
        <ModalContent mode={mode}>
          {mode === "error" ? <span>&#x2715;</span> : <span>&#10003;</span>}
          <h1>{mode.toUpperCase()}</h1>
          <p>{message}</p>
          <Button onClick={handleClose} kind={mode}>
            Close
          </Button>
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
