import React from 'react';
import './Mainpage.css';
import MainPageImage from '../../assets/MainPageImage.png';
import LockIcon from '../../assets/icons/lock.png';

const Mainpage = () => {
    return (
        <div className='mainpage'>
            <div className="mainpage-upper">
                <img src={MainPageImage} alt="Mainpage-Image" />
            </div>
            <div className="mainpage-lower">
                <div className="mainpage-content">
                    <div className='content-heading'>Pocket Notes</div>
                    <div className='content-text'>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</div>
                </div>
                <div className="mainpage-footer">
                    <img className='mainpage-footer-icon' src={LockIcon} alt="lock-icon" />
                    <div className="mainpage-footer-text">end-to-end encrypted</div>
                </div>
            </div>
        </div>
    )
}

export default Mainpage;