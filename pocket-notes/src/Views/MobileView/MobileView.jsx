import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MobileSidebar from '../../Components/MobileSidebar/MobileSidebar';
import Notespage from '../../Pages/Notespage/Notespage';
import './MobileView.css';

const MobileView = () => {
  return (
    <div className='Mobile-view' >
      <Routes>
        <Route path='/' element={<MobileSidebar />} />
        <Route path='/notes' element={<Notespage/>} />
      </Routes>
    </div>
  )
}

export default MobileView;