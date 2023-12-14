import React, { useState, useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { NotesContext } from '../../Context/NotesState';
import DesktopPopUp from '../DesktopPopUp/DesktopPopUp';

import 'react-toastify/dist/ReactToastify.css';
import './DesktopSidebar.css';

const getInitials = (nameString) => {
    const wordsInString = nameString.split(' ');
    const initials = wordsInString.map(word => word.trim().charAt(0).toUpperCase());
    return initials.slice(0, 2).join('');
}

const getNameToBeDisplayed = (nameString) => {
    return nameString.charAt(0).toUpperCase() + nameString.slice(1);
}

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);
    const [groupName, setGroupName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [seletedCircle, setSelectedCircle] = useState('');

    const navigate = useNavigate();

    const { parentGroup, setParentGroup } = useContext(NotesContext);

    useEffect(() => {
        const storedParentGroups = JSON.parse(localStorage.getItem('parentGroup')) || [];
        if (parentGroup) {
            setParentGroup(storedParentGroups);
        }
    }, []);

    const { selectedGroup, setSelectedGroup } = useContext(NotesContext);

    useEffect(() => {
        const storedSelectedGroup = JSON.parse(localStorage.getItem('selectedGroup'));
        if (storedSelectedGroup) {
            setSelectedGroup(storedSelectedGroup);
        }
    }, []);


    const handleSelectGroup = (nameOfGroup, initials, color) => {
        const updatedSelectedGroup = {
            name: nameOfGroup,
            initials: initials,
            color: color
        };

        localStorage.setItem('selectedGroup', JSON.stringify(updatedSelectedGroup));
        setSelectedGroup(updatedSelectedGroup);

        navigate('/notes');
    };





    useEffect(() => {
        localStorage.setItem('parentGroup', JSON.stringify(parentGroup));
    }, [parentGroup]);


    const openModal = () => {
        setIsopen(true);
    }

    const closeModal = () => {
        setIsopen(false);
    }

    const handleColor = (color) => {
        setSelectedColor(color);
    }

    const handleCreate = () => {
        const isDuplicateGroupName = parentGroup.some(group => group.name && group.name.toLowerCase() === groupName.toLowerCase());

        if (!groupName) {
            toast.error('Enter Group Name!');
            return;
        }

        if (!selectedColor) {
            toast.error('Choose Color!');
            return;
        }

        if (!isNaN(groupName.charAt(0))) {
            toast.error('First letter should be letter!');
            return;
        }

        if (isDuplicateGroupName) {
            toast.error('Group Name already exists!');
            return;
        }

        const currentGroup = {
            name: groupName,
            color: selectedColor,
            notes: []
        }

        setParentGroup((parentGroup) => {
            return [...parentGroup, currentGroup];
        });

        toast.success("Group created!")

        setGroupName("");
        setSelectedColor("");
        setSelectedCircle("");

        closeModal();
    }

    return (
        <div className='sidebar'>
            <div className="sidebar-heading">
                Pocket Notes
            </div>
            <div className="group-names">
                {
                    parentGroup.map((item) => (
                        <div
                            className={`group ${selectedGroup.name === item.name ? 'selected-group' : ''}`}
                            key={item.name}
                            onClick={() => handleSelectGroup(
                                getNameToBeDisplayed(item.name),
                                getInitials(item.name),
                                item.color)}
                        >
                            <div className='group-name-logo' style={{ backgroundColor: item.color }}>{getInitials(item.name)}</div>
                            <div>{getNameToBeDisplayed(item.name)}</div>
                        </div>
                    ))
                }
            </div>

            <div className="addgroup-btn" onClick={openModal}>+</div>
            <DesktopPopUp
                isOpen={isOpen}
                onRequestClose={closeModal}
                onColorClick={handleColor}
                onCreate={handleCreate}
                groupName={groupName}
                setGroupName={setGroupName}
                seletedCircle={seletedCircle}
                setSelectedCircle={setSelectedCircle}
            />

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Sidebar;