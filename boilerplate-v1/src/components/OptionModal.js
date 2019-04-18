import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); //prevent accessibilty readers to read the app content.

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            onClick={props.handleCloseModal}
            className="button"
        >Okay</button>
    </Modal>
);

export default OptionModal;