import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Spinner } from "react-bootstrap";
import { FaUndoAlt } from "react-icons/fa";
import api from "../../../service/api";
import "../../../styles/Modal.css";

function ModalRenovar({ path, id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDisabled, setIsDisabled] = useState(false);
  const [sucess, setSucess] = useState(false);

  async function close() {
    setInterval(() => {
      setIsDisabled(false);
      handleClose();
      window.location.reload();
    }, 2000);
  }

  async function updateItem() {
    setIsDisabled(true);

    try {
      await api.patch(`lending/extendlending/?id=${id}`);
      setSucess(true);
    } catch (err) {
      alert("Erro ao Renovar!");
      console.log(err);
    } finally {
      await close();
    }

    setIsDisabled(false);
  }

  return (
    <>
      <button className="btn-renovar-card desktop" onClick={handleShow}>
        <FaUndoAlt className="fa-undo" />
        Renovar
      </button>

      <button className="btn-renovar-card mobile" onClick={handleShow}>
        <FaUndoAlt className="fa-undo" />
      </button>

      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Renovar empréstimo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja Renovar?
          {isDisabled && (
            <div className="loading-modal">
              <Spinner animation="border" />
            </div>
          )}
          {sucess && <p className="success-message">Renovado com sucesso</p>}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn-cancelar-modal"
            onClick={handleClose}
            disabled={isDisabled}
          >
            Cancelar
          </button>
          <button
            className="btn-renovar-modal"
            onClick={updateItem}
            disabled={isDisabled}
          >
            <FaUndoAlt className="fa-undo" />
            Renovar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRenovar;
