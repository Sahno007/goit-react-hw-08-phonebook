import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useCustomContext } from "context/userEditContext";
import EditModalStyled from "./EditContactModal.styled";
import EditContactForm from "./EditContactForm";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditContactModal = () => {
  const { name, number, isShowModal, setToggleShowModal } = useCustomContext();

  const onBackdrop = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setToggleShowModal(false);
  };

  useEffect(() => {
    function onEsc(e) {
      if (e.code !== "Escape") {
        return;
      }
      setToggleShowModal(false);
    }

    document.body.style.overflow = "hidden";
    const paddingOffSet = window.innerWidth - document.body.offsetWidth + "px";
    document.body.style.paddingRight = paddingOffSet;
    window.addEventListener("keydown", onEsc);

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = 0;
    };
  }, [setToggleShowModal]);

  const modalRoot = document.getElementById("contact-edit-modal-root") || document.createElement('div');
  document.body.appendChild(modalRoot);

  return modalRoot
    ? createPortal(
        <EditModalStyled onClick={onBackdrop}>
          <div className="modal">
            <button
              type="button"
              className="close-btn"
              onClick={() => setToggleShowModal(!isShowModal)}
            >
              <AiOutlineCloseCircle size={24} />
            </button>
            <h2>
              <span className="first">Edit </span> user
            </h2>
            <ul className="user-info-container">
              <li>
                <p className="user-info-item">
                  Current name:{" "}
                  <span className="user-info-current">{name}</span>
                </p>
              </li>
              <li>
                <p className="user-info-item">
                  Current number:{" "}
                  <span className="user-info-current">{number}</span>
                </p>
              </li>
            </ul>

            <EditContactForm />
          </div>
        </EditModalStyled>,
        modalRoot
      )
    : null;
};

export default EditContactModal;