import React, { useState } from 'react';
import './DesktopPopUp.css';
import Modal from 'react-modal';

const modalStyles = {
    content: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        outline: 'none',
        border: 'none',
        borderRadius: '0.4rem',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '30%',
        padding: '1% 3%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '1rem',
        wordSpacing: '0.1rem',
        animation: 'fadeInOut 0.3s ease-in-out',
    },
    overlay: {
        backgroundColor: 'rgba(47, 47, 47, 0.75)',
    },
};

const DesktopPopUp = ({ isOpen, onRequestClose, onColorClick, onCreate, groupName, setGroupName, seletedCircle, setSelectedCircle }) => {


    const handleGroupName = (event) => {
        setGroupName(event.target.value);
    }

    const handleSelectColor = (color) => {
        onColorClick(color);
        setSelectedCircle(color);
    }

    return (
        <Modal
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={onRequestClose}
            style={modalStyles}
        >
            <div className='modal-heading'>Create New group</div>
            <div className="create-group">
                <div>Group Name</div>
                <input
                    className='group-name'
                    type="text" name="group-name"
                    placeholder='Enter group name'
                    value={groupName}
                    onChange={handleGroupName}
                    required
                />
            </div>
            <div className="choose-color">
                <div>Choose colour</div>
                <div className="colors">
                    <div className={`color-circle ${seletedCircle === '#B38BFA' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#B38BFA') }}
                        id='first' />

                    <div className={`color-circle ${seletedCircle === '#FF79F2' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#FF79F2') }}
                        id='second' />

                    <div className={`color-circle ${seletedCircle === '#43E6FC' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#43E6FC') }}
                        id='third' />

                    <div className={`color-circle ${seletedCircle === '#F19576' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#F19576') }}
                        id='fourth' />

                    <div className={`color-circle ${seletedCircle === '#0047FF' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#0047FF') }}
                        id='fifth' />

                    <div className={`color-circle ${seletedCircle === '#6691FF' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#6691FF') }}
                        id='sixth' />

                </div>
            </div>
            <button className="create-btn" onClick={(e) => { e.preventDefault(); onCreate(); }}>Create</button>

        </Modal>
    )
}

export default DesktopPopUp;