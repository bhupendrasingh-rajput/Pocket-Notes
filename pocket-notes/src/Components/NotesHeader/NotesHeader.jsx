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
      <i className="fa-solid fa-arrow-left" onClick={handleBackClick}></i>
      <div className="header-group-name-logo" style={{ backgroundColor: selectedGroup.color }}>{selectedGroup.initials}</div>
      <div className="header-name">{selectedGroup.name}</div>
    </div>
  )
}

export default NotesHeader;