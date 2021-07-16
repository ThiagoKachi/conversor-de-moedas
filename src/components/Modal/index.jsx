import React, { useContext } from 'react';

import { ContainerModal } from '../Modal/styles';
import closeImg from '../../assets/closeButton.svg';
import Modal from 'react-modal';
import { ModalContext } from '../../context/ModalContext';

export function ModalContent() {
  const {
    setIsOpen,
    setInputValue,
    inputValue,
    modalIsOpen,
    convert,
    setConvert,
    convertTo,
    setConvertTo,
    valueConverted
  } = useContext(ModalContext);

  function closeModal() {
    setIsOpen(false);
  }

  function resetForm() {
    setIsOpen(false);
    const resetSelect1 = document.getElementById('resetSelect1');
    const resetSelect2 = document.getElementById('resetSelect2');
    resetSelect1.selectedIndex = 0;
    resetSelect2.selectedIndex = 0;
    setInputValue(1);
    setConvert('BRL');
    setConvertTo('BRL');
  }

  return (
    modalIsOpen && (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        closeTimeoutMS={300}
      >
        <ContainerModal>
          <div className="title-button-close">
            <h2>Conversão</h2>
            <button onClick={closeModal}>
              <img src={closeImg} alt="Close" />
            </button>
          </div>
          <div className="converted-values">
            {inputValue} {convert} = {valueConverted.toFixed(2)} {convertTo}
          </div>
          <button className="new-convert-button" onClick={resetForm}>Nova Conversão</button>
        </ContainerModal>
      </Modal>
    </div>
    )
  )
}
