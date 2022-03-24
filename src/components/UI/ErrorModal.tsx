import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { ErrorMessage } from "../../Interfaces";
import React from "react";
import ReactDom from "react-dom";

const Backdrop = (props: { onConfirm: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

interface ModalProps extends ErrorMessage {
  onConfirm: () => void;
}

const ModalOverlay = (props: ModalProps) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props: ModalProps) => {
  const backdropRoot = document.getElementById("backdrop-root") as HTMLElement;
  const overlayRoot = document.getElementById("overlay-root") as HTMLElement;
  // assuming in your html file has a div with id 'modal-root';
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        backdropRoot
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        overlayRoot
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
