import React from 'react';
import './NotesDisplay.css';

const dateWithFormat = (timeString) => {
  const date = new Date(timeString);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

const timeWithFormat = (timeString) => {
  const date = new Date(timeString);
  let hours = date.getHours();
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
}

const NotesDisplay = ({ selectedGroup, parentGroup }) => {
  const groupIndex = parentGroup.findIndex(group => group.name.toLowerCase() === selectedGroup.name.toLowerCase());
  const requiredGroup = parentGroup[groupIndex];

  return (
    <div className='notes-display'>
      {requiredGroup.notes.map((item) => {
        return (
          <div className='notes-content' key={item.timestamp}>
            <div className="notes-content-text">
              {item.content}
            </div>
            <div className="notes-content-date-time">
              {dateWithFormat(item.timestamp)} &nbsp; <h2> • </h2> &nbsp; {timeWithFormat(item.timestamp)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotesDisplay;
