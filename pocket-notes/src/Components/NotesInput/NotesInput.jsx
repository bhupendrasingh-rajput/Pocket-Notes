import React, { useState } from 'react';
import './NotesInput.css';

const NotesInput = ({ selectedGroup, parentGroup, setParentGroup }) => {
  const [note, setNote] = useState('');

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSendClick = () => {
    const timestamp = new Date().toISOString();
    console.log(timestamp);

    const groupIndex = parentGroup.findIndex(group => group.name.toLowerCase() === selectedGroup.name.toLowerCase());

    const updatedParentGroup = [...parentGroup];

    updatedParentGroup[groupIndex].notes.push({
      content: note,
      timestamp: timestamp,
    });

    localStorage.setItem('parentGroup', JSON.stringify(updatedParentGroup));

    setParentGroup(updatedParentGroup);
    setNote('');
  };

  return (
    <div className='notes-input'>
      <div className='form-area'>
        <textarea
          type="text"
          id='notes-input-text'
          placeholder='Enter your text here...........'
          value={note}
          onChange={handleNoteChange}
        />
        <div className="button-area">
          <button
            className='notes-send-btn'
            disabled={!note.trim()}
            style={{ color: !note.trim() ? '#A9A9A9' : '#001F8B' }}
            onClick={handleSendClick}
          >
            <i className="material-icons">send</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesInput;
