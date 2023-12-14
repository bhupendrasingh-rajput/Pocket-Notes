import React, { useContext, useState, useEffect } from 'react';
import { NotesContext } from '../../Context/NotesState';
import NotesHeader from '../../Components/NotesHeader/NotesHeader';
import NotesInput from '../../Components/NotesInput/NotesInput';
import NotesDisplay from '../../Components/NotesDisplay/NotesDisplay';
import './Notespage.css';


const Notespage = () => {
  const { parentGroup, setParentGroup, selectedGroup, setSelectedGroup } = useContext(NotesContext);

  useEffect(() => {
    const storedParentGroups = JSON.parse(localStorage.getItem('parentGroup')) || [];
    if (parentGroup) {
      setParentGroup(storedParentGroups);
    }
  }, []);

  useEffect(() => {
    setSelectedGroup(JSON.parse(localStorage.getItem('selectedGroup')));
  }, []);


  return (
    <div className="notespage">
      <NotesHeader
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />

      <NotesDisplay
        selectedGroup={selectedGroup}
        parentGroup={parentGroup}
      />

      <NotesInput
        selectedGroup={selectedGroup}
        parentGroup={parentGroup}
        setParentGroup={setParentGroup}
      />
    </div>
  )
}

export default Notespage;