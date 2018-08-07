import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const OptionModel = (props)=>(
    
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose = {props.handleClearOption}

            contentLabel="Selected Option">
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}

            <button onClick={props.handleClearOption}>Okay</button>

        </Modal>
)

export default OptionModel