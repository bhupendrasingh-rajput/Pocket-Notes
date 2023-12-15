import React from 'react';
import './NotesHeader.css';
import { useNavigate } from 'react-router-dom';

const NotesHeader = ({ selectedGroup, setSelectedGroup, parentGroup, setParentGroup }) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
    setSelectedGroup([]);
  }

  const handleDeleteGroup = () => {
    const updatedParentGroup = parentGroup.filter(group => group.name.toLowerCase() !== selectedGroup.name.toLowerCase());
    setParentGroup(updatedParentGroup);
    setSelectedGroup([]);
    navigate('/');
  };

  return (
    <div className='notes-header'>
      <div className='left-side' >
        <i className="fa-solid fa-arrow-left" onClick={handleBackClick}></i>
        <div className="header-group-name-logo" style={{ backgroundColor: selectedGroup.color }}>{selectedGroup.initials}</div>
        <div className="header-name">{selectedGroup.name}</div>
      </div>
      <div className="right-side">
      <i className="fa-solid fa-trash" style={{fontSize:'1rem'}} onClick={handleDeleteGroup}></i>
      </div>
      
    </div>
  )
}

export default NotesHeader;