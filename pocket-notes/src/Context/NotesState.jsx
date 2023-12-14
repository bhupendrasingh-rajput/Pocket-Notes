import React, { createContext, useState, useEffect } from 'react';

const NotesContext = createContext({
    parentGroup: [],
    setParentGroup: () => { },
    selectedGroup: {},
    setSelectedGroup: () => { },
});

const NotesState = (props) => {
    const [parentGroup, setParentGroup] = useState(() => {
        const storedParentGroup = JSON.parse(localStorage.getItem('parentGroup')) || [];
        return storedParentGroup;
    });

    const [selectedGroup, setSelectedGroup] = useState(() => {
        const storedSelectedGroup = JSON.parse(localStorage.getItem('selectedGroup')) || {};
        return storedSelectedGroup;
    });

    useEffect(() => {
        localStorage.setItem('parentGroup', JSON.stringify(parentGroup));
    }, [parentGroup]);

    useEffect(() => {
        localStorage.setItem('selectedGroup', JSON.stringify(selectedGroup));
    }, [selectedGroup]);

    return (
        <NotesContext.Provider value={{ selectedGroup, setSelectedGroup, parentGroup, setParentGroup }}>
            {props.children}
        </NotesContext.Provider>
    );
};

export default NotesState;
export { NotesContext };
