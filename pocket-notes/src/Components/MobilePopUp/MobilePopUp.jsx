import React, { useState } from 'react';
import Modal from 'react-modal';
import './MobilePopUp.css';

const MobilePopUpStyle = {
    content: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        outline: 'none',
        border: 'none',
        borderRadius: '0.4rem',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
        height: '30%',
        padding: '2% 3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontWeight: '500',
        fontSize: '1rem',
        wordSpacing: '0.1rem',
    },
    overlay: {
        backgroundColor: 'rgba(47, 47, 47, 0.75)',
    },
};

const MobilePopUp = ({ isOpen, onRequestClose, onColorClick, onCreate, groupName, setGroupName, seletedCircle, setSelectedCircle }) => {

    const handleGroupName = (event) => {
        setGroupName(event.target.value);
    }

    const handleSelectColor = (color) => {
        onColorClick(color);
        setSelectedCircle(color);
    }

    return (
        <Modal
            portalClassName='cutom-modal'
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={onRequestClose}
            style={MobilePopUpStyle}
        >
            <div className='mobile-modal-heading'>Create New group</div>
            <div className="mobile-create-group">
                <div>Group Name</div>
                <input
                    className='mobile-group-name'
                    type="text" name="group-name"
                    placeholder='Enter group name'
                    value={groupName}
                    onChange={handleGroupName}
                    required
                />
            </div>
            <div className="mobile-choose-color">
                <div>Choose colour</div>
                <div className="mobile-colors">
                    <div className={`mobile-color-circle ${seletedCircle === '#B38BFA' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#B38BFA') }}
                        id='first' />

                    <div className={`mobile-color-circle ${seletedCircle === '#FF79F2' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#FF79F2') }}
                        id='second' />

                    <div className={`mobile-color-circle ${seletedCircle === '#43E6FC' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#43E6FC') }}
                        id='third' />

                    <div className={`mobile-color-circle ${seletedCircle === '#F19576' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#F19576') }}
                        id='fourth' />

                    <div className={`mobile-color-circle ${seletedCircle === '#0047FF' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#0047FF') }}
                        id='fifth' />

                    <div className={`mobile-color-circle ${seletedCircle === '#6691FF' ? 'selected' : ''}`}
                        onClick={() => { handleSelectColor('#6691FF') }}
                        id='sixth' />

                </div>
            </div>
            <button className="mobile-create-btn" onClick={(e) => { e.preventDefault(); onCreate(); }}>Create</button>

        </Modal>
    )
}

export default MobilePopUp;