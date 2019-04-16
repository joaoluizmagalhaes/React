import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app'); //prevent accessibilty readers to read the app content.

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={props.handleCloseModal}
        >Okay</button>
    </Modal>
);

export default OptionModal;