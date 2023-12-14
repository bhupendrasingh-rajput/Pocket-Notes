import React from 'react';
import './NotesHeader.css';
import { useNavigate } from 'react-router-dom';

const NotesHeader = ({ selectedGroup, setSelectedGroup }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
    setSelectedGroup([]);
  }
  return (
    <div className='notes-header'>
      <div className='back-page-logo' onClick={handleBackClick}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="header-group-name-logo" style={{ backgroundColor: selectedGroup.color }}>{selectedGroup.initials}</div>
      <div className="header-name">{selectedGroup.name}</div>
    </div>
  )
}

export default NotesHeader;